<template>
  <div class="text-gray-900 bg-gray-200">
    <div class="p-4 flex">
      <h1 class="text-3xl font-bold text-gray-600">Điểm xuất phát</h1>
    </div>
    <div class="px-3 py-4 flex justify-center">
      <table class="w-full text-md bg-white shadow-md rounded mb-4">
        <tbody>
          <tr class="border-b">
            <th class="text-left p-3 px-5">ID</th>
            <th class="text-left p-3 px-5">Tên địa điểm</th>
            <th></th>
          </tr>
          <tr
            v-for="(location, index) in displayedDepartures"
            :key="index"
            class="border-b hover:bg-orange-100 bg-gray-100"
          >
            <td class="p-3 px-5">
              <input
                v-model="location.location_id"
                type="text"
                disabled="true"
                class="bg-transparent border-none"
              />
            </td>
            <td class="p-3 px-5">
              <input
                v-model="location.location_name"
                type="text"
                disabled="true"
                class="bg-transparent border-none"
              />
            </td>
            <td class="p-3 px-5 flex justify-end">
              <button
                class="mr-3 text-sm bg-blue-500 hover:bg-blue-700 text-white py-1 px-2 rounded focus:outline-none focus:shadow-outline"
                @click="editDeparture(location)"
              >
                Edit
              </button>
              <button
                type="button"
                class="text-sm bg-red-500 hover:bg-red-700 text-white py-1 px-2 rounded focus:outline-none focus:shadow-outline"
                @click="deleteDeparture(location)"
              >
                Delete
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <button
      class="ml-10 text-sm bg-blue-500 hover:bg-blue-700 text-white py-2 px-3 rounded focus:outline-none focus:shadow-outline"
      type="button"
      @click="showModalAdd_departure = true"
    >
      Thêm địa điểm
    </button>
    <div class="flex justify-center">
      <button
        class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-l"
        :disabled="currentPage_departure === 1"
        @click="goToPage_departure(currentPage_departure - 1)"
      >
        Previous
      </button>
      <button
        class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4"
        v-for="pageNumber_departure in totalPages_departure"
        :key="pageNumber_departure"
        :class="{
          'bg-blue-700': currentPage_departure === pageNumber_departure,
        }"
        @click="goToPage_departure(pageNumber_departure)"
      >
        {{ pageNumber_departure }}
      </button>
      <button
        class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-r"
        :disabled="currentPage_departure === totalPages_departure"
        @click="goToPage_departure(currentPage_departure + 1)"
      >
        Next
      </button>
    </div>

    <!-- Model Edit -->
    <div
      v-if="showModal_departure"
      class="fixed inset-0 z-50 flex items-center justify-center overflow-auto bg-black bg-opacity-50"
      @click.self="closeModal_departure"
    >
      <div class="bg-white p-8 rounded-lg shadow-lg max-w-md">
        <!-- Nội dung của modal -->
        <h2 class="text-xl font-semibold mb-4">Thông tin địa điểm</h2>
        <form
          @submit.prevent="update"
          class="grid grid-cols-1 gap-6 mt-8 md:grid-cols-2"
        >
          <div>
            <label class="block mb-2 text-sm text-gray-600 dark:text-gray-200"
              >Id địa điểm</label
            >
            <input
              disabled="true"
              v-model="currentDeparture.location_id"
              type="text"
              class="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
            />
          </div>

          <div>
            <label class="block mb-2 text-sm text-gray-600 dark:text-gray-200"
              >Tên địa điểm</label
            >
            <input
              v-model="currentDeparture.location_name"
              type="text"
              class="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
            />
          </div>
          <button
            type="submit"
            @click="updateDeparture()"
            class="flex items-center justify-between w-full px-6 py-3 text-sm tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-500 rounded-md hover:bg-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50"
          >
            <span>Lưu chỉnh sửa</span>

            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="w-5 h-5 rtl:-scale-x-100"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fill-rule="evenodd"
                d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                clip-rule="evenodd"
              />
            </svg>
          </button>
        </form>
        <!-- Nút để đóng modal -->
        <button
          class="mt-4 text-sm bg-gray-300 hover:bg-gray-400 text-gray-800 py-1 px-2 rounded focus:outline-none focus:shadow-outline"
          @click="closeModal_departure"
        >
          Close
        </button>
      </div>
    </div>

    <!-- Modal Del -->
    <div
      v-if="showModalDel_departure"
      class="fixed inset-0 z-50 flex items-center justify-center overflow-auto bg-black bg-opacity-50"
      @click.self="closeModalDel_departure"
    >
      <div class="bg-white p-8 rounded-lg shadow-lg max-w-md">
        <!-- Nội dung của modal -->
        <h2 class="text-xl font-semibold mb-4">Xác nhận xoá điểm đi</h2>
        <p>Bạn muốn xoá điểm đi?</p>
        <p>ID: {{ currentDeparture.location_id }}</p>
        <p>Tên địa điểm: {{ currentDeparture.location_name }}</p>
        <!-- Nút để xác nhận xoá -->
        <button
          class="mt-4 text-sm bg-red-500 hover:bg-red-700 text-white py-1 px-2 rounded focus:outline-none focus:shadow-outline mr-2"
          @click="deleteItemDeparture"
        >
          Xoá
        </button>
        <!-- Nút để trở lại -->
        <button
          class="mt-4 text-sm bg-gray-300 hover:bg-gray-400 text-gray-800 py-1 px-2 rounded focus:outline-none focus:shadow-outline"
          @click="closeModalDel_departure"
        >
          Trở về
        </button>
      </div>
    </div>

    <!-- Modal Add -->
    <div
      v-if="showModalAdd_departure"
      class="fixed inset-0 z-50 flex items-center justify-center overflow-auto bg-black bg-opacity-50"
      @click.self="closeModalAdd_departure"
    >
      <div class="bg-white p-8 rounded-lg shadow-lg max-w-md">
        <!-- Nội dung của modal -->
        <h2 class="text-xl font-semibold mb-4">Thông tin điểm đi</h2>
        <form
          @submit.prevent="update"
          class="grid grid-cols-1 gap-6 mt-8 md:grid-cols-2"
        >
          <div>
            <label class="block mb-2 text-sm text-gray-600 dark:text-gray-200"
              >Tên địa điểm</label
            >
            <input
              v-model="departure_name"
              type="text"
              class="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
            />
          </div>
          <button
            type="submit"
            @click="addDeparture()"
            class="flex items-center justify-between w-full px-6 py-3 text-sm tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-500 rounded-md hover:bg-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50"
          >
            <span>Thêm địa điểm</span>

            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="w-5 h-5 rtl:-scale-x-100"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fill-rule="evenodd"
                d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                clip-rule="evenodd"
              />
            </svg>
          </button>
        </form>
      </div>
    </div>

    <!-- --------------------BẢNG ĐIỂM ĐẾN-------------------------- -->

    <div class="p-4 flex">
      <h1 class="text-3xl font-bold text-gray-600">Điểm đến</h1>
    </div>
    <div class="px-3 py-4 flex justify-center">
      <table class="w-full text-md bg-white shadow-md rounded mb-4">
        <tbody>
          <tr class="border-b">
            <th class="text-left p-3 px-5">ID</th>
            <th class="text-left p-3 px-5">Tên địa điểm</th>
            <th></th>
          </tr>
          <tr
            v-for="(location, index) in displayedDestinations"
            :key="index"
            class="border-b hover:bg-orange-100 bg-gray-100"
          >
            <td class="p-3 px-5">
              <input
                v-model="location.location_id"
                type="text"
                disabled="true"
                class="bg-transparent border-none"
              />
            </td>
            <td class="p-3 px-5">
              <input
                v-model="location.location_name"
                type="text"
                disabled="true"
                class="bg-transparent border-none"
              />
            </td>
            <td class="p-3 px-5 flex justify-end">
              <button
                class="mr-3 text-sm bg-blue-500 hover:bg-blue-700 text-white py-1 px-2 rounded focus:outline-none focus:shadow-outline"
                @click="editDestination(location)"
              >
                Edit
              </button>
              <button
                type="button"
                class="text-sm bg-red-500 hover:bg-red-700 text-white py-1 px-2 rounded focus:outline-none focus:shadow-outline"
                @click="deleteDestination(location)"
              >
                Delete
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <button
      class="ml-10 text-sm bg-blue-500 hover:bg-blue-700 text-white py-2 px-3 rounded focus:outline-none focus:shadow-outline"
      type="button"
      @click="showModalAdd_destination = true"
    >
      Thêm địa điểm
    </button>
    <div class="flex justify-center">
      <button
        class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-l"
        :disabled="currentPage_destination === 1"
        @click="goToPage_destination(currentPage_destination - 1)"
      >
        Previous
      </button>
      <button
        class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4"
        v-for="pageNumber_destination in totalPages_destination"
        :key="pageNumber_destination"
        :class="{
          'bg-blue-700': currentPage_destination === pageNumber_destination,
        }"
        @click="goToPage_destination(pageNumber_destination)"
      >
        {{ pageNumber_destination }}
      </button>
      <button
        class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-r"
        :disabled="currentPage_destination === totalPages_destination"
        @click="goToPage_destination(currentPage_destination + 1)"
      >
        Next
      </button>
    </div>

    <!-- Model Edit -->
    <div
      v-if="showModal_destination"
      class="fixed inset-0 z-50 flex items-center justify-center overflow-auto bg-black bg-opacity-50"
      @click.self="closeModal_destination"
    >
      <div class="bg-white p-8 rounded-lg shadow-lg max-w-md">
        <!-- Nội dung của modal -->
        <h2 class="text-xl font-semibold mb-4">Thông tin địa điểm</h2>
        <form
          @submit.prevent="update"
          class="grid grid-cols-1 gap-6 mt-8 md:grid-cols-2"
        >
          <div>
            <label class="block mb-2 text-sm text-gray-600 dark:text-gray-200"
              >Id địa điểm</label
            >
            <input
              disabled="true"
              v-model="currentDestination.location_id"
              type="text"
              class="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
            />
          </div>

          <div>
            <label class="block mb-2 text-sm text-gray-600 dark:text-gray-200"
              >Tên địa điểm</label
            >
            <input
              v-model="currentDestination.location_name"
              type="text"
              class="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
            />
          </div>
          <button
            type="submit"
            @click="updateDestination()"
            class="flex items-center justify-between w-full px-6 py-3 text-sm tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-500 rounded-md hover:bg-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50"
          >
            <span>Lưu chỉnh sửa</span>

            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="w-5 h-5 rtl:-scale-x-100"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fill-rule="evenodd"
                d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                clip-rule="evenodd"
              />
            </svg>
          </button>
        </form>
        <!-- Nút để đóng modal -->
        <button
          class="mt-4 text-sm bg-gray-300 hover:bg-gray-400 text-gray-800 py-1 px-2 rounded focus:outline-none focus:shadow-outline"
          @click="closeModal_destination"
        >
          Close
        </button>
      </div>
    </div>

    <!-- Modal Del -->
    <div
      v-if="showModalDel_destination"
      class="fixed inset-0 z-50 flex items-center justify-center overflow-auto bg-black bg-opacity-50"
      @click.self="closeModalDel_destination"
    >
      <div class="bg-white p-8 rounded-lg shadow-lg max-w-md">
        <!-- Nội dung của modal -->
        <h2 class="text-xl font-semibold mb-4">Xác nhận xoá điểm đi</h2>
        <p>Bạn muốn xoá điểm đi?</p>
        <p>ID: {{ currentDestination.location_id }}</p>
        <p>Tên địa điểm: {{ currentDestination.location_name }}</p>
        <!-- Nút để xác nhận xoá -->
        <button
          class="mt-4 text-sm bg-red-500 hover:bg-red-700 text-white py-1 px-2 rounded focus:outline-none focus:shadow-outline mr-2"
          @click="deleteItemDestination"
        >
          Xoá
        </button>
        <!-- Nút để trở lại -->
        <button
          class="mt-4 text-sm bg-gray-300 hover:bg-gray-400 text-gray-800 py-1 px-2 rounded focus:outline-none focus:shadow-outline"
          @click="closeModalDel_destination"
        >
          Trở về
        </button>
      </div>
    </div>

    <!-- Modal Add -->
    <div
      v-if="showModalAdd_destination"
      class="fixed inset-0 z-50 flex items-center justify-center overflow-auto bg-black bg-opacity-50"
      @click.self="closeModalAdd_destination"
    >
      <div class="bg-white p-8 rounded-lg shadow-lg max-w-md">
        <!-- Nội dung của modal -->
        <h2 class="text-xl font-semibold mb-4">Thông tin điểm đến</h2>
        <form
          @submit.prevent="update"
          class="grid grid-cols-1 gap-6 mt-8 md:grid-cols-2"
        >
          <div>
            <label class="block mb-2 text-sm text-gray-600 dark:text-gray-200"
              >Tên địa điểm</label
            >
            <input
              v-model="destination_name"
              type="text"
              class="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
            />
          </div>
          <button
            type="submit"
            @click="addDestination()"
            class="flex items-center justify-between w-full px-6 py-3 text-sm tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-500 rounded-md hover:bg-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50"
          >
            <span>Thêm địa điểm</span>

            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="w-5 h-5 rtl:-scale-x-100"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fill-rule="evenodd"
                d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                clip-rule="evenodd"
              />
            </svg>
          </button>
        </form>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref, watch, computed, watchEffect } from "vue";
