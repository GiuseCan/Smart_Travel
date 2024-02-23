<template>
  <div class="bg-[url('../../image/Backgroud.jpg')] w-full h-full bg-cover">
    <navbar class="sticky top-0" />

    <main class="h-full flex justify-center mt-36">
      <router-view class="" />
    </main>

    <!-- <Footer/> -->
  </div>
</template>

<script setup>

import Navbar from '../components/Navbar.vue'
import Footer from "./Footer.vue";

</script>