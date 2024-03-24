<template>
  <div>
    <div class="mt-48 w-full bg-gray-100">
      <div class="">
        <h2
          v-if="locationDeparture == ''"
          class="font-bold text-2xl text-center shadow-lg text-gray-800 pb-5"
        >
          Hiện không có chuyến đi phù hợp.
        </h2>
        <section class="bg-blue-400 p-6 rounded-lg">
          <div
            class="p-5 bg-slate-50 rounded-lg flex flex-col items-center gap-5"
          >
            <div class="flex items-center gap-3">
              <h3 class="text-2xl font-bold drop-shadow-lg text-gray-800">
                <!-- {{plan.value}} -->
                {{ locationDeparture }}
              </h3>
              <svg
                class="w-14 h-8"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
              >
                <!--!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.-->
                <path
                  d="M502.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-128-128c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L402.7 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l370.7 0-73.4 73.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l128-128z"
                />
              </svg>

              <h3 class="text-2xl font-bold drop-shadow-lg text-gray-800">
                {{ locationDestination }}
              </h3>
            </div>
            <section class="flex text-gray-700 drop-shadow-lg text-lg">
              <h4>
                {{ dateStart }} <span class="font-bold">--->></span>
                {{ dateEnd }}
              </h4>
              <span class="w-0.5 bg-gray-700 mx-5"></span>
              <h4>1 hành khách</h4>
              <span class="w-0.5 bg-gray-700 mx-5"></span>
              <h4>Phổ thông</h4>
            </section>
          </div>
        </section>
        <div
          v-for="(visits, index) in plan.location"
          :key="index"
          class="rounded-lg p-6 mt-10"
        >
          <section class="border-solid shadow-xl rounded-lg">
            <div class="flex justify-around">
              <section class="flex gap-2">
                <svg
                  class="w-7 h-7"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 576 512"
                >
                  <!--!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.-->
                  <path
                    d="M482.3 192c34.2 0 93.7 29 93.7 64c0 36-59.5 64-93.7 64l-116.6 0L265.2 495.9c-5.7 10-16.3 16.1-27.8 16.1l-56.2 0c-10.6 0-18.3-10.2-15.4-20.4l49-171.6L112 320 68.8 377.6c-3 4-7.8 6.4-12.8 6.4l-42 0c-7.8 0-14-6.3-14-14c0-1.3 .2-2.6 .5-3.9L32 256 .5 145.9c-.4-1.3-.5-2.6-.5-3.9c0-7.8 6.3-14 14-14l42 0c5 0 9.8 2.4 12.8 6.4L112 192l102.9 0-49-171.6C162.9 10.2 170.6 0 181.2 0l56.2 0c11.5 0 22.1 6.2 27.8 16.1L365.7 192l116.6 0z"
                  />
                </svg>
                <h2 class="text-lg font-bold text-blue-400 drop-shadow-lg">
                  Travello
                </h2>
                <h5>
                  <!-- {{ visits[currentPlan].visit_name }} -->
                </h5>
              </section>
              <section id="departure_time" class="flex items-center gap-5">
                <h3 class="text-gray-900 font-bold">{{ dateStart }}</h3>
                <section class="flex flex-col items-center">
                  <h5 class="text-gray-500 text-md">
                    {{ amountVisit }} điểm dừng
                  </h5>
                  <span
                    class="inline-block w-40 h-1 rounded-lg bg-gray-300"
                  ></span>
                  <h5 class="text-gray-500 text-md">365 km</h5>
                </section>
                <h3 class="text-gray-900 font-bold">{{ dateEnd }}</h3>
              </section>
              <section>
                <h4>
                  <span class="text-lg font-bold text-orange-500">
                    {{ formatCurrency(visits[visits.length - 1].tongtien) }} VND
                  </span>
                  /khách
                </h4>
              </section>
            </div>
            <div class="">
              <div class="px-10 flex items-center pt-5 justify-center">
                <h4 class="font-bold text-gray-600 lg:pr-20">
                  Các địa điểm tham quan:
                </h4>
                <section class="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
                  <p
                    v-for="(visit, index) in visits"
                    :key="index"
                    class="flex items-center"
                  >
                    <svg
                      class="h-5 w-5 mr-3"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 384 512"
                    >
                      <!--!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.-->
                      <path
                        d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z"
                      />
                    </svg>
                    {{ visit.visit_name }}
                  </p>
                </section>
              </div>
            </div>
            <div class="mt-10 flex justify-around pb-10 items-center">
              <section id="menu_render" class="flex gap-10">
                <button
                  class="text-lg drop-shadow-lg text-gray-700"
                  @click="toggleDetailVisit()"
                >
                  Chi tiết
                </button>
                <span class="w-0.5 bg-gray-700 mx-2"></span>
                <router-link
                  @click="showDetail = false"
                  class="text-lg drop-shadow-lg text-gray-700"
                  :to="{ name: 'reschedule' }"
                >
                  Phản hồi
                </router-link>
                <span class="w-0.5 bg-gray-700 mx-2"></span>
                <router-link
                  @click="showDetail = false"
                  class="text-lg drop-shadow-lg text-gray-700"
                  :to="{ name: 'refund' }"
                >
                  Hoàn trả
                </router-link>
                <span class="w-0.5 bg-gray-700 mx-2"></span>

                <router-link
                  @click="showDetail = false"
                  class="text-lg drop-shadow-lg text-gray-700"
                  :to="{ name: 'promotion' }"
                >
                  Khuyến mã
                </router-link>
              </section>
              <button
                disabled
                v-if="amountTicket < 1"
                class="z-10 block py-3 px-5 text-gray-100 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                <!-- {{amountTicket}} -->
                Chuyến đi hiện đang hết vé
              </button>
              <button
                v-else
                @click="showSidebarAndPickCurrentPlan(index)"
                class="z-10 block py-3 px-10 text-gray-100 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                <!-- {{amountTicket}} -->
                Chọn
              </button>
            </div>
            <!-- detail plan -->
            <div
              id="detailVisit"
              v-for="(visit, index) in visits"
              :key="index"
              v-show="showDetail"
            >
              <div
                class="py-10 px-32 flex justify-between gap-32 w-full bg-gray-200 shadow-2xl"
              >
                <div class="">
                  <section
                    id="departure_time"
                    class="flex flex-col items-end gap-5"
                  >
                    <h4 class="text-gray-900 font-bold">
                      {{ visit.open_time }}
                    </h4>
                    <section class="flex items-center justify-center">
                      <h5 class="text-gray-500 text-md">Giờ mở cửa</h5>
                      <span
                        class="inline-block w-1 h-32 rounded-lg bg-gray-300"
                      ></span>
                    </section>
                    <h3 class="text-gray-900 font-bold">
                      {{ visit.close_time }}
                    </h3>
                  </section>
                </div>
                <div class="flex gap-5">
                  <!-- src="../../image//Cau_Rong_1.jpg" -->
                  <img
                    :src="visit.img_url"
                    class="hover:scale-105 transition-transform w-64 object-cover rounded-md"
                    alt=""
                  />
                  <section class="flex flex-col justify-between">
                    <h3 class="text-xl font-bold">{{ visit.visit_name }}</h3>
                    <h5
                      class="text-md font-bold text-gray-700 flex items-center"
                    >
                      <svg
                        class="h-5 w-5 mr-3"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 384 512"
                      >
                        <!--!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.-->
                        <path
                          d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z"
                        />
                      </svg>
                      {{ visit.visit_address }}
                    </h5>
                    <p class="pt-5 font-bold text-gray-700">
                      Thông tin địa điểm:
                    </p>
                    <p>
                      {{ visit.visit_describe }}
                    </p>
                    <h5>
                      <span class="text-orange-600 pr-3 text-lg"
                        >Phí tham quan:</span
                      >
                      {{ formatCurrencyVND(visit.tuition_fee) }} (VND)
                    </h5>
                  </section>
                </div>
              </div>
            </div>
            <router-view v-show="!showDetail"></router-view>
          </section>
          <div class="w-full h-full flex">
            <div
              v-show="showSidebar"
              class="fixed top-0 right-0 bottom-0 w-1/2 bg-white shadow-lg z-50"
            >
              <div class="p-4 relative">
                <div class="flex items-center gap-10 p-5">
                  <button @click="showSidebar = false" class="w-7 h-7">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 512 512"
                    >
                      <!--!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.-->
                      <path
                        d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM175 175c9.4-9.4 24.6-9.4 33.9 0l47 47 47-47c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9l-47 47 47 47c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0l-47-47-47 47c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l47-47-47-47c-9.4-9.4-9.4-24.6 0-33.9z"
                      />
                    </svg>
                  </button>
                  <div>
                    <h5 class="font-bold text-lg text-gray-900">
                      Chuyến đi của bạn
                    </h5>
                  </div>
                </div>
                <div
                  class="p-5 bg-slate-50 rounded-lg flex flex-col items-center gap-5"
                >
                  <div class="flex items-center gap-3">
                    <h3 class="text-2xl font-bold drop-shadow-lg text-gray-800">
                      {{ locationDeparture }}
                    </h3>
                    <svg
                      class="w-14 h-8"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 512 512"
                    >
                      <!--!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.-->
                      <path
                        d="M502.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-128-128c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L402.7 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l370.7 0-73.4 73.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l128-128z"
                      />
                    </svg>

                    <h3 class="text-2xl font-bold drop-shadow-lg text-gray-800">
                      {{ locationDestination }}
                    </h3>
                  </div>
                  <section class="flex text-gray-700 drop-shadow-lg text-lg">
                    <h4>
                      {{ dateStart }} <span class="px-3">--></span>{{ dateEnd }}
                    </h4>
                    <span class="w-0.5 bg-gray-700 mx-5"></span>
                    <h4>1 hành khách</h4>
                    <span class="w-0.5 bg-gray-700 mx-5"></span>
                    <h4>Phổ thông</h4>
                  </section>

                  <div class="pt-5">
                    <h4 class="font-bold text-xl text-blue-500">
                      Thông tin chuyến đi
                    </h4>

                    <div
                      class="max-h-[400px] relative overflow-x-auto shadow-md sm:rounded-lg"
                    >
                      <table
                        class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400"
                      >
                        <thead
                          class="text-xs text-gray-700 uppercase dark:text-gray-400"
                        >
                          <tr class="sticky">
                            <th
                              scope="col"
                              class="px-6 py-3 bg-gray-50 dark:bg-gray-800"
                            >
                              Địa điểm
                            </th>
                            <th scope="col" class="px-6 py-3">Chi phí(VND)</th>
                            <th
                              scope="col"
                              class="px-6 py-3 bg-gray-50 dark:bg-gray-800"
                            >
                              Giờ hoạt động
                            </th>
                            <th scope="col" class="px-6 py-3">Địa chỉ</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr
                            v-for="(visit, visitIndex) in plan.location[
                              currentPlan
                            ]"
                            :key="visitIndex"
                            class="border-b border-gray-200 dark:border-gray-700"
                          >
                            <th
                              scope="row"
                              class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800"
                            >
                              {{ visit.visit_name }}
                            </th>
                            <td class="px-6 py-4">{{ visit.tuition_fee }}</td>
                            <td class="px-6 py-4 bg-gray-50 dark:bg-gray-800">
                              {{ visit.open_time }} {{ visit.close_time }}
                            </td>
                            <td class="px-6 py-4">{{ visit.visit_address }}</td>
                          </tr>
                        </tbody>
                      </table>
                      <form class="hidden" @submit.prevent="login">
                        <input v-model="locationDeparture" type="text" />
                        <input v-model="locationDestination" type="text" />
                        <input v-model="id_ticket" type="text" />
                        <input v-model="dateStart" type="date" />
                        <input v-model="dateEnd" type="date" />
                        <input v-model="total" type="text" />
                        <input v-model="email" type="text" />
                        <input
                          v-for="(visit, visitIndex) in plan.location[
                            currentPlan
                          ]"
                          :key="visitIndex"
                          v-model="visit.visit_id"
                          type="text"
                        />
                      </form>
                    </div>
                  </div>
                </div>
                <div class="mb-5 flex items-center justify-between px-5">
                  <div class="flex items-center gap-3">
                    <svg
                      class="h-5 w-5"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 320 512"
                    >
                      <!--!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.-->
                      <path
                        d="M160 0c17.7 0 32 14.3 32 32V67.7c1.6 .2 3.1 .4 4.7 .7c.4 .1 .7 .1 1.1 .2l48 8.8c17.4 3.2 28.9 19.9 25.7 37.2s-19.9 28.9-37.2 25.7l-47.5-8.7c-31.3-4.6-58.9-1.5-78.3 6.2s-27.2 18.3-29 28.1c-2 10.7-.5 16.7 1.2 20.4c1.8 3.9 5.5 8.3 12.8 13.2c16.3 10.7 41.3 17.7 73.7 26.3l2.9 .8c28.6 7.6 63.6 16.8 89.6 33.8c14.2 9.3 27.6 21.9 35.9 39.5c8.5 17.9 10.3 37.9 6.4 59.2c-6.9 38-33.1 63.4-65.6 76.7c-13.7 5.6-28.6 9.2-44.4 11V480c0 17.7-14.3 32-32 32s-32-14.3-32-32V445.1c-.4-.1-.9-.1-1.3-.2l-.2 0 0 0c-24.4-3.8-64.5-14.3-91.5-26.3c-16.1-7.2-23.4-26.1-16.2-42.2s26.1-23.4 42.2-16.2c20.9 9.3 55.3 18.5 75.2 21.6c31.9 4.7 58.2 2 76-5.3c16.9-6.9 24.6-16.9 26.8-28.9c1.9-10.6 .4-16.7-1.3-20.4c-1.9-4-5.6-8.4-13-13.3c-16.4-10.7-41.5-17.7-74-26.3l-2.8-.7 0 0C119.4 279.3 84.4 270 58.4 253c-14.2-9.3-27.5-22-35.8-39.6c-8.4-17.9-10.1-37.9-6.1-59.2C23.7 116 52.3 91.2 84.8 78.3c13.3-5.3 27.9-8.9 43.2-11V32c0-17.7 14.3-32 32-32z"
                      />
                    </svg>
                    <div>
                      <h5 class="font-bold text-orange-500">
                        Tổng cộng cho 1 hành khách
                      </h5>
                      <h3 class="font-bold text-orange-500">
                        {{ formatCurrency(total) }} VND
                      </h3>
                    </div>
                  </div>
                  <router-link
                    :to="{ name: 'booking' }"
                    class="py-2 px-5 bg-orange-500 text-gray-50 font-bold rounded-lg"
                  >
                    Tiếp tục đặt chỗ
                  </router-link>
                </div>
              </div>
            </div>
            <div
              v-show="showSidebar"
              @click="showSidebar = false"
              class="fixed top-0 left-0 bottom-0 right-0 bg-black opacity-20 z-40"
            ></div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <Footer class="" />
