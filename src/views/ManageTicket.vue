<template>
  <div class="text-gray-900 bg-gray-200">
    <div class="p-4 flex">
      <h1 class="text-3xl font-bold text-gray-600">Vé</h1>
    </div>
    <div class="px-3 py-4 flex justify-center">
      <table class="w-full text-md bg-white shadow-md rounded mb-4">
        <tbody>
          <tr class="border-b">
            <th class="text-left p-3 px-5">ID vé</th>
            <th class="text-left p-3 px-5">Điểm xuất phát</th>
            <th class="text-left p-3 px-5">Điểm đến</th>
            <th class="text-left p-3 px-5">Số lượng</th>
            <th></th>
          </tr>
          <tr
            v-for="(ticket, index) in displayedTickets"
            :key="index"
            class="border-b hover:bg-orange-100 bg-gray-100"
          >
            <td class="p-3 px-5">
              <input
                v-model="ticket.id"
                type="text"
                disabled="true"
                class="bg-transparent border-none"
              />
            </td>
            <td class="p-3 px-5">
              <input
                v-model="ticket.departure"
                type="text"
                disabled="true"
                class="bg-transparent border-none"
              />
            </td>
            <td class="p-3 px-5">
              <!-- v-model="booking.total_amount" -->
              <input
                v-model="ticket.destination"
                type="text"
                disabled="true"
                class="bg-transparent border-none"
              />
            </td>
            <td class="p-3 px-5">
              <!-- v-model="booking.total_amount" -->
              <input
                v-model="ticket.amount"
                type="text"
                disabled="true"
                class="bg-transparent border-none"
              />
            </td>
            <td class="p-3 px-5 flex justify-end">
              <button
                class="mr-3 text-sm bg-blue-500 hover:bg-blue-700 text-white py-1 px-2 rounded focus:outline-none focus:shadow-outline"
                @click="editTicket(ticket)"
              >
                Edit
              </button>
              <button
                type="button"
                class="text-sm bg-red-500 hover:bg-red-700 text-white py-1 px-2 rounded focus:outline-none focus:shadow-outline"
                @click="deleteTicket(ticket)"
              >
                Delete
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <button
      class="ml-10 mb-5 text-sm bg-blue-500 hover:bg-blue-700 text-white py-2 px-3 rounded focus:outline-none focus:shadow-outline"
      type="button"
      @click="showModalAdd = true"
    >
      Thêm vé
    </button>
    <!-- Pagination -->
    <div class="flex justify-center">
      <button
        class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-l"
        :disabled="currentPage === 1"
        @click="goToPage(currentPage - 1)"
      >
        Previous
      </button>
      <template v-if="totalPages <= 5">
        <!-- Hiển thị tất cả các trang nếu tổng số trang không vượt quá 5 -->
        <button
          class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4"
          v-for="pageNumber in totalPages"
          :key="pageNumber"
          :class="{ 'bg-blue-700': currentPage === pageNumber }"
          @click="goToPage(pageNumber)"
        >
          {{ pageNumber }}
        </button>
      </template>
      <template v-else>
        <span class="px-4">...</span>
        <!-- Hiển thị trang hiện tại và 2 trang liền kề nếu có -->
        <template v-if="currentPage <= 3">
          <!-- Nếu trang hiện tại là 1, 2 hoặc 3 -->
          <button
            v-for="pageNumber in 3"
            class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4"
            :class="{ 'bg-blue-700': currentPage === pageNumber }"
            :key="pageNumber"
            @click="goToPage(pageNumber)"
          >
            {{ pageNumber }}
          </button>
        </template>
        <template v-else-if="currentPage >= totalPages - 2">
          <!-- Nếu trang hiện tại là ở 3 trang cuối cùng -->
          <button
            v-for="pageNumber in [totalPages - 2, totalPages - 1, totalPages]"
            class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4"
            :class="{ 'bg-blue-700': currentPage === pageNumber }"
            :key="pageNumber"
            @click="goToPage(pageNumber)"
          >
            {{ pageNumber }}
          </button>
        </template>
        <template v-else>
          <!-- Trang hiện tại ở giữa -->
          <button
            class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4"
            @click="goToPage(currentPage - 1)"
          >
            {{ currentPage - 1 }}
          </button>
          <button
            class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4"
            :class="{ 'bg-blue-700': currentPage === currentPage }"
            @click="goToPage(currentPage)"
          >
            {{ currentPage }}
          </button>
          <button
            class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4"
            @click="goToPage(currentPage + 1)"
          >
            {{ currentPage + 1 }}
          </button>
        </template>
        <span class="px-4">...</span>
      </template>
      <button
        class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-r"
        :disabled="currentPage === totalPages"
        @click="goToPage(currentPage + 1)"
      >
        Next
      </button>
    </div>
    <!-- Model Edit -->
    <div
      v-if="showModal"
      class="fixed inset-0 z-50 flex items-center justify-center overflow-auto bg-black bg-opacity-50"
      @click.self="closeModal"
    >
      <div class="bg-white p-8 rounded-lg shadow-lg max-w-md">
        <!-- Nội dung của modal -->
        <h2 class="text-xl font-semibold mb-4">Thông tin vé</h2>
        <form
          @submit.prevent="update"
          class="grid grid-cols-1 gap-6 mt-8 md:grid-cols-2"
        >
          <div>
            <label class="block mb-2 text-sm text-gray-600 dark:text-gray-200"
              >Id vé</label
            >
            <input
              disabled="true;"
              v-model="currentTicket.id"
              type="text"
              placeholder="Nguyen Cong Can"
              class="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
            />
          </div>
          <div>
            <label class="block mb-2 text-sm text-gray-600 dark:text-gray-200"
              >Điểm xuất phát</label
            >
            <select
              v-model="currentTicket.departure_id"
              class="w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
            >
              <option
                v-for="departure in departures"
                :key="departure.location_id"
                :value="departure.location_id"
              >
                {{ departure.location_name }}
              </option>
            </select>
          </div>
          <div>
            <label class="block mb-2 text-sm text-gray-600 dark:text-gray-200"
              >Điểm đến</label
            >
            <select
              v-model="currentTicket.destination_id"
              class="w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
            >
              <option
                v-for="destination in destinations"
                :key="destination.location_id"
                :value="destination.location_id"
              >
                {{ destination.location_name }}
              </option>
            </select>
          </div>
          <div>
            <label class="block mb-2 text-sm text-gray-600 dark:text-gray-200"
              >Phí di chuyển (VND)</label
            >
            <input
              v-model="currentTicket.fee"
              type="text"
              placeholder="10/10/2025"
              class="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
            />
          </div>
          <div>
            <label class="block mb-2 text-sm text-gray-600 dark:text-gray-200"
              >Thời gian di chuyển</label
            >
            <input
              v-model="currentTicket.time"
              type="text"
              placeholder="20/10/2024"
              class="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
            />
          </div>
          <div>
            <label class="block mb-2 text-sm text-gray-600 dark:text-gray-200"
              >Số lượng vé</label
            >
            <input
              v-model="currentTicket.amount"
              type="text"
              placeholder="Huế"
              class="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
            />
          </div>

          <button
            type="submit"
            @click="update()"
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
          @click="closeModal"
        >
          Close
        </button>
      </div>
    </div>

    <!-- Modal Del -->
    <div
      v-if="showModalDel"
      class="fixed inset-0 z-50 flex items-center justify-center overflow-auto bg-black bg-opacity-50"
      @click.self="closeModalDel"
    >
      <div class="bg-white p-8 rounded-lg shadow-lg max-w-md">
        <!-- Nội dung của modal -->
        <h2 class="text-xl font-semibold mb-4">Xác nhận xoá vé</h2>
        <p>Bạn muốn xoá vé?</p>
        <p>ID vé: {{ currentTicket.id }}</p>
        <p>Điểm xuất phát: {{ currentTicket.departure }}</p>
        <p>Điểm đến: {{ currentTicket.destination }}</p>
        <!-- Nút để xác nhận xoá -->
        <button
          class="mt-4 text-sm bg-red-500 hover:bg-red-700 text-white py-1 px-2 rounded focus:outline-none focus:shadow-outline mr-2"
          @click="deleteItem"
        >
          Xoá
        </button>
        <!-- Nút để trở lại -->
        <button
          class="mt-4 text-sm bg-gray-300 hover:bg-gray-400 text-gray-800 py-1 px-2 rounded focus:outline-none focus:shadow-outline"
          @click="closeModalDel"
        >
          Trở về
        </button>
      </div>
    </div>

    <!-- Modal Add -->
    <div
      v-if="showModalAdd"
      class="fixed inset-0 z-50 flex items-center justify-center overflow-auto bg-black bg-opacity-50"
      @click.self="closeModalAdd"
    >
      <div class="bg-white p-8 rounded-lg shadow-lg max-w-md">
        <!-- Nội dung của modal -->
        <h2 class="text-xl font-semibold mb-4">Thêm vé</h2>
        <form
          @submit.prevent="update"
          class="grid grid-cols-1 gap-6 mt-8 md:grid-cols-2"
        >
          <div>
            <label class="block mb-2 text-sm text-gray-600 dark:text-gray-200"
              >Điểm xuất phát</label
            >
            <select
              v-model="departure_id"
              class="w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
            >
              <option
                v-for="departure in departures"
                :key="departure.location_id"
                :value="departure.location_id"
              >
                {{ departure.location_name }}
              </option>
            </select>
          </div>
          <div>
            <label class="block mb-2 text-sm text-gray-600 dark:text-gray-200"
              >Điểm đến</label
            >
            <select
              v-model="destination_id"
              class="w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
            >
              <option
                v-for="destination in destinations"
                :key="destination.location_id"
                :value="destination.location_id"
              >
                {{ destination.location_name }}
              </option>
            </select>
          </div>
          <div>
            <label class="block mb-2 text-sm text-gray-600 dark:text-gray-200"
              >Phí di chuyển</label
            >
            <input
              v-model="fee"
              type="text"
              placeholder="VND"
              class="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
            />
          </div>
          <div>
            <label class="block mb-2 text-sm text-gray-600 dark:text-gray-200"
              >Thời gian di chuyển</label
            >
            <input
              v-model="time"
              type="text"
              placeholder="Giờ"
              class="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
            />
          </div>
          <div>
            <label class="block mb-2 text-sm text-gray-600 dark:text-gray-200"
              >Số lượng vé</label
            >
            <input
              v-model="amount"
              type="text"
              placeholder="10"
              class="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
            />
          </div>

          <button
            type="submit"
            @click="addTicket()"
            class="flex items-center justify-between w-full px-6 py-3 text-sm tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-500 rounded-md hover:bg-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50"
          >
            <span>Thêm vé</span>

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
import { onMounted, ref, watch, computed } from "vue";
import axios from "axios";

