<template>
  <div class="">
    <navbar class="z-50 sticky w-full pb-7 top-0 bg-blue-400 shadow-md" />

    <div
      v-if="visit == '' || visit == null"
      role="status"
      class="py-10 px-20 space-y-8 animate-pulse md:space-y-0 md:space-x-8 rtl:space-x-reverse md:flex md:items-center"
    >
      <div
        class="flex items-center justify-center w-full h-48 bg-gray-300 rounded sm:w-96 dark:bg-gray-700"
      >
        <svg
          class="w-10 h-10 text-gray-200 dark:text-gray-600"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 20 18"
        >
          <path
            d="M18 0H2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm4.376 10.481A1 1 0 0 1 16 15H4a1 1 0 0 1-.895-1.447l3.5-7A1 1 0 0 1 7.468 6a.965.965 0 0 1 .9.5l2.775 4.757 1.546-1.887a1 1 0 0 1 1.618.1l2.541 4a1 1 0 0 1 .028 1.011Z"
          />
        </svg>
      </div>
      <div class="w-full">
        <div
          class="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-4"
        ></div>
        <div
          class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[480px] mb-2.5"
        ></div>
        <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>
        <div
          class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[440px] mb-2.5"
        ></div>
        <div
          class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[460px] mb-2.5"
        ></div>
        <div
          class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[360px]"
        ></div>
      </div>
      <span class="sr-only">Loading...</span>
    </div>
    <div v-else class="bg-gray-100 flex items-center justify-between gap-10">
      <!-- Carousel wrapper -->

      <div class="lg:max-w-[800px] md:max-w-[500px] grid grid-cols-2 gap-3 p-5">
        <div v-for="(url, index) in visit.img_url" :key="index">
          <img
            :src="url"
            class="rounded-md object-cover w-full h-full hover:scale-105 transition-transform"
            alt=""
          />
        </div>
      </div>

      <div class="rounded-t-lg object-contain flex gap-5 flex-col">
        <h3 class="font-bold text-3xl py-2">{{ visit.visit_name }}</h3>
        <h5 class="flex items-center">
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
        <p class="flex mb-3 items-center">
          <svg
            class="w-20 h-20 mr-3"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 576 512"
          >
            <!--!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.-->
            <path
              d="M0 80v48c0 17.7 14.3 32 32 32H48 96V80c0-26.5-21.5-48-48-48S0 53.5 0 80zM112 32c10 13.4 16 30 16 48V384c0 35.3 28.7 64 64 64s64-28.7 64-64v-5.3c0-32.4 26.3-58.7 58.7-58.7H480V128c0-53-43-96-96-96H112zM464 480c61.9 0 112-50.1 112-112c0-8.8-7.2-16-16-16H314.7c-14.7 0-26.7 11.9-26.7 26.7V384c0 53-43 96-96 96H368h96z"
            />
          </svg>
          {{ visit.visit_describe }}
        </p>
        <h4>
          Thể loại:
          <span v-for="(hobby, index) in visit.hobbies" :key="index"
            >{{ hobby }},
          </span>
        </h4>
        <h5 class="pt-1 font-bold">From ${{ visit.tuition_fee }}</h5>
      </div>
    </div>
  </div>
</template>

<script setup>
import Navbar from "../components/Navbar.vue";
import { useRoute } from "vue-router";
import { onMounted, ref, computed } from "vue";
import axios from "axios";
import "../../node_modules/flowbite";

const route = useRoute();

// var visit_location = ref("");
// var location_describe = ref("");
var visit = ref("");

onMounted(async () => {
  axios
    .get(
      `http://localhost:8080/smart_travel_api/api/location/show_location_by_id.php?id=${route.params.id}`
    )
    .then(({ data }) => {
      // console.log(data.visit_location);
      // console.log(data.location_describe);
      // console.log(data.tuition_fee);
      // visit_location = data.visit_location;
      // location_describe = data.location_describe;
      // tuition_fee = data.tuition_fee;
      visit.value = data;
      console.log(visit.value);
      // debugger;
    });
});
// const currentIndex = ref(0);
// const isImageVisible = ref(true);

// const nextImage = () => {
//   console.log("next");
//   console.log(visit);
//   console.log(visit.img_url);
//   // console.log(visit.img_url.length);
//   if (visit && visit.img_url) {
//     currentIndex.value = (currentIndex.value + 1) % visit.img_url.length;
//     isImageVisible.value = false;
//     setTimeout(() => {
//       isImageVisible.value = true;
//     }, 100);
//   }
// };

// const prevImage = () => {
//   console.log("prev");
//   if (visit && visit.img_url) {
//     currentIndex.value =
//       (currentIndex.value - 1 + visit.img_url.length) % visit.img_url.length;
//     isImageVisible.value = false;
//     setTimeout(() => {
//       isImageVisible.value = true;
//     }, 100);
//   }
// };
</script>
