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
          @submit.prevent="submit"
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
                    class="w-4 h-4 z-10 text-gray-500 dark:text-gray-400"
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
                  required
                  v-model="location_departure"
                  type="text"
                  id="input-group-1"
                  class="relative p-3 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg rounded-r-none focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Nhập địa điểm"
                  @input="handleInputChange_departure"
                />
                <ul
                  v-if="searchResults_departure.length > 0"
                  class="z-50 pt-2 bg-gray-50 rounded-lg rounded-t-none w-full absolute search-results"
                >
                  <li
                    class="flex pl-3 gap-3 pt-2 hover:text-blue-600 transition-colors cursor-pointer"
                    v-for="(result, index) in searchResults_departure"
                    :key="index"
                    @click="selectLocation_departure(result)"
                  >
                    <svg
                      class="h-5 w-5"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 384 512"
                    >
                      <!--!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.-->
                      <path
                        d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z"
                      />
                    </svg>
                    {{ result }}
                  </li>
                </ul>
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
                    class="w-4 h-4 z-10 text-gray-500 dark:text-gray-400"
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
                  required
                  v-model="location_destination"
                  type="text"
                  id="input-group-1"
                  class="relative p-3 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg rounded-l-none focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Nhập địa điểm"
                  @input="handleInputChange_destination"
                />
                <ul
                  v-if="searchResults_destination.length > 0"
                  class="z-50 pt-2 bg-gray-50 rounded-lg rounded-t-none w-full absolute search-results"
                >
                  <li
                    class="flex pl-3 gap-3 pt-2 hover:text-blue-600 transition-colors cursor-pointer"
                    v-for="(result, index) in searchResults_destination"
                    :key="index"
                    @click="selectLocation_destination(result)"
                  >
                    <svg
                      class="h-5 w-5"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 384 512"
                    >
                      <!--!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.-->
                      <path
                        d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z"
                      />
                    </svg>
                    {{ result }}
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <!-- <div date-rangepicker class="flex items-center mr-10"> -->
          <div class="flex items-center mr-10">
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
                required
                v-model="date_start"
                name="start"
                type="date"
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
                required
                v-model="date_end"
                name="end"
                type="date"
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
                required
                v-model="cost"
                type="text"
                id="input-group-2"
                class="p-3 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="VND"
                @input="formatNumber"
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
                      required
                      type="checkbox"
                      :id="`hobby-${index}`"
                      :value="hobby.hobby_name"
                      v-model="selectedHobbies"
                      @change="updateMyHobby"
                      class="w-4 h-4 text-blue-600 mr-3 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                    />
                    {{ hobby.hobby_name }}</label
                  >
                </li>
              </ul>
            </div>
          </div>
          <router-link
            v-if="RenderPlanCheck"
            type="submit"
            :to="{ name: 'render_plan' }"
            @click="RenderPlan()"
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
          <button
            v-else
            disabled
            class="opacity-50 button ml-5 p-3 font-bold rounded-lg bg-amber-600 hover:bg-amber-500 transition-colors text-gray-50"
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
          </button>
        </form>
      </div>
    </div>
    <router-view> </router-view>
  </div>
</template>

<script setup>
// import Footer from "../components/Footer.vue";
import axios from "axios";
import { onMounted, ref, computed, watch, watchEffect } from "vue";
import "../../node_modules/flowbite/dist/datepicker.turbo";
import "https://cdnjs.cloudflare.com/ajax/libs/flowbite/2.3.0/datepicker.min.js";
import { useRouter } from "vue-router";
const router = useRouter();
import Search from "../components/Search.vue";

const location_destination = ref("");
const location_departure = ref("");
const date_start = ref("");
const date_end = ref("");
const cost = ref("");
// const cost_value = ref("");

const hobbyList = ref({ data: [] }); // Assuming hobby data is fetched
const selectedHobbies = ref([]);
const myHobby = ref([]);

const hobby_list = ref([]);
const location_list = ref([]);
onMounted(async () => {
  try {
    const hobbies = await axios.get(
      "http://localhost:8080/smart_travel_api/api/services/hobby_list.php"
    );
    hobby_list.value = hobbies.data;
    console.log(hobby_list.value);
  } catch (error) {
    console.error(error);
  }
});

function updateMyHobby() {
  myHobby.value = selectedHobbies.value;
}

const RenderPlanCheck = ref(false);
// Tạo một computed property để kiểm tra xem tất cả các biến đã được điền đầy đủ hay không
const allVariablesFilled = computed(() => {
  return (
    location_destination.value !== "" &&
    location_departure.value !== "" &&
    date_start.value !== "" &&
    date_end.value !== "" &&
    cost.value !== "" &&
    selectedHobbies.value.length > 0
  );
});
// Theo dõi computed property allFieldsFilled và cập nhật giá trị của RenderPlanCheck
watchEffect(() => {
  RenderPlanCheck.value = allVariablesFilled.value;
});