import axios from "axios";

const currentDeparture = ref({});
const departures = ref([]);

onMounted(async () => {
  try {
    const destinationList = await axios.get(
      "http://localhost:8080/smart_travel_api/admin/api/manageVisit/showAllDestination.php"
    );
    destinations.value = destinationList.data;
    console.log(destinations.value);
  } catch (error) {
    console.error(error);
  }
  try {
    const departureList = await axios.get(
      "http://localhost:8080/smart_travel_api/admin/api/manageVisit/showAllDeparture.php"
    );
    departures.value = departureList.data;
    console.log(departures.value);
  } catch (error) {
    console.error(error);
  }
});

let isUpdating_departure = false; // Biến này sẽ kiểm tra xem hàm update đã được gọi hay chưa
async function updateDeparture() {
  if (isUpdating_departure) return; // Nếu hàm update đã được gọi, không cho phép gọi lại
  isUpdating_departure = true; // Đánh dấu là hàm update đang được gọi
  const formData = new FormData();
  formData.append("location_id", currentDeparture.value.location_id);
  formData.append("location_name", currentDeparture.value.location_name);
  try {
    const response = await axios.post(
      "http://localhost:8080/smart_travel_api/admin/api/manageLocation/editDeparture.php",
      formData
    );
    // debugger;
    alert("Cập nhật thành công");
    // Cập nhật displayedUsers sau khi nhận phản hồi thành công
    const updatedDepartureIndex = displayedDepartures.value.findIndex(
      (location) => location.location_id === currentDeparture.value.location_id
    );
    if (updatedDepartureIndex !== -1) {
      displayedDepartures.value[updatedDepartureIndex] = {
        ...currentDeparture.value,
      };
    }
  } catch (error) {
    console.error("Error:", error);
    alert("Cập nhật thất bại. Xin vui lòng thử lại!");
  } finally {
    isUpdating_departure = false; // Đặt lại biến isUpdating sau khi hoàn thành hoặc gặp lỗi
  }
}
const itemsPerPage_departure = ref(5);
const currentPage_departure = ref(1);

