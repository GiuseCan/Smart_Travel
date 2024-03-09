<template>
  <div>
    <div class="hero-body flex flex-wrap justify-center mt-24">
      <h2
        class="title font-bold text-gray-100 md:text-5xl lg:text-7xl drop-shadow-2xl"
      >
        Trải nghiệm cùng chúng tôi
      </h2>
      <div class="p-16 mt-14 rounded-lg bg-black-rgba py-10 px-10">
        <form
          class="flex justify-center items-center flex-wrap p-12 rounded-lg bg-slate-50"
        >
          <div class="flex mr-10">
            <div>
              <label
                for="input-group-1"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >Từ</label
              >
              <div class="relative mb-6">
                <div
                  class="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none"
                >
                  <svg
                    class="w-4 h-4 text-gray-500 dark:text-gray-400"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 640 512"
                  >
                    <!--!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.-->
                    <path
                      d="M381 114.9L186.1 41.8c-16.7-6.2-35.2-5.3-51.1 2.7L89.1 67.4C78 73 77.2 88.5 87.6 95.2l146.9 94.5L136 240 77.8 214.1c-8.7-3.9-18.8-3.7-27.3 .6L18.3 230.8c-9.3 4.7-11.8 16.8-5 24.7l73.1 85.3c6.1 7.1 15 11.2 24.3 11.2H248.4c5 0 9.9-1.2 14.3-3.4L535.6 212.2c46.5-23.3 82.5-63.3 100.8-112C645.9 75 627.2 48 600.2 48H542.8c-20.2 0-40.2 4.8-58.2 14L381 114.9zM0 480c0 17.7 14.3 32 32 32H608c17.7 0 32-14.3 32-32s-14.3-32-32-32H32c-17.7 0-32 14.3-32 32z"
                    />
                  </svg>
                </div>
                <input
                  type="text"
                  id="input-group-1"
                  class="p-3 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg rounded-r-none focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Huế"
                />
                <!-- <ais-instant-search>
                  </ais-instant-search> -->
              </div>
            </div>

            <div>
              <label
                for="input-group-2"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >Đến</label
              >
              <div class="relative mb-6">
                <div
                  class="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none"
                >
                  <svg
                    class="w-4 h-4 text-gray-500 dark:text-gray-400"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 640 512"
                  >
                    <!--!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.-->
                    <path
                      d="M.3 166.9L0 68C0 57.7 9.5 50.1 19.5 52.3l35.6 7.9c10.6 2.3 19.2 9.9 23 20L96 128l127.3 37.6L181.8 20.4C178.9 10.2 186.6 0 197.2 0h40.1c11.6 0 22.2 6.2 27.9 16.3l109 193.8 107.2 31.7c15.9 4.7 30.8 12.5 43.7 22.8l34.4 27.6c24 19.2 18.1 57.3-10.7 68.2c-41.2 15.6-86.2 18.1-128.8 7L121.7 289.8c-11.1-2.9-21.2-8.7-29.3-16.9L9.5 189.4c-5.9-6-9.3-14.1-9.3-22.5zM32 448H608c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32zm96-80a32 32 0 1 1 64 0 32 32 0 1 1 -64 0zm128-16a32 32 0 1 1 0 64 32 32 0 1 1 0-64z"
                    />
                  </svg>
                </div>
                <input
                  type="text"
                  id="input-group-2"
                  class="p-3 bg-gray-50 border rounded-l-none border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Đà Nẵng"
                />
              </div>
            </div>
          </div>

          <div date-rangepicker class="flex items-center mr-10">
            <div class="relative mb-6">
              <label
                for="date_start"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >Ngày đi</label
              >
              <div
                class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none"
              >
                <svg
                  class="w-4 h-4 mt-6 text-gray-500 dark:text-gray-400"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z"
                  />
                </svg>
              </div>
              <input
                name="start"
                type="text"
                id="date_start"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-3 rounded-r-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Select date start"
              />
            </div>
            <div class="relative mb-6">
              <label
                for="date_end"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >Khứ hồi</label
              >
              <div
                class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none"
              >
                <svg
                  class="w-4 h-4 mt-6 text-gray-500 dark:text-gray-400"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z"
                  />
                </svg>
              </div>
              <input
                name="end"
                type="text"
                id="date_end"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-3 rounded-l-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Select date end"
              />
            </div>
          </div>

          <div class="mr-4">
            <label
              for="input-group-2"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >Ngân sách</label
            >
            <div class="relative mb-6">
              <div
                class="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none"
              >
                <svg
                  class="w-4 h-4 text-gray-500 dark:text-gray-400"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 640 512"
                >
                  <!--!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.-->
                  <path
                    d="M96 96V320c0 35.3 28.7 64 64 64H576c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H160c-35.3 0-64 28.7-64 64zm64 160c35.3 0 64 28.7 64 64H160V256zM224 96c0 35.3-28.7 64-64 64V96h64zM576 256v64H512c0-35.3 28.7-64 64-64zM512 96h64v64c-35.3 0-64-28.7-64-64zM288 208a80 80 0 1 1 160 0 80 80 0 1 1 -160 0zM48 120c0-13.3-10.7-24-24-24S0 106.7 0 120V360c0 66.3 53.7 120 120 120H520c13.3 0 24-10.7 24-24s-10.7-24-24-24H120c-39.8 0-72-32.2-72-72V120z"
                  />
                </svg>
              </div>
              <input
                type="text"
                id="input-group-2"
                class="p-3 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="VND"
              />
            </div>
          </div>
          <div class="relative">
            <button
              @click="toggleDropMenu()"
              class="relative inline-flex items-center px-10 py-4 text-sm font-medium text-center text-white bg-blue-600 rounded-lg hover:bg-blue-500 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              type="button"
            >
              Sở thích
              <svg
                class="w-2.5 h-2.5 ms-2.5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 10 6"
              >
                <path
                  stroke="white"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="m1 1 4 4 4-4"
                />
              </svg>
            </button>

            <!-- Dropdown menu -->
            <div
              id="dropdown_hobby"
              class="absolute -left-10 bottom-100 mt-2 z-10 hidden bg-white rounded-lg shadow w-60 dark:bg-gray-700"
            >
              <!-- <div class="p-3">
                <label for="input-group-search" class="sr-only">Search</label>
                <div class="relative">
                  <div
                    class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none"
                  >
                    <svg
                      class="w-4 h-4 text-gray-500 dark:text-gray-400"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 20 20"
                    >
                      <path
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                      />
                    </svg>
                  </div>
                  <input
                    type="text"
                    id="input-group-search"
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Search user"
                  />
                </div>
              </div> -->
              <ul
                class="h-48 px-3 pb-3 overflow-y-auto text-sm text-gray-700 dark:text-gray-200"
              >
                <li v-for="(hobby, index) in hobby_list.data" :key="index">
                  <!-- class="flex items-center p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-600" -->
                  <label
                    class="w-full ms-2 text-sm font-medium text-gray-900 rounded dark:text-gray-300 flex items-center p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-600"
                  >
                    <input
                      type="checkbox"
                      value=""
                      class="w-4 h-4 text-blue-600 mr-3 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                    />
                    {{ hobby.hobby_name }}</label
                  >
                </li>
              </ul>
            </div>
          </div>
          <router-link
            :to="{ name: 'render_plan' }"
            class="button ml-5 p-3 font-bold rounded-lg bg-amber-600 hover:bg-amber-500 transition-colors text-gray-50"
          >
            <svg
              class="h-6 w-6"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
            >
              <!--!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.-->
              <path
                d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z"
              />
            </svg>
          </router-link>
        </form>
      </div>
    </div>
    <router-view> </router-view>
  </div>