async function RenderPlan() {
  updateMyHobby();
  // console.log(location_destination.value);
  // console.log(location_departure.value);
  // console.log(date_start.value);
  // console.log(date_end.value);
  // console.log(cost.value);
  // console.log(myHobby.value);
  const formData = new FormData();
  formData.append("location_destination", this.location_destination);
  formData.append("location_departure", this.location_departure);
  formData.append("date_start", this.date_start);
  formData.append("date_end", this.date_end);
  const costNumber = cost.value.replace(/\./g, ""); // Loại bỏ dấu .;
  console.log(costNumber);
  formData.append("cost", costUnformatted.value);
  formData.append("myhopy", this.myHobby);
  // formData.append("myhopy", JSON.stringify(this.myHobby.value));
  await axios
    .post(
      "http://localhost:8080/smart_travel_api/api/services/render_plan.php",
      formData
    )
    .then((response) => {
      localStorage.setItem("plan", JSON.stringify(response.data));
      // if(response.data)
      console.log(response.data);
      router.go(0); // Navigate to the current route
    })
    .catch((error) => {
      console.error("Error:", error);
      alert("Không có chuyến đi phù hợp");
    });
  // if(location_destination == '' || location_departure == '' || date_start == '' || date_end == '' || cost == '' || myHobby == ''){

  // }else{
  //   alert('Vui lòng nhập thông tin chuyến đi')
  // }
}

// const updateFormData = () => {
//   // Lưu trữ dữ liệu form vào Local Storage
//   localStorage.setItem('formData', JSON.stringify({
//     location_destination: location_destination,
//     location_departure: location_departure,
//     date_start: date_start,
//     date_end: date_end,
//     cost: cost,
//     myHobby: myHobby,
//   }));
// };
// const restoreFormData = () => {
//   // Lấy dữ liệu từ Local Storage
//   const savedFormData = localStorage.getItem('formData');
//   if (savedFormData) {
//     const formData = JSON.parse(savedFormData);
//     // Gán dữ liệu cho các trường input
//     location_destination = formData.location_destination;
//     location_departure = formData.location_departure;
//     date_start = formData.date_start;
//     date_end = formData.date_end;
//     cost = formData.cost;
//     myHobby = formData.myHobby;
//   }
// };

function toggleDropMenu() {
  const dropdown = document.getElementById("dropdown_hobby");
  dropdown.classList.toggle("hidden");
}
const costUnformatted = ref("");

const formatNumber = (event) => {
  const value = event.target.value;
  const cleanValue = value.replace(/[^0-9]/g, "");
  const formattedValue = cleanValue.replace(/\B(?=(\d{3})+(?!\d))/g, ".");

  cost.value = formattedValue;
  costUnformatted.value = cleanValue;
};

import algoliasearch from "algoliasearch/lite";

const searchClient = algoliasearch(
  "7730XLLAP0",
  "fe70212cb16a3680607995bb15a64988"
);
const index = searchClient.initIndex("smart_travel");

const searchTerm = ref("");
const searchResults_departure = ref([]);

const handleInputChange_departure = async () => {
  if (!location_departure.value) {
    searchResults_departure.value = [];
    return;
  }

  try {
    const { hits } = await index.search(location_departure.value);
    searchResults_departure.value = hits.map((hit) => hit.location_name);
  } catch (error) {
    console.error("Error searching for locations:", error);
  }
};

const selectLocation_departure = (location) => {
  location_departure.value = location;
  searchResults_departure.value = [];
};

const searchResults_destination = ref([]);

const handleInputChange_destination = async () => {
  if (!location_destination.value) {
    searchResults_destination.value = [];
    return;
  }

  try {
    const { hits } = await index.search(location_destination.value);
    searchResults_destination.value = hits.map((hit) => hit.location_name);
  } catch (error) {
    console.error("Error searching for locations:", error);
  }
};

const selectLocation_destination = (location) => {
  location_destination.value = location;
  searchResults_destination.value = [];
};
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
.ais-SearchBox {
  margin-bottom: 1em;
}

.ais-InstantSearch {
  max-width: 960px;
  width: 100%;
  display: block;
  overflow: hidden;
  margin: 0 auto;
}

.ais-Hits-item {
  margin-left: 0;
  width: 100%;
}

.ais-Hits-item img {
  margin-right: 1em;
}

.ais-Hits-list {
  margin-bottom: 1em;
}
</style>