const totalPages_departure = computed(() =>
  Math.ceil(departures.value.length / itemsPerPage_departure.value)
);

const startIndex_departure = computed(
  () => (currentPage_departure.value - 1) * itemsPerPage_departure.value
);

const displayedDepartures = computed(() =>
  departures.value.slice(
    startIndex_departure.value,
    startIndex_departure.value + itemsPerPage_departure.value
  )
);

const goToPage_departure = (page) => {
  if (page >= 1 && page <= totalPages_departure.value) {
    currentPage_departure.value = page;
  }
};

const editDeparture = (location) => {
  currentDeparture.value = { ...location };
  showModal_departure.value = true; // Hiển thị modal
};
const deleteDeparture = (location) => {
  currentDeparture.value = { ...location };
  showModalDel_departure.value = true; // Hiển thị modal
};

// Sử dụng một biến ref để theo dõi trạng thái của modal
const showModal_departure = ref(false);
// Hàm để đóng modal
const closeModal_departure = () => {
  showModal_departure.value = false;
};
// Sử dụng một biến ref để theo dõi trạng thái của modal
const showModalDel_departure = ref(false);
// Hàm để đóng modal
const closeModalDel_departure = () => {
  showModalDel_departure.value = false;
};
// Hàm để xác nhận xoá
async function deleteItemDeparture() {
  try {
    const response = await axios.delete(
      `http://localhost:8080/smart_travel_api/admin/api/manageLocation/deleteDeparture.php?id=${currentDeparture.value.location_id}`
    );
    alert("Xoá thành công");
    closeModalDel_departure();
    const updatedDepartureIndex = displayedDepartures.value.findIndex(
      (location) => location.location_id === currentDeparture.value.location_id
    );
    if (updatedDepartureIndex !== -1) {
      displayedDepartures.value.splice(updatedDepartureIndex, 1);
    }
  } catch (error) {
    console.error("Error:", error);
    alert("Xoá thất bại. Xin vui lòng thử lại!");
  }
}
const showModalAdd_departure = ref(false);
// Hàm để đóng modal
const closeModalAdd_departure = () => {
  showModalAdd_departure.value = false;
};