const tickets = ref([]);
const currentTicket = ref({});
const destinations = ref([]);
const departures = ref([]);

onMounted(async () => {
  try {
    const ticket_list = await axios.get(
      "http://localhost:8080/smart_travel_api/admin/api/manageTicket/showAllTicket.php"
    );
    tickets.value = ticket_list.data;
    console.log(tickets.value);
    // debugger;
  } catch (error) {
    console.error(error);
  }

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

// Số lượng mục trên mỗi trang
const itemsPerPage = ref(5);

// Trang hiện tại
const currentPage = ref(1);

// Tính tổng số trang dựa trên số lượng mục và số lượng mục trên mỗi trang
const totalPages = computed(() =>
  Math.ceil(tickets.value.length / itemsPerPage.value)
);

// Tính chỉ mục bắt đầu của mục đầu tiên trên trang hiện tại
const startIndex = computed(() => (currentPage.value - 1) * itemsPerPage.value);

// Lọc và hiển thị danh sách người dùng trên trang hiện tại
const displayedTickets = computed(() =>
  tickets.value.slice(startIndex.value, startIndex.value + itemsPerPage.value)
);

// Chuyển đến trang cụ thể
const goToPage = (page) => {
  if (page >= 1 && page <= totalPages.value) {
    currentPage.value = page;
  }
};

// Phương thức để chỉnh sửa người dùng
const editTicket = (ticket) => {
  console.log(ticket);
  currentTicket.value = { ...ticket };
  showModal.value = true; // Hiển thị modal
};
const deleteTicket = (ticket) => {
  currentTicket.value = { ...ticket };
  showModalDel.value = true; // Hiển thị modal
};
// console.log(currentBooking.value);
const formattedFee = computed(() => {
  // Lấy giá trị của tuition_fee từ currentVisit
  const fee = currentTicket.value.fee;
  // Định dạng số theo kiểu tiền VND (tách 3 chữ số 1 bằng dấu chấm từ phải sang trái)
  return fee.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
});

function formatCurrencyVND(number) {
  // Chuyển số thành chuỗi và đảm bảo là kiểu số nguyên
  number = parseInt(number).toString();

  // Tạo biến lưu trữ chuỗi kết quả
  let result = "";

  // Duyệt qua chuỗi số từ phải sang trái
  for (let i = number.length - 1, j = 0; i >= 0; i--, j++) {
    // Nếu đến vị trí thứ 3 từ phải sang trái và không phải vị trí cuối cùng
    if (j % 3 === 0 && j !== 0) {
      // Thêm dấu chấm vào chuỗi kết quả
      result = "." + result;
    }
    // Thêm ký tự hiện tại vào chuỗi kết quả
    result = number[i] + result;
  }

  // Trả về chuỗi kết quả đã được định dạng
  return result;
}
// Sử dụng một biến ref để theo dõi trạng thái của modal
const showModal = ref(false);

// Hàm để đóng modal
const closeModal = () => {
  showModal.value = false;
};

let isUpdating = false; // Biến này sẽ kiểm tra xem hàm update đã được gọi hay chưa

async function update() {
  if (isUpdating) return; // Nếu hàm update đã được gọi, không cho phép gọi lại
  isUpdating = true; // Đánh dấu là hàm update đang được gọi

  const formData = new FormData();
  formData.append("id", currentTicket.value.id);
  formData.append("departure_id", currentTicket.value.departure_id);
  formData.append("destination_id", currentTicket.value.destination_id);
  formData.append("fee", currentTicket.value.fee);
  formData.append("amount", currentTicket.value.amount);
  formData.append("time", currentTicket.value.time);

  try {
    const response = await axios.post(
      "http://localhost:8080/smart_travel_api/admin/api/manageTicket/editTicket.php",
      formData
    );
    alert("Cập nhật thành công");

    // Cập nhật displayedUsers sau khi nhận phản hồi thành công
    const updatedTicketIndex = displayedTickets.value.findIndex(
      (ticket) => ticket.id === currentTicket.value.id
    );
    if (updatedTicketIndex !== -1) {
      displayedTickets.value[updatedTicketIndex] = { ...currentTicket.value };
    }
  } catch (error) {
    console.error("Error:", error);
    alert("Cập nhật thất bại. Xin vui lòng thử lại!");
  } finally {
    isUpdating = false; // Đặt lại biến isUpdating sau khi hoàn thành hoặc gặp lỗi
  }
}

// Sử dụng một biến ref để theo dõi trạng thái của modal
const showModalDel = ref(false);

// Hàm để đóng modal
const closeModalDel = () => {
  showModalDel.value = false;
};

// Hàm để xác nhận xoá
async function deleteItem() {
  try {
    const response = await axios.delete(
      `http://localhost:8080/smart_travel_api/admin/api/manageTicket/deleteTicket.php?id=${currentTicket.value.id}`
    );
    alert("Xoá thành công");
    closeModalDel();

    // Cập nhật displayedUsers sau khi nhận phản hồi thành công
    const updatedTicketIndex = displayedTickets.value.findIndex(
      (ticket) => ticket.id === currentTicket.value.id
    );
    if (updatedTicketIndex !== -1) {
      displayedTickets.value.splice(updatedTicketIndex, 1); // Xoá user khỏi displayedUsers
    }
  } catch (error) {
    console.error("Error:", error);
    alert("Xoá thất bại. Xin vui lòng thử lại!");
  }
}

const showModalAdd = ref(false);

// Hàm để đóng modal
const closeModalAdd = () => {
  showModalAdd.value = false;
};

const departure_id = ref("");
const destination_id = ref("");
const fee = ref("");
const amount = ref("");
const time = ref("");

let isAdd = false;
async function addTicket() {
  if (isAdd) return; // Nếu hàm add đã được gọi, không cho phép gọi lại
  isAdd = true;
  const formData = new FormData();
  formData.append("departure_id", departure_id.value);
  formData.append("destination_id", destination_id.value);
  formData.append("fee", fee.value);
  formData.append("amount", amount.value);
  formData.append("time", time.value);

  try {
    const response = await axios.post(
      "http://localhost:8080/smart_travel_api/admin/api/manageTicket/addTicket.php",
      formData
    );
    if (response.data.status === "success") {
      alert("Thêm thành công");
      // Đặt các giá trị về rỗng sau khi thêm thành công
      closeModalAdd();
      departure_id.value = "";
      destination_id.value = "";
      fee.value = "";
      amount.value = "";
      time.value = "";
    } else if (response.data.status === "error") {
      if (response.data.message === "Ticket already exists or failed to add") {
        alert("Vé đã tồn tại!");
      } else {
        alert("Có lỗi xảy ra khi thêm vé");
      }
    }
  } catch (error) {
    console.error("Error:", error);
    alert("Vé đã tồn tại!");
  } finally {
    isAdd = false;
  }
}
</script>

<style scoped></style>
