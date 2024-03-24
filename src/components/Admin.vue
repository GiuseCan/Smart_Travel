<template>
  <div id="container" class="flex h-full bg-gray-100">
    <div
      class="flex flex-wrap transition-transform duration-300 ease-in-out"
      :class="{ hidden: !showSideNav, 'transition-transform': true }"
      id="sideNav"
    >
      <div class="p-2 bg-white w-full md:w-60 flex flex-col md:flex">
        <router-link
          @click="isRouterViewVisible = false"
          :to="{ name: 'admin' }"
          class="text-blue-400 font-bold text-5xl m-5 drop-shadow-lg"
        >
          JustChill
        </router-link>
        <router-link
          @click="handleRouterLinkClick"
          class="flex gap-2 border-b-2 border-blue-300 text-gray-500 py-2.5 px-4 my-4 rounded transition duration-200 hover:bg-gradient-to-r hover:from-cyan-500 hover:to-cyan-500 hover:text-white"
          :to="{ name: 'manage_user' }"
        >
          Quản lý người dùng
        </router-link>
        <router-link
          @click="handleRouterLinkClick"
          class="border-b-2 border-blue-300 block text-gray-500 py-2.5 px-4 my-4 rounded transition duration-200 hover:bg-gradient-to-r hover:from-cyan-500 hover:to-cyan-500 hover:text-white"
          :to="{ name: 'manage_locations' }"
        >
          Quản lý các điểm du lịch
        </router-link>
        <router-link
          @click="handleRouterLinkClick"
          class="border-b-2 border-blue-300 block text-gray-500 py-2.5 px-4 my-4 rounded transition duration-200 hover:bg-gradient-to-r hover:from-cyan-500 hover:to-cyan-500 hover:text-white"
          :to="{ name: 'manage_departure_and_destination' }"
        >
          Quản lý địa điểm vé
        </router-link>

        <router-link
          @click="handleRouterLinkClick"
          class="border-b-2 border-blue-300 block text-gray-500 py-2.5 px-4 my-4 rounded transition duration-200 hover:bg-gradient-to-r hover:from-cyan-500 hover:to-cyan-500 hover:text-white"
          :to="{ name: 'manage_ticket' }"
        >
          Quản lý vé
        </router-link>
        <router-link
          @click="handleRouterLinkClick"
          class="border-b-2 border-blue-300 block text-gray-500 py-2.5 px-4 my-4 rounded transition duration-200 hover:bg-gradient-to-r hover:from-cyan-500 hover:to-cyan-500 hover:text-white"
          :to="{ name: 'manage_booking' }"
        >
          Quản lý đặt lịch
        </router-link>
        <!-- <router-link
          @click="handleRouterLinkClick"
          class="border-b-2 border-blue-300 block text-gray-500 py-2.5 px-4 my-4 rounded transition duration-200 hover:bg-gradient-to-r hover:from-cyan-500 hover:to-cyan-500 hover:text-white"
          :to="{ name: 'manage_static_and_report' }"
        >
          Quản lý thống kê, báo cáo
        </router-link> -->
      </div>
    </div>
    <div id="hero_1" class="p-3 w-full h-full transition-transform">
      <div class="flex justify-between pb-5 shadow-md">
        <button
          class="ml-5 flex flex-col justify-between items-center py-4"
          @click="toggleSideNav"
        >
          <span class="inline-block w-7 h-1 bg-slate-600 rounded-lg"> </span>
          <span class="inline-block w-7 h-1 bg-slate-600 rounded-lg"> </span>
          <span class="inline-block w-7 h-1 bg-slate-600 rounded-lg"> </span>
        </button>
        <UserMenu
          class="text-gray-100 text-xl font-bold drop-shadow-lg bg-blue-300 rounded-md mr-10"
        />
      </div>
      <div id="hero" class="w-full h-full">
        <router-view v-if="isRouterViewVisible"></router-view>
        <div id="home_admin" v-else>
          <div class="flex justify-around pt-10">
            <div
              class="flex justify-between items-center md:w-1/5 gap-5 bg-blue-400 px-5 rounded-md"
            >
              <svg
                class="w-10 h-10"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 640 512"
              >
                <path
                  d="M144 0a80 80 0 1 1 0 160A80 80 0 1 1 144 0zM512 0a80 80 0 1 1 0 160A80 80 0 1 1 512 0zM0 298.7C0 239.8 47.8 192 106.7 192h42.7c15.9 0 31 3.5 44.6 9.7c-1.3 7.2-1.9 14.7-1.9 22.3c0 38.2 16.8 72.5 43.3 96c-.2 0-.4 0-.7 0H21.3C9.6 320 0 310.4 0 298.7zM405.3 320c-.2 0-.4 0-.7 0c26.6-23.5 43.3-57.8 43.3-96c0-7.6-.7-15-1.9-22.3c13.6-6.3 28.7-9.7 44.6-9.7h42.7C592.2 192 640 239.8 640 298.7c0 11.8-9.6 21.3-21.3 21.3H405.3zM224 224a96 96 0 1 1 192 0 96 96 0 1 1 -192 0zM128 485.3C128 411.7 187.7 352 261.3 352H378.7C452.3 352 512 411.7 512 485.3c0 14.7-11.9 26.7-26.7 26.7H154.7c-14.7 0-26.7-11.9-26.7-26.7z"
                />
              </svg>
              <div
                class="flex flex-col items-center font-bold text-gray-100 text-lg"
              >
                <h5>{{ users.length }}</h5>
                <p>Người dùng</p>
              </div>
            </div>
            <div
              class="flex justify-between items-center md:w-1/5 gap-5 bg-blue-400 py-10 px-5 rounded-md"
            >
              <svg
                class="w-10 h-10"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 384 512"
              >
                <!--!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.-->
                <path
                  d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z"
                />
              </svg>
              <div
                class="flex flex-col items-center font-bold text-gray-100 text-lg"
              >
                <h5>{{ visits.length }}</h5>
                <p>Địa điểm</p>
              </div>
            </div>

            <div
              class="flex justify-between items-center md:w-1/5 gap-5 bg-blue-400 py-10 px-5 rounded-md"
            >
              <svg
                class="w-10 h-10"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 576 512"
              >
                <!--!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.-->
                <path
                  d="M64 64C28.7 64 0 92.7 0 128v64c0 8.8 7.4 15.7 15.7 18.6C34.5 217.1 48 235 48 256s-13.5 38.9-32.3 45.4C7.4 304.3 0 311.2 0 320v64c0 35.3 28.7 64 64 64H512c35.3 0 64-28.7 64-64V320c0-8.8-7.4-15.7-15.7-18.6C541.5 294.9 528 277 528 256s13.5-38.9 32.3-45.4c8.3-2.9 15.7-9.8 15.7-18.6V128c0-35.3-28.7-64-64-64H64zm64 112l0 160c0 8.8 7.2 16 16 16H432c8.8 0 16-7.2 16-16V176c0-8.8-7.2-16-16-16H144c-8.8 0-16 7.2-16 16zM96 160c0-17.7 14.3-32 32-32H448c17.7 0 32 14.3 32 32V352c0 17.7-14.3 32-32 32H128c-17.7 0-32-14.3-32-32V160z"
                />
              </svg>
              <div
                class="flex flex-col items-center font-bold text-gray-100 text-lg"
              >
                <h5>{{ tickets.length }}</h5>
                <p>Vé</p>
              </div>
            </div>
            <div
              class="flex justify-between items-center md:w-1/5 gap-5 bg-blue-400 py-10 px-5 rounded-md"
            >
              <svg
                class="h-10 w-10"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
              >
                <path
                  d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"
                />
              </svg>
              <div
                class="flex flex-col items-center font-bold text-gray-100 text-lg"
              >
                <h5>{{ bookings.length }}</h5>
                <p>Vé đã đặt</p>
              </div>
            </div>
          </div>
          <div id="table_user_visit">
            <div class="flex justify-around mt-16">
              <div class="">
                <table class="text-md bg-white shadow-md rounded mb-4">
                  <tbody>
                    <tr class="border-b">
                      <th class="text-left p-3 px-5">Tên</th>
                      <th class="text-left p-3 px-5">Email</th>
                      <th></th>
                    </tr>
                    <tr
                      v-for="(user, index) in displayedUsers"
                      :key="index"
                      class="border-b hover:bg-orange-100 bg-gray-100"
                    >
                      <td class="p-3 px-5">
                        <input
                          v-model="user.user_name"
                          type="text"
                          disabled="true"
                          class="bg-transparent border-none"
                        />
                      </td>
                      <td class="p-3 px-5">
                        <input
                          v-model="user.email"
                          type="text"
                          disabled="true"
                          class="bg-transparent border-none"
                        />
                      </td>
                    </tr>
                  </tbody>
                </table>
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
                        v-for="pageNumber in [
                          totalPages - 2,
                          totalPages - 1,
                          totalPages,
                        ]"
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
              </div>
              <div class="flex flex-col items-center">
                <table class="md:w-1/3 text-md bg-white shadow-md rounded mb-4">
                  <tbody>
                    <tr class="border-b">
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
                    </tr>
                  </tbody>
                </table>
                <!-- Pagination -->
                <div class="flex justify-center">
                  <button
                    class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-l"
                    :disabled="currentPage_visit === 1"
                    @click="goToPage_visit(currentPage_visit - 1)"
                  >
                    Previous
                  </button>
                  <template v-if="totalPages_visit <= 5">
                    <!-- Hiển thị tất cả các trang nếu tổng số trang không vượt quá 5 -->
                    <button
                      class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4"
                      v-for="pageNumber_visit in totalPages_visit"
                      :key="pageNumber_visit"
                      :class="{
                        'bg-blue-700': currentPage_visit === pageNumber_visit,
                      }"
                      @click="goToPage_visit(pageNumber_visit)"
                    >
                      {{ pageNumber_visit }}
                    </button>
                  </template>
                  <template v-else>
                    <span class="px-4">...</span>
                    <!-- Hiển thị trang hiện tại và 2 trang liền kề nếu có -->
                    <template v-if="currentPage_visit <= 3">
                      <!-- Nếu trang hiện tại là 1, 2 hoặc 3 -->
                      <button
                        v-for="pageNumber_visit in 3"
                        class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4"
                        :class="{
                          'bg-blue-700': currentPage_visit === pageNumber_visit,
                        }"
                        :key="pageNumber_visit"
                        @click="goToPage_visit(pageNumber_visit)"
                      >
                        {{ pageNumber_visit }}
                      </button>
                    </template>
                    <template
                      v-else-if="currentPage_visit >= totalPages_visit - 2"
                    >
                      <!-- Nếu trang hiện tại là ở 3 trang cuối cùng -->
                      <button
                        v-for="pageNumber_visit in [
                          totalPages_visit - 2,
                          totalPages_visit - 1,
                          totalPages_visit,
                        ]"
                        class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4"
                        :class="{
                          'bg-blue-700': currentPage_visit === pageNumber_visit,
                        }"
                        :key="pageNumber_visit"
                        @click="goToPage_visit(pageNumber_visit)"
                      >
                        {{ pageNumber_visit }}
                      </button>
                    </template>
                    <template v-else>
                      <!-- Trang hiện tại ở giữa -->
                      <button
                        class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4"
                        @click="goToPage_visit(currentPage_visit - 1)"
                      >
                        {{ currentPage_visit - 1 }}
                      </button>
                      <button
                        class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4"
                        :class="{
                          'bg-blue-700':
                            currentPage_visit === currentPage_visit,
                        }"
                        @click="goToPage_visit(currentPage_visit)"
                      >
                        {{ currentPage_visit }}
                      </button>
                      <button
                        class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4"
                        @click="goToPage_visit(currentPage_visit + 1)"
                      >
                        {{ currentPage_visit + 1 }}
                      </button>
                    </template>
                    <span class="px-4">...</span>
                  </template>
                  <button
                    class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-r"
                    :disabled="currentPage_visit === totalPages_visit"
                    @click="goToPage_visit(currentPage_visit + 1)"
                  >
                    Next
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div class="mt-20 flex items-center justify-around bg-gray-200 pb-20">
            <div>
              <h3 class="font-bold text-xl text-gray-600 pl-10">
                Biểu đồ bán vé tại các điểm đến
              </h3>
              <canvas
                class="md:min-w-[600px]"
                id="myChartTicket"
              ></canvas>
            </div>
            <div>
              <h3 class="font-bold text-xl text-gray-600 pl-10">
                Biểu đồ doanh thu theo tháng
              </h3>

              <canvas
                class="md:min-w-[600px]"
                id="myChartBudget"
              ></canvas>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

