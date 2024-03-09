<template>
  <div>
    <div class="mt-48 w-full bg-gray-100">
      <div class="">
        <section class="bg-blue-400 p-6 rounded-lg">
          <div
            class="p-5 bg-slate-50 rounded-lg flex flex-col items-center gap-5"
          >
            <div class="flex items-center gap-3">
              <h3 class="text-2xl font-bold drop-shadow-lg text-gray-800">
                Đà Nẵng
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
                TH HCM
              </h3>
            </div>
            <section class="flex text-gray-700 drop-shadow-lg text-lg">
              <h4>Thứ 7, 24 thg 2 2024</h4>
              <span class="w-0.5 bg-gray-700 mx-5"></span>
              <h4>1 hành khách</h4>
              <span class="w-0.5 bg-gray-700 mx-5"></span>
              <h4>Phổ thông</h4>
            </section>
          </div>
        </section>
        <div class="rounded-lg p-6 mt-10">
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
              </section>
              <section id="departure_time" class="flex items-center gap-5">
                <h3 class="text-gray-900 font-bold">17h30</h3>
                <section class="flex flex-col items-center">
                  <h5 class="text-gray-500 text-md">2 điểm dừng</h5>
                  <span
                    class="inline-block w-40 h-1 rounded-lg bg-gray-300"
                  ></span>
                  <h5 class="text-gray-500 text-md">365 km</h5>
                </section>
                <h3 class="text-gray-900 font-bold">21:30</h3>
              </section>
              <section>
                <h4>
                  <span class="text-lg font-bold text-orange-500"
                    >2.000.000 VND</span
                  >/khách
                </h4>
              </section>
            </div>
            <div class="mt-16 flex justify-around pb-10 items-center">
              <section id="menu_render" class="flex gap-10">
                <router-link
                  class="text-lg drop-shadow-lg text-gray-700"
                  :to="{ name: 'detail_schedule' }"
                >
                  Chi tiết
                </router-link>
                <span class="w-0.5 bg-gray-700 mx-2"></span>
                <router-link
                  class="text-lg drop-shadow-lg text-gray-700"
                  :to="{ name: 'reschedule' }"
                >
                  Chỉnh sửa
                </router-link>
                <span class="w-0.5 bg-gray-700 mx-2"></span>
                <router-link
                  class="text-lg drop-shadow-lg text-gray-700"
                  :to="{ name: 'refund' }"
                >
                  Hoàn trả
                </router-link>
                <span class="w-0.5 bg-gray-700 mx-2"></span>

                <router-link
                  class="text-lg drop-shadow-lg text-gray-700"
                  :to="{ name: 'promotion' }"
                >
                  Khuyến mã
                </router-link>
              </section>
              <!-- <button
                class="block text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                type="submit"
                name="redirect"
                @click="initiatePayment"
              >
                Thanh toán
              </button> -->
              <button
                @click="showSidebar = !showSidebar"
                class="block py-3 px-10 font-bold text-white text-gray-100 rounded-lg font-bold bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Chọn
              </button>
            </div>
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
                      <h3
                        class="text-2xl font-bold drop-shadow-lg text-gray-800"
                      >
                        Đà Nẵng
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

                      <h3
                        class="text-2xl font-bold drop-shadow-lg text-gray-800"
                      >
                        TH HCM
                      </h3>
                    </div>
                    <section class="flex text-gray-700 drop-shadow-lg text-lg">
                      <h4>Thứ 7, 24 thg 2 2024</h4>
                      <span class="w-0.5 bg-gray-700 mx-5"></span>
                      <h4>1 hành khách</h4>
                      <span class="w-0.5 bg-gray-700 mx-5"></span>
                      <h4>Phổ thông</h4>
                    </section>

                    <h4>thông tin chuyến đi</h4>
                  </div>
                  <div class="mt-96 flex items-center justify-between px-5">
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
                        <h5 class="font-bold text-orange-500">Tổng cộng cho 1 hành khách</h5>
                        <h3 class="font-bold text-orange-500">100.000 VND</h3>
                      </div>
                    </div>
                    <router-link :to="{ name: 'booking' }"
                    class="py-2 px-5 bg-orange-500 text-gray-50 font-bold rounded-lg"
                    > Tiếp tục đặt chỗ </router-link>
                  </div>
                </div>
              </div>
              <div
                v-show="showSidebar"
                @click="showSidebar = false"
                class="fixed top-0 left-0 bottom-0 right-0 bg-black opacity-20 z-40"
              ></div>
            </div>
            <router-view></router-view>
          </section>
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

import { ref, computed } from "vue";

import axios from "axios";
const showSidebar = ref(false);

// Replace with your actual API endpoint URL
// const apiUrl =
//   "http://localhost:8080/smart_travel_api/api/checkout/OnlineCheckoutController.php";

// // Example data to send (customize as needed)
// const paymentData = {
//   amount: 100000, // Amount in VND
//   orderId: "your-order-id",
//   // ...other payment details
// };
// const initiatePayment = async () => {
//   axios
//     .post(apiUrl)
//     .then((response) => {
//       console.log("Payment request successful:", response.data);
//       console.log(response.data.data);
//       // Redirect user to VNPAY payment page if redirection is required
//       if (response.data.data) {
//         // debugger;
//         window.location.href = response.data.data;
//       } else {
//         // Handle successful payment without redirection
//       }
//     })
//     .catch((error) => {
//       console.error("Payment request failed:", error);
//       // Handle payment errors
//     });
// };

const showModal = ref(false);

function toggleModal() {
  showModal.value = !showModal.value;
}

function hideModal() {
  showModal.value = false;
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
  bottom: 0;
  right: 0;
  transform: translateY(25%);
}
</style>
