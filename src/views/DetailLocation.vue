<template>
  <div class="flex flex-wrap justify-center">
    <navbar class="sticky w-full pb-10 top-0 bg-blue-400 shadow-md" />  

    <div
      class="mt-20 pb-20 rounded-t-lg object-contain flex gap-5 items-center flex-col"
    >
      <img
        class="rounded-t-lg transition-transform"
        src="https://preview.colorlib.com/theme/travello/images/destination_2.jpg.webp"
        alt="img"
      />
      <h3 class="font-bold text-3xl py-2">{{ visit.visit_name }}</h3>
      <p class="text-center px-48">{{ visit.visit_describe }}</p>
      <h5 class="pt-1 font-bold">From ${{ visit.tuition_fee }}</h5>
    </div>
  </div>
</template>

<script setup>
import Navbar from "../components/Navbar.vue";
import { useRoute } from "vue-router";
import { onMounted, ref, computed } from "vue";
import axios from "axios";

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
</script>