</template>

<script setup>
import Footer from "../components/Footer.vue";
import Booking from "../views/Booking.vue";
import "../../node_modules/flowbite";
import { ref, computed, onMounted, watch, watchEffect } from "vue";
import axios from "axios";
import { useRouter, onBeforeRouteLeave } from "vue-router";

const showSidebar = ref(false);
const currentPlan = ref();
const router = useRouter();

const plan = ref("");
const locationDeparture = ref("");
const locationDestination = ref("");
const dateStart = ref("");
const dateEnd = ref("");
const amountVisit = ref("");
const email = ref("");
const id_ticket = ref("");
const length_location = ref("");
const total = ref("");
const visitList = ref([]);
console.log(currentPlan.value);
// Lấy tất cả giá trị visit_id từ input
const allVisitIds = computed(() => {
  return plan.value.location[currentPlan.value].map((visit) => visit.visit_id);
});

const saveToLocalStorage = () => {
  const formData = ref({
    locationDeparture: locationDeparture.value,
    locationDestination: locationDestination.value,
    dateStart: dateStart.value,
    dateEnd: dateEnd.value,
    id_ticket: id_ticket.value,
    email: email.value,
    total: total.value,
    visitList: allVisitIds, // Giả sử visitList là một mảng
  });
  localStorage.setItem("plan", JSON.stringify(formData.value));
};