const departure_name = ref("");
let isAdd_departure = false;
async function addDeparture() {
  if (isAdd_departure) return; // Nếu hàm add đã được gọi, không cho phép gọi lại
  isAdd_departure = true;

  const formData = new FormData();
  formData.append("location_name", departure_name.value);

  try {
    const response = await axios.post(
      "http://localhost:8080/smart_travel_api/admin/api/manageLocation/addDeparture.php",
      formData
    );
    alert("Thêm thành công");
    closeModalAdd_departure();
    // Đặt các giá trị về rỗng sau khi thêm thành công
    departure_name.value = "";
  } catch (error) {
    console.error("Error:", error);
  } finally {
    isAdd_departure = false; //
  }
}

// <!-- --------------------BẢNG ĐIỂM ĐẾN-------------------------- -->

const currentDestination = ref({});
const destinations = ref([]);

let isUpdating_destination = false; // Biến này sẽ kiểm tra xem hàm update đã được gọi hay chưa
async function updateDestination() {
  if (isUpdating_destination) return; // Nếu hàm update đã được gọi, không cho phép gọi lại
  isUpdating_destination = true; // Đánh dấu là hàm update đang được gọi
  const formData = new FormData();
  formData.append("location_id", currentDestination.value.location_id);
  formData.append("location_name", currentDestination.value.location_name);
  try {
    const response = await axios.post(
      "http://localhost:8080/smart_travel_api/admin/api/manageLocation/editDestination.php",
      formData
    );
    // debugger;
    alert("Cập nhật thành công");
    // Cập nhật displayedUsers sau khi nhận phản hồi thành công
    const updatedDestinationIndex = displayedDestinations.value.findIndex(
      (location) =>
        location.location_id === currentDestination.value.location_id
    );
    if (updatedDestinationIndex !== -1) {
      displayedDestinations.value[updatedDestinationIndex] = {
        ...currentDestination.value,
      };
    }
  } catch (error) {
    console.error("Error:", error);
    alert("Cập nhật thất bại. Xin vui lòng thử lại!");
  } finally {
    isUpdating_destination = false; // Đặt lại biến isUpdating sau khi hoàn thành hoặc gặp lỗi
  }
}
const itemsPerPage_destination = ref(5);
const currentPage_destination = ref(1);

