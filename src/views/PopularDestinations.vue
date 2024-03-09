<template>
  <div id="popular" class="flex justify-center flex-wrap">
    <div class="flex items-center flex-col mb-20 w-full">
      <h4 class="text-gray-400 tracking-widest">SIMPLY AMAZING PLACES</h4>
      <h2 class="text-3xl font-bold text-gray-800 tracking-widest">
        Những điểm đến phổ biến
      </h2>
    </div>

    <div v-if="!locations.data">
      <p class="text-center text-gray-500">Loading data...</p>
    </div>
    <div v-else class="grid lg:grid-cols-3 md:grid-cols-2 gap-10">
      <router-link
        v-for="(location, index) in locations.data.slice(0, 6)"
        :key="index"
        :to="{ name: 'detaillocation', params: { id: location.visit_id } }"
        class="rounded-t-lg w-72 object-contain shadow-md transition-transform hover:scale-105"
      >
        <img
          class="rounded-t-lg"
          src="https://preview.colorlib.com/theme/travello/images/destination_2.jpg.webp"
          alt="img"
        />
        <div class="p-3">
          <h3 class="font-bold text-xl py-2">{{ location.visit_name }}</h3>
          <p class="h-16">{{ location.visit_address }}</p>
          <h5 class="pt-1 font-bold">From ${{ location.tuition_fee }}</h5>
        </div>
      </router-link>
    </div>
  </div>
</template>

<script setup>
import axios from "axios";
import { onMounted, ref, computed } from "vue";

const locations = ref([]);
onMounted(async () => {
  try {
    const response = await axios.get(
      "http://localhost:8080/smart_travel_api/api/location/infor_location.php"
    );
    locations.value = response.data;
    console.log(locations.value);
    // debugger;
  } catch (error) {
    console.error(error);
  }
});
</script>
