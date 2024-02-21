<template>
  <div class="flex flex-wrap justify-center">
    <navbar class="sticky w-full top-0 bg-blue-400 shadow-md pt-5 pb-7" />

    <div class="mt-20 pb-20 rounded-t-lg object-contain flex gap-5 items-center flex-col">
      <img
        class="rounded-t-lg transition-transform"
        src="https://preview.colorlib.com/theme/travello/images/destination_2.jpg.webp"
        alt="img"
      />
      <h3 class="font-bold text-3xl py-2">Indonesia</h3>
      <p class="text-center px-48">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates totam cum, harum recusandae non unde, dicta officia impedit voluptate quasi reiciendis voluptatem porro similique voluptatibus cumque labore rem asperiores facilis.</p>
      <h5 class="pt-1 font-bold">From $679</h5>
    </div>
  </div>
</template>

<script setup>
import Navbar from "../components/Navbar.vue";
</script>