const totalPages_destination = computed(() =>
  Math.ceil(destinations.value.length / itemsPerPage_destination.value)
);

const startIndex_destination = computed(
  () => (currentPage_destination.value - 1) * itemsPerPage_destination.value
);

const displayedDestinations = computed(() =>
  destinations.value.slice(
    startIndex_destination.value,
    startIndex_destination.value + itemsPerPage_destination.value
  )
);

const goToPage_destination = (page) => {
  if (page >= 1 && page <= totalPages_destination.value) {
    currentPage_destination.value = page;
  }
};

const editDestination = (location) => {
  currentDestination.value = { ...location };
  showModal_destination.value = true; // Hiển thị modal
};
const deleteDestination = (location) => {
  currentDestination.value = { ...location };
  showModalDel_destination.value = true; // Hiển thị modal
};

// Sử dụng một biến ref để theo dõi trạng thái của modal
const showModal_destination = ref(false);
// Hàm để đóng modal
const closeModal_destination = () => {
  showModal_destination.value = false;
};
// Sử dụng một biến ref để theo dõi trạng thái của modal
const showModalDel_destination = ref(false);
// Hàm để đóng modal
const closeModalDel_destination = () => {
  showModalDel_destination.value = false;
};
// Hàm để xác nhận xoá
async function deleteItemDestination() {
  try {
    const response = await axios.delete(
      `http://localhost:8080/smart_travel_api/admin/api/manageLocation/deleteDestination.php?id=${currentDestination.value.location_id}`
    );
    alert("Xoá thành công");
    closeModalDel_destination();
    // Cập nhật displayedUsers sau khi nhận phản hồi thành công
    const updatedDestinationIndex = displayedDestinations.value.findIndex(
      (location) =>
        location.location_id === currentDestination.value.location_id
    );
    if (updatedDestinationIndex !== -1) {
      displayedDestinations.value.splice(updatedDestinationIndex, 1);
    }
  } catch (error) {
    console.error("Error:", error);
    alert("Xoá thất bại. Xin vui lòng thử lại!");
  }
}
const showModalAdd_destination = ref(false);
// Hàm để đóng modal
const closeModalAdd_destination = () => {
  showModalAdd_destination.value = false;
};

const destination_name = ref("");
let isAdd_destination = false;

async function addDestination() {
  if (isAdd_destination) return; // Nếu hàm add đã được gọi, không cho phép gọi lại
  isAdd_destination = true;

  const formData = new FormData();
  formData.append("destination_name", destination_name.value);

  try {
    const response = await axios.post(
      "http://localhost:8080/smart_travel_api/admin/api/manageLocation/addDestination.php",
      formData
    );
    alert("Thêm thành công");
    // Đặt các giá trị về rỗng sau khi thêm thành công
    closeModalAdd_destination();
    destination_name.value = "";
  } catch (error) {
    console.error("Error:", error);
  } finally {
    isAdd_destination = false; //
  }
}
</script>

<style scoped></style>