</template>

<script setup>
// import Footer from "../components/Footer.vue";
import axios from "axios";
import { onMounted, ref, computed } from "vue";
import "../../node_modules/flowbite/dist/datepicker.turbo";
import "https://cdnjs.cloudflare.com/ajax/libs/flowbite/2.3.0/datepicker.min.js";

const hobby_list = ref([]);
const location_list = ref([]);
onMounted(async () => {
  try {
    const hobbies = await axios.get(
      "http://localhost:8080/smart_travel_api/api/services/hobby_list.php"
    );
    hobby_list.value = hobbies.data;

    const locations = await axios.get(
      "http://localhost:8080/smart_travel_api/api/location/infor_location.php"
    );
    location_list.value = locations.data;

    console.log(location_list.value);
    console.log(hobby_list.value);
    // debugger;
  } catch (error) {
    console.error(error);
  }
});

function toggleDropMenu() {
  const dropdown = document.getElementById("dropdown_hobby");
  dropdown.classList.toggle("hidden");
}
</script>

<style scoped>
/* div#form_infor {
  position: relative;
}
div#form_infor::after {
  color: rgb(70,46,46);
  font-size: 20px;
  content: "Lập lịch trình";
  display: inline-block;
  width: 300px;
  height: 80px;
  position: absolute;
  top: -20%;
  transform: translateY(-50%);
  background-color: rgb(248,250,252);
  border-radius: 10px;
  padding-top: 10px;
  text-align: center;
} */
</style>
