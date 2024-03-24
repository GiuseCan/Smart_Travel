<template>
  <div class="text-gray-900 bg-gray-200">
    <div class="p-4 flex">
      <h1 class="text-3xl font-bold text-gray-600">Địa điểm</h1>
    </div>
    <div class="px-3 py-4 flex justify-center">
      <table class="w-full text-md bg-white shadow-md rounded mb-4">
        <tbody>
          <tr class="border-b">
            <th class="text-left p-3 px-5">ID</th>
            <th class="text-left p-3 px-5">Tên</th>
            <th class="text-left p-3 px-5">Địa chỉ</th>
            <th></th>
          </tr>
          <tr
            v-for="(visit, index) in displayedVisits"
            :key="index"
            class="border-b hover:bg-orange-100 bg-gray-100"
          >
            <td class="p-3 px-5">
              <input
                v-model="visit.visit_id"
                type="text"
                disabled="true"
                class="bg-transparent border-none"
              />
            </td>
            <td class="p-3 px-5">
              <input
                v-model="visit.visit_name"
                type="text"
                disabled="true"
                class="bg-transparent border-none"
              />
            </td>
            <td class="p-3 px-5">
              <input
                v-model="visit.visit_address"
                type="text"
                disabled="true"
                class="bg-transparent border-none"
              />
            </td>
            <td class="p-3 px-5 flex justify-end">
              <button
                class="mr-3 text-sm bg-blue-500 hover:bg-blue-700 text-white py-1 px-2 rounded focus:outline-none focus:shadow-outline"
                @click="editVisit(visit)"
              >
                <!-- @click="showModal = true" -->
                Edit
              </button>
              <button
                type="button"
                class="text-sm bg-red-500 hover:bg-red-700 text-white py-1 px-2 rounded focus:outline-none focus:shadow-outline"
                @click="deleteVisit(visit)"
              >
                <!-- @click="showModalDel = true" -->
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
      @click="showModalAdd = true"
    >
      Thêm địa điểm
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
        <h2 class="text-xl font-semibold mb-4">Thông tin địa điểm</h2>
        <form
          @submit.prevent="update"
          class="grid grid-cols-1 gap-6 mt-8 md:grid-cols-2"
        >
          <div>
            <label class="block mb-2 text-sm text-gray-600 dark:text-gray-200"
              >Tên địa điểm</label
            >
            <input
              v-model="currentVisit.visit_name"
              type="text"
              class="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
            />
          </div>

          <div>
            <label class="block mb-2 text-sm text-gray-600 dark:text-gray-200"
              >Phí tham quan (VND)</label
            >
            <input
              v-model="currentVisit.tuition_fee"
              type="text"
              class="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
            />
          </div>

          <div>
            <label class="block mb-2 text-sm text-gray-600 dark:text-gray-200"
              >Giờ mở cửa</label
            >
            <input
              v-model="currentVisit.open_time"
              type="text"
              placeholder="00:00"
              class="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
            />
          </div>

          <div>
            <label class="block mb-2 text-sm text-gray-600 dark:text-gray-200"
              >Giờ đóng cửa</label
            >
            <input
              v-model="currentVisit.close_time"
              type="text"
              placeholder="00:00"
              class="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
            />
          </div>

          <div>
            <label class="block mb-2 text-sm text-gray-600 dark:text-gray-200"
              >Địa chỉ
            </label>
            <textarea
              v-model="currentVisit.visit_address"
              type="text"
              placeholder="Địa chỉ"
              class="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
            />
          </div>

          <div>
            <label class="block mb-2 text-sm text-gray-600 dark:text-gray-200"
              >Mô tả</label
            >
            <textarea
              v-model="currentVisit.visit_describe"
              type="text"
              placeholder="Địa chỉ của bạn"
              class="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
            />
          </div>

          <div class="relative">
            <label class="block mb-2 text-sm text-gray-600 dark:text-gray-200"
              >Loại hình du lịch</label
            >
            <button
              @click="toggleDropMenu()"
              class="flex justify-around text-sm text-gray-600 w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
              type="button"
            >
              Các loại hình
              <svg
                class="w-4 h-4"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
              >
                <!--!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.-->
                <path
                  d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z"
                />
              </svg>
            </button>
            <div
              id="dropdown_hobby"
              class="absolute -left-10 bottom-100 mt-2 z-10 hidden bg-white rounded-lg shadow w-60 dark:bg-gray-700"
            >
              <ul
                id="input_edit"
                class="h-32 w-full px-3 pb-3 overflow-y-auto text-sm text-gray-700 dark:text-gray-200"
              >
                <li v-for="(hobby, index) in hobby_list.data" :key="index">
                  <label
                    class="w-full ms-2 text-sm font-medium text-gray-900 rounded dark:text-gray-300 flex items-center p-2 hover:bg-gray-100 dark:hover:bg-gray-600"
                  >
                    <input
                      class="flex items-center p-2 mr-3 rounded dark:hover:bg-gray-600"
                      type="checkbox"
                      :checked="isChecked(hobby)"
                      :value="hobby.hobby_id"
                    />
                    {{ hobby.hobby_name }}
                  </label>
                </li>
              </ul>
            </div>
          </div>
          <div>
            <label class="block text-sm text-gray-600 dark:text-gray-200"
              >Điểm đến</label
            >
            <select
              v-model="currentVisit.destination_id"
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
        <h2 class="text-xl font-semibold mb-4">Xác nhận xoá địa điểm</h2>
        <p>Bạn muốn xoá địa điểm</p>
        <p>ID: {{ currentVisit.visit_id }}</p>
        <p>Tên địa điểm: {{ currentVisit.visit_name }}</p>
        <p>Địa chỉ: {{ currentVisit.visit_address }}</p>
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
        <h2 class="text-xl font-semibold mb-4">Thông tin địa điểm</h2>
        <form
          @submit.prevent="update"
          class="grid grid-cols-1 gap-6 mt-8 md:grid-cols-2"
        >
          <div>
            <label class="block mb-2 text-sm text-gray-600 dark:text-gray-200"
              >Tên địa điểm</label
            >
            <input
              v-model="visit_name"
              type="text"
              class="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
            />
          </div>

          <div>
            <label class="block mb-2 text-sm text-gray-600 dark:text-gray-200"
              >Phí tham quan (VND)</label
            >
            <input
              v-model="tuition_fee"
              type="text"
              class="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
            />
          </div>

          <div>
            <label class="block mb-2 text-sm text-gray-600 dark:text-gray-200"
              >Giờ mở cửa</label
            >
            <input
              v-model="open_time"
              type="text"
              placeholder="00:00"
              class="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
            />
          </div>

          <div>
            <label class="block mb-2 text-sm text-gray-600 dark:text-gray-200"
              >Giờ đóng cửa</label
            >
            <input
              v-model="close_time"
              type="text"
              placeholder="00:00"
              class="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
            />
          </div>

          <div>
            <label class="block mb-2 text-sm text-gray-600 dark:text-gray-200"
              >Địa chỉ
            </label>
            <input
              v-model="visit_address"
              type="text"
              placeholder="Địa chỉ"
              class="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
            />
          </div>

          <div>
            <label class="block mb-2 text-sm text-gray-600 dark:text-gray-200"
              >Mô tả</label
            >
            <input
              v-model="visit_describe"
              type="text"
              placeholder="Địa chỉ của bạn"
              class="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
            />
          </div>

          <div class="relative">
            <label class="block mb-2 text-sm text-gray-600 dark:text-gray-200"
              >Loại hình du lịch</label
            >
            <button
              @click="toggleDropMenu()"
              class="flex justify-around text-sm text-gray-600 w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
              type="button"
            >
              Các loại hình
              <svg
                class="w-4 h-4"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
              >
                <!--!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.-->
                <path
                  d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z"
                />
              </svg>
            </button>
            <div
              id="dropdown_hobby"
              class="absolute -left-10 bottom-100 mt-2 z-10 hidden bg-white rounded-lg shadow w-60 dark:bg-gray-700"
            >
              <ul
                id="input_add"
                class="h-32 w-full px-3 pb-3 overflow-y-auto text-sm text-gray-700 dark:text-gray-200"
              >
                <li v-for="(hobby, index) in hobby_list.data" :key="index">
                  <label
                    class="w-full ms-2 text-sm font-medium text-gray-900 rounded dark:text-gray-300 flex items-center p-2 hover:bg-gray-100 dark:hover:bg-gray-600"
                  >
                    <input
                      :value="hobby.hobby_id"
                      class="flex items-center p-2 mr-3 rounded dark:hover:bg-gray-600"
                      type="checkbox"
                    />
                    {{ hobby.hobby_name }}
                  </label>
                </li>
              </ul>
            </div>
          </div>
          <div>
            <label class="block text-sm text-gray-600 dark:text-gray-200"
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
          <button
            type="submit"
            @click="addVisit()"
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