const amountTicket = ref();
onMounted(async () => {
  plan.value = JSON.parse(localStorage.getItem("plan"));
  console.log(plan.value);
  // debugger;
  if (plan.value.location !== null) {
    updateValue();
    const formDataTicket = new FormData();
    formDataTicket.append("locationDeparture", locationDeparture.value);
    formDataTicket.append("locationDestination", locationDestination.value);
    await axios
      .post(
        "http://localhost:8080/smart_travel_api/api/services/checkAmountTicket.php",
        formDataTicket
      )
      .then((response) => {
        // debugger
        amountTicket.value = response.data.amount;
        console.log(amountTicket.value);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }
});

function updateValue() {
  if (plan.value) {
    console.log(visitList);
    if (plan.value.location[0]) {
      locationDeparture.value = plan.value.location[0][0].location_departure;
      locationDestination.value =
        plan.value.location[0][0].location_destination;
      dateStart.value = plan.value.location[0][0].date_start;
      dateEnd.value = plan.value.location[0][0].date_end;
      id_ticket.value = plan.value.location[0][0].id_ticket;
      amountVisit.value = plan.value.location[0].length;
      // length_location.value = length_location.value - 1;
      total.value = 0;
    }
  }
}
// Hook này sẽ được gọi trước khi rời khỏi route hiện tại
onBeforeRouteLeave(() => {
  saveToLocalStorage();
});

watchEffect(() => {
  const newValue = JSON.parse(localStorage.getItem("plan"));
  console.log(newValue);
  // Kiểm tra newValue không phải là null và có dạng một đối tượng
  if (
    newValue !== null &&
    typeof newValue === "object" &&
    newValue.location !== null &&
    newValue !== plan.value
  ) {
    plan.value = newValue;
    updateValue(newValue);
  }
});
const showModal = ref(false);

function toggleModal() {
  showModal.value = !showModal.value;
}

function hideModal() {
  showModal.value = false;
}

function showSidebarAndPickCurrentPlan(i) {
  showSidebar.value = !showSidebar.value;
  // Sử dụng mảng currentPlans để lưu trữ currentPlan cho từng visit
  currentPlan.value = i;
  console.log(currentPlan.value);
  length_location.value = plan.value.location[currentPlan.value].length;
  console.log(length_location.value);
  total.value =
    plan.value.location[currentPlan.value][length_location.value - 1].tongtien;
  console.log(total.value);
  console.log(
    plan.value.location[currentPlan.value][length_location.value - 1].tongtien
  );
}
const showDetail = ref(false);
function toggleDetailVisit() {
  showDetail.value = !showDetail.value;
}

// Hàm định dạng số tiền
const formatCurrency = (value) => {
  const parts = value.toString().split(".");
  parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ".");
  return parts.join(".");
};

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
</script>

<style scoped>
section#departure_time section span {
  position: relative;
}
section#departure_time section span::before {
  content: "";
  position: absolute;
  width: 10px;
  height: 10px;
  background-color: rgb(207, 207, 207);
  border-radius: 50%;
  bottom: 0;
  left: 0;
  transform: translateY(25%);
}
section#departure_time section span::after {
  content: "";
  position: absolute;
  width: 10px;
  height: 10px;
  background-color: rgb(191, 190, 190);
  border-radius: 50%;
  top: 0;
  right: 0;
  transform: translateY(50%);
}

section#departure_time section span {
  position: relative;
}
section#departure_time section span::before {
  content: "";
  position: absolute;
  width: 10px;
  height: 10px;
  background-color: rgb(207, 207, 207);
  border-radius: 50%;
  top: 0;
  left: 0;
  transform: translateX(-25%);
}
section#departure_time section span::after {
  content: "";
  position: absolute;
  width: 10px;
  height: 10px;
  background-color: rgb(27, 120, 219);
  border-radius: 50%;
  bottom: 0;
  right: 0;
  transform: translateX(25%);
}
</style>