// script
<script setup>
import { onMounted, ref, watch, computed } from "vue";
import UserProfile from "../views/ManageUser.vue";
import ManageStatic from "../views/ManageStatic.vue";
import UserMenu from "../views/UserMenu.vue";
import axios from "axios";
import Chart from "chart.js/auto";
const ticket_chart = ref([]);
const labels_ticket = ref([]);
const labelNames = ref([]);
const amountData = ref([]);
const booking_chart = ref([]);
const destinations = ref([]);
const tickedBooked = ref([]);
const BudgetByMonth = ref(Array.from({ length: 12 }, () => 0));

const users = ref([]);
const currentUser = ref([]);
const visits = ref([]);
const currentVisit = ref({});
const tickets = ref([]);
const currentTicket = ref({});

const bookings = ref([]);
const currentBooking = ref({});

onMounted(async () => {
  try {
    const response = await axios.get(
      "http://localhost:8080/smart_travel_api/admin/api/manageUser/showAllUser.php"
    );
    users.value = response.data;
    console.log(users.value);
    console.log(users.value.length);
    // debugger;
  } catch (error) {
    console.error(error);
  }
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
    const booking_list = await axios.get(
      "http://localhost:8080/smart_travel_api/admin/api/manageBooking/showAllBooking.php"
    );
    bookings.value = booking_list.data;
    console.log(bookings.value);
    // debugger;
  } catch (error) {
    console.error(error);
  }

  try {
    const ticket_list = await axios.get(
      "http://localhost:8080/smart_travel_api/admin/api/manageTicket/showAllTicket.php"
    );
    ticket_chart.value = ticket_list.data;
    console.log(ticket_chart.value);

    ticket_chart.value.forEach((ticket) => {
      const index = labels_ticket.value.findIndex(
        (label) => label.destination_id === ticket.destination_id
      );

      if (index === -1) {
        labels_ticket.value.push({
          destination_id: ticket.destination_id,
          amount_ticker: ticket.amount,
          destination_name: ticket.destination,
        });
      } else {
        labels_ticket.value[index].amount_ticker += ticket.amount;
      }
    });
    try {
      const booking_list = await axios.get(
        "http://localhost:8080/smart_travel_api/admin/api/manageBooking/showAllBooking.php"
      );
      booking_chart.value = booking_list.data;
      console.log(booking_chart.value);
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

    // Tính toán dữ liệu và gán cho labelNames và amountData sau khi tickets đã được xử lý
    labelNames.value = labels_ticket.value.map(
      (label) => label.destination_name
    );
    amountData.value = labels_ticket.value.map((label) => label.amount_ticker);
    console.log(labelNames.value);
    console.log(amountData.value);

    // Khởi tạo mảng tickedBooked với các phần tử ban đầu bằng 0
    tickedBooked.value = Array(labelNames.value.length).fill(0);

    // Lặp qua mảng bookings
    for (let i = 0; i < booking_chart.value.length; i++) {
      // console.log(bookings.value[i].destination);
      for (let j = 0; j < labels_ticket.value.length; j++) {
        // console.log(labels_ticket.value[j].destination_name);
        if (
          labels_ticket.value[j].destination_name ==
          booking_chart.value[i].destination
        ) {
          tickedBooked.value[j]++;
        }
      }
    }
    console.log(tickedBooked.value);

    for (let i = 0; i < booking_chart.value.length; i++) {
      const month = booking_chart.value[i].time_start.split("-")[1];
      const BudgetMonth = booking_chart.value[i].total_amount;
      console.log(month);
      console.log(BudgetMonth);
      for (let j = 0; j < BudgetByMonth.value.length; j++) {
        if (month == j) {
          BudgetByMonth.value[j] += BudgetMonth;
        }
      }
    }
    console.log(BudgetByMonth.value);

    createChart();
    createChartBudget();
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
  Math.ceil(users.value.length / itemsPerPage.value)
);

// Tính chỉ mục bắt đầu của mục đầu tiên trên trang hiện tại
const startIndex = computed(() => (currentPage.value - 1) * itemsPerPage.value);

// Lọc và hiển thị danh sách người dùng trên trang hiện tại
const displayedUsers = computed(() =>
  users.value.slice(startIndex.value, startIndex.value + itemsPerPage.value)
);

// Chuyển đến trang cụ thể
const goToPage = (page) => {
  if (page >= 1 && page <= totalPages.value) {
    currentPage.value = page;
  }
};

// ----------------------   visit---------------------

// Số lượng mục trên mỗi trang
const itemsPerPage_visit = ref(5);

// Trang hiện tại
const currentPage_visit = ref(1);

// Tính tổng số trang dựa trên số lượng mục và số lượng mục trên mỗi trang
const totalPages_visit = computed(() =>
  Math.ceil(visits.value.length / itemsPerPage_visit.value)
);

// Tính chỉ mục bắt đầu của mục đầu tiên trên trang hiện tại
const startIndex_visit = computed(
  () => (currentPage_visit.value - 1) * itemsPerPage_visit.value
);

// Lọc và hiển thị danh sách người dùng trên trang hiện tại
const displayedVisits = computed(() =>
  visits.value.slice(
    startIndex_visit.value,
    startIndex_visit.value + itemsPerPage_visit.value
  )
);

// Chuyển đến trang cụ thể
const goToPage_visit = (page) => {
  if (page >= 1 && page <= totalPages_visit.value) {
    currentPage_visit.value = page;
  }
};

var currentView = 0;

const showSideNav = ref(true);

const isRouterViewVisible = ref(false);
const handleRouterLinkClick = () => {
  isRouterViewVisible.value = true;
};

const toggleSideNav = () => {
  showSideNav.value = !showSideNav.value;
};

// Hàm tạo biểu đồ
function createChart() {
  // console.log(tickedBooked.value);
  const data = {
    labels: labelNames.value,
    datasets: [
      {
        label: "Tổng số vé",
        data: amountData.value,
        backgroundColor: [
          "rgba(255, 99, 132, 0.6)", // Đỏ
          "rgba(54, 162, 235, 0.6)", // Xanh dương
          "rgba(255, 205, 86, 0.6)", // Vàng
          "rgba(75, 192, 192, 0.6)", // Xanh lá cây
          "rgba(153, 102, 255, 0.6)", // Tím
          "rgba(255, 159, 64, 0.6)", // Cam
          "rgba(201, 203, 207, 0.6)", // Xám
          "rgba(255, 138, 101, 0.6)", // Đỏ cam
          "rgba(75, 192, 192, 0.6)", // Xanh lá cây
          "rgba(139, 195, 74, 0.6)", // Xanh lá
          "rgba(255, 204, 0, 0.6)", // Vàng
        ],
        borderColor: [
          "rgb(255, 99, 132)", // Đỏ
          "rgb(54, 162, 235)", // Xanh dương
          "rgb(255, 205, 86)", // Vàng
          "rgb(75, 192, 192)", // Xanh lá cây
          "rgb(153, 102, 255)", // Tím
          "rgb(255, 159, 64)", // Cam
          "rgb(201, 203, 207)", // Xám
          "rgb(255, 138, 101)", // Đỏ cam
          "rgb(75, 192, 192)", // Xanh lá cây
          "rgb(139, 195, 74)", // Xanh lá
          "rgb(255, 204, 0)", // Vàng
        ],
        borderWidth: 1,
      },
      {
        label: "Số vé bán được",
        data: tickedBooked.value,
        backgroundColor: [
          "rgba(255, 99, 132, 0.6)", // Đỏ
          "rgba(54, 162, 235, 0.6)", // Xanh dương
          "rgba(255, 205, 86, 0.6)", // Vàng
          "rgba(75, 192, 192, 0.6)", // Xanh lá cây
          "rgba(153, 102, 255, 0.6)", // Tím
          "rgba(255, 159, 64, 0.6)", // Cam
          "rgba(201, 203, 207, 0.6)", // Xám
          "rgba(255, 138, 101, 0.6)", // Đỏ cam
          "rgba(75, 192, 192, 0.6)", // Xanh lá cây
          "rgba(139, 195, 74, 0.6)", // Xanh lá
          "rgba(255, 204, 0, 0.6)", // Vàng
        ],
        borderColor: [
          "rgb(255, 99, 132)", // Đỏ
          "rgb(54, 162, 235)", // Xanh dương
          "rgb(255, 205, 86)", // Vàng
          "rgb(75, 192, 192)", // Xanh lá cây
          "rgb(153, 102, 255)", // Tím
          "rgb(255, 159, 64)", // Cam
          "rgb(201, 203, 207)", // Xám
          "rgb(255, 138, 101)", // Đỏ cam
          "rgb(75, 192, 192)", // Xanh lá cây
          "rgb(139, 195, 74)", // Xanh lá
          "rgb(255, 204, 0)", // Vàng
        ],
        borderWidth: 1,
      },
    ],
  };

  const config = {
    type: "bar",
    data: data,
    options: {
      scales: {
        y: {
          beginAtZero: true,
        },
      },
    },
  };

  const myChart_ticket = new Chart(
    document.getElementById("myChartTicket"),
    config
  );
}
function createChartBudget() {
  const labels = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const dataBudget = {
    labels: labels,
    datasets: [
      {
        label: "Doanh thu theo tháng",
        data: BudgetByMonth.value,
        fill: false,
        borderColor: "rgb(75, 192, 192)",
        tension: 0.1,
      },
    ],
  };
  const configBudget = {
    type: "line",
    data: dataBudget,
  };
  const myChart_budget = new Chart(
    document.getElementById("myChartBudget"),
    configBudget
  );
}
</script>

<style scoped>
div#sideNav,
div#navbar {
  background-color: rgb(248, 244, 243);
}
div#hero {
  background-color: rgb(229, 231, 235);
}

#sideNav {
  transition: transform 0.3s ease-in-out;
}

.hidden {
  transform: translateX(-100%);
}
span#toggle_sidebar::after {
  content: "";
  display: inline-block;
  width: 40px;
  height: 8px;
  background-color: rgb(51 65 85 / var(--tw-bg-opacity));
  border-radius: 6px;
}
span#toggle_sidebar::before {
  content: "";
  display: inline-block;
  width: 40px;
  height: 8px;
  background-color: rgb(51 65 85 / var(--tw-bg-opacity));
  border-radius: 6px;
}
</style>