const visits = ref([]);
const currentVisit = ref({});
const hobby_list = ref([]);
const destinations = ref([]);

onMounted(async () => {
  try {
    const response = await axios.get(
      "http://localhost:8080/smart_travel_api/admin/api/manageVisit/showAllVisit.php"
    );
    visits.value = response.data;
    console.log(visits.value);
    // debugger;
  } catch (error) {
    console.error(error);
  }
  try {
    const hobbies = await axios.get(
      "http://localhost:8080/smart_travel_api/api/services/hobby_list.php"
    );
    hobby_list.value = hobbies.data;
    console.log(hobby_list.value);
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
});

// const selectedHobbies = ref([]);
// const myHobby = ref([]);
let isUpdating = false; // Biến này sẽ kiểm tra xem hàm update đã được gọi hay chưa

async function update() {
  if (isUpdating) return; // Nếu hàm update đã được gọi, không cho phép gọi lại
  isUpdating = true; // Đánh dấu là hàm update đang được gọi

  const formData = new FormData();
  formData.append("visit_id", currentVisit.value.visit_id);
  formData.append("visit_name", currentVisit.value.visit_name);
  formData.append("open_time", currentVisit.value.open_time);
  formData.append("close_time", currentVisit.value.close_time);
  formData.append("visit_describe", currentVisit.value.visit_describe);
  formData.append("tuition_fee", currentVisit.value.tuition_fee);
  // formData.append("tuition_fee", parseInt(unformattedTuitionFee.value));
  formData.append("destination_id", currentVisit.value.destination_id);
  formData.append("visit_address", currentVisit.value.visit_address);
  // formData.append("hobbies", currentVisit.value.hobbies);
  // console.log(currentVisit.value.visit_id);
  // console.log(currentVisit.value.visit_name);
  // console.log(currentVisit.value.open_time);
  // console.log(currentVisit.value.close_time);
  // console.log(currentVisit.value.visit_describe);
  // console.log(currentVisit.value.tuition_fee);
  // console.log(currentVisit.value.destination_id);
  // console.log(currentVisit.value.visit_address);
  // Lấy danh sách các hobby_id được chọn

  // Get the checked hobby IDs
  const checkedCheckboxes = document.querySelectorAll(
    "ul#input_edit li input[type='checkbox']:checked"
  );
  const selectedHobbies = [];
  checkedCheckboxes.forEach((checkbox) => {
    selectedHobbies.push(checkbox.value); // Sử dụng checkbox.value thay vì checkbox.getAttribute("hobby_id")
  });

  formData.append("hobbies", selectedHobbies);

  // console.log(currentVisit.value.visit_id);
  // console.log(currentVisit.value.visit_name);
  // console.log(currentVisit.value.open_time);
  // console.log(currentVisit.value.close_time);
  // console.log(currentVisit.value.visit_describe);
  // console.log(currentVisit.value.tuition_fee);
  // console.log(currentVisit.value.destination_id);
  // console.log(currentVisit.value.visit_address);
  console.log(selectedHobbies);

  try {
    const response = await axios.post(
      "http://localhost:8080/smart_travel_api/admin/api/manageVisit/editVisit.php",
      formData
    );
    // debugger;
    alert("Cập nhật thành công");

    // Cập nhật displayedUsers sau khi nhận phản hồi thành công
    const updatedVisitIndex = displayedVisits.value.findIndex(
      (visit) => visit.visit_id === currentVisit.value.visit_id
    );
    if (updatedVisitIndex !== -1) {
      displayedVisits.value[updatedVisitIndex] = { ...currentVisit.value };
    }
  } catch (error) {
    console.error("Error:", error);
    alert("Cập nhật thất bại. Xin vui lòng thử lại!");
  } finally {
    isUpdating = false; // Đặt lại biến isUpdating sau khi hoàn thành hoặc gặp lỗi
  }
}

// Số lượng mục trên mỗi trang
const itemsPerPage = ref(5);

// Trang hiện tại
const currentPage = ref(1);

// Tính tổng số trang dựa trên số lượng mục và số lượng mục trên mỗi trang
const totalPages = computed(() =>
  Math.ceil(visits.value.length / itemsPerPage.value)
);

// Tính chỉ mục bắt đầu của mục đầu tiên trên trang hiện tại
const startIndex = computed(() => (currentPage.value - 1) * itemsPerPage.value);

// Lọc và hiển thị danh sách người dùng trên trang hiện tại
const displayedVisits = computed(() =>
  visits.value.slice(startIndex.value, startIndex.value + itemsPerPage.value)
);

// Chuyển đến trang cụ thể
const goToPage = (page) => {
  if (page >= 1 && page <= totalPages.value) {
    currentPage.value = page;
  }
};

// Phương thức để chỉnh sửa người dùng
const editVisit = (visit) => {
  currentVisit.value = { ...visit };
  showModal.value = true; // Hiển thị modal
};
const deleteVisit = (visit) => {
  currentVisit.value = { ...visit };
  showModalDel.value = true; // Hiển thị modal
};

// Sử dụng một biến ref để theo dõi trạng thái của modal
const showModal = ref(false);

// Hàm để đóng modal
const closeModal = () => {
  showModal.value = false;
};

// Sử dụng một biến ref để theo dõi trạng thái của modal
const showModalDel = ref(false);

// Hàm để đóng modal
const closeModalDel = () => {
  showModalDel.value = false;
};

// Hàm để xác nhận xoá
async function deleteItem() {
  console.log(currentVisit.value.visit_id);
  try {
    const response = await axios.delete(
      `http://localhost:8080/smart_travel_api/admin/api/manageVisit/deleteVisit.php?id=${currentVisit.value.visit_id}`
    );
    alert("Xoá thành công");
    closeModalDel();

    // Cập nhật displayedUsers sau khi nhận phản hồi thành công
    const updatedVisitIndex = displayedVisits.value.findIndex(
      (visit) => visit.visit_id === currentVisit.value.visit_id
    );
    if (updatedVisitIndex !== -1) {
      displayedVisits.value.splice(updatedVisitIndex, 1); // Xoá user khỏi displayedUsers
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

const visit_name = ref("");
const open_time = ref("");
const close_time = ref("");
const visit_describe = ref("");
const tuition_fee = ref("");
const destination_id = ref("");
const visit_address = ref("");
const hobbies = ref("");

let isAdd = false;
async function addVisit() {
  if (isAdd) return; // Nếu hàm add đã được gọi, không cho phép gọi lại
  isAdd = true;
  const formData = new FormData();
  formData.append("visit_name", visit_name.value);
  formData.append("open_time", open_time.value);
  formData.append("close_time", close_time.value);
  formData.append("visit_describe", visit_describe.value);
  formData.append("tuition_fee", tuition_fee.value);
  formData.append("destination_id", destination_id.value);
  formData.append("visit_address", visit_address.value);

  // Get the checked hobby IDs
  const checkedCheckboxes = document.querySelectorAll(
    "ul#input_add li input[type='checkbox']:checked"
  );
  const selectedHobbies = [];
  checkedCheckboxes.forEach((checkbox) => {
    selectedHobbies.push(checkbox.value); // Sử dụng checkbox.value thay vì checkbox.getAttribute("hobby_id")
  });
  console.log(selectedHobbies);

  formData.append("hobbies", selectedHobbies);

  try {
    const response = await axios.post(
      "http://localhost:8080/smart_travel_api/admin/api/manageVisit/addVisit.php",
      formData
    );

    alert("Thêm thành công");
    // Đặt các giá trị về rỗng sau khi thêm thành công
    closeModalAdd();
    visit_name.value = "";
    open_time.value = "";
    close_time.value = "";
    visit_describe.value = "";
    tuition_fee.value = "";
    destination_id.value = "";
    visit_address.value = "";
    hobbies.value = "";
  } catch (error) {
    console.error("Error:", error);
  } finally {
    // isUpdating = false; // Đặt lại biến isUpdating sau khi hoàn thành hoặc gặp lỗi
    isAdd = false; //
  }
}

function toggleDropMenu() {
  const dropdown = document.getElementById("dropdown_hobby");
  dropdown.classList.toggle("hidden");
}
const isChecked = (hobby) => {
  return currentVisit.value.hobbies.includes(hobby.hobby_name);
};

const formattedTuitionFee = computed(() => {
  // Lấy giá trị của tuition_fee từ currentVisit (kiểm tra kiểu dữ liệu)
  const tuitionFee =
    typeof currentVisit.value.tuition_fee === "string"
      ? currentVisit.value.tuition_fee
      : currentVisit.value.tuition_fee.toString();
  // Định dạng số theo kiểu tiền VND
  return tuitionFee.replace(/\B(?=(\d{3})+(?!\d))/g, ".");
});

const unformattedTuitionFee = computed(() => {
  // Loại bỏ dấu chấm và định dạng
  return formattedTuitionFee.value.replace(/\D/g, "");
});
</script>

<style scoped></style>
