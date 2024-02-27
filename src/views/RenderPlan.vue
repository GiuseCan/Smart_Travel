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
              <button
                @click="toggleModal"
                class="block py-3 px-10 font-bold text-white text-gray-100 rounded-lg font-bold bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                type="button"
              >
                Chọn
              </button>
            </div>
            <router-view></router-view>
          </section>
        </div>
      </div>
    </div>
  </div>
  <!-- Main modal -->
  <div
    id="default-modal"
    :class="{ hidden: !showModal }"
    @click.self="hideModal"
    tabindex="-1"
    aria-hidden="true"
    class="overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full"
  >
  <div class="relative p-4 w-full max-w-fit max-h-full">
    <Booking />
  </div>
  </div>
  <Footer class="" />
</template>

<script setup>
import Footer from "../components/Footer.vue";
import Booking from "../views/Booking.vue";
import "../../node_modules/flowbite";

import { ref } from "vue";

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
