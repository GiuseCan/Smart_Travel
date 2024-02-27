<template>
  <div id="popular" class="flex justify-center flex-wrap">
    <div class="flex items-center flex-col mb-20 w-full">
      <h4 class="text-gray-400 tracking-widest">SIMPLY AMAZING PLACES</h4>
      <h2 class="text-3xl font-bold text-gray-800 tracking-widest">
        Popular Destinations
      </h2>
    </div>
    <div class="grid lg:grid-cols-3 md:grid-cols-2 gap-10">
      <router-link
        v-for="index in 6"
        :key="index"
        :to="{ name: 'detaillocation' }"
        class="rounded-t-lg w-72 object-contain shadow-md transition-transform hover:scale-105"
      >
        <img
          class="rounded-t-lg"
          src="https://preview.colorlib.com/theme/travello/images/destination_2.jpg.webp"
          alt="img"
        />
        <div class="p-3">
          <h3 class="font-bold text-xl py-2">Indonesia</h3>
          <p>Nulla pretium tincidunt felis, nec.</p>
          <h5 class="pt-1 font-bold">From $679</h5>
        </div>
      </router-link>
    </div>
  </div>
</template>

<script setup></script>
