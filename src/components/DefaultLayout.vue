<template>
  <div class="bg-[url('../../image/Backgroud.jpg')] w-full h-full bg-cover">
    <!-- <div class="bg-blue-rgba"> -->
      <navbar class="sticky top-0" />

      <main class="flex justify-center">
        <router-view class="" />
      </main>
      <!-- <Footer class="sticky bottom-0"/> -->
    </div>
  <!-- </div> -->
</template>
<script setup>
import Navbar from "../components/Navbar.vue";
import Footer from "./Footer.vue";
import Chatra from "../views/Chatra.vue"
</script>
