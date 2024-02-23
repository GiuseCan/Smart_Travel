<template>
  <div>
    <Services />

    <div id="contact" class="pb-28">
      <h2 class="text-gray-800 font-bold space-x-4 text-2xl pb-12">Get in touch with us</h2>
      <div class="grid lg:grid-cols-2 md:grid-cols-1">
        <div>
          <p class="text-gray-500 pb-16 mr-7">
            Pellentesque sit amet elementum ccumsan sit amet mattis eget,
            tristique at leo. Vivamus massa.Tempor massa et laoreet.
            Pellentesque sit amet elementum ccumsan sit amet mattis eget,
            tristique at leo. Vivamus massa.
          </p>
          <section class="pb-6">
            <h4 class="bg-gray-800 text-gray-100 font-bold inline-block py-1 px-4 rounded-xl">ADDRESS:</h4>
            <p class="text-gray-500 pl-5 pt-3">1481 Creekside Lane Avila Beach, CA 931</p>
          </section>
          <section class="pb-6">
            <h4 class="bg-gray-800 text-gray-100 font-bold inline-block py-1 px-4 rounded-xl">PHONE:</h4>
            <p class="text-gray-500 pl-5 pt-3">+53 345 7953 32453</p>
          </section>
          <section class="pb-6">
            <h4 class="bg-gray-800 text-gray-100 font-bold inline-block py-1 px-4 rounded-xl">EMAIL:</h4>
            <p class="text-gray-500 pl-5 pt-3">yourmail@gmail.com</p>
          </section>
          
        </div>
        <div class="grid grid-cols-2 gap-2">
            <input type="text" class="bg-gray-100 col-span-2 h-14 px-5 
         border-b-transparent border-b-2 hover:border-b-gray-800" 
            placeholder="Your Name">
            <input type="text" class="bg-gray-100 col-span-1 h-14 mr-3 px-5 border-b-transparent border-b-2 hover:border-b-gray-800" placeholder="Your Name">
            <input type="text" class="bg-gray-100 col-span-1 h-14 ml-3 px-5 border-b-transparent border-b-2 hover:border-b-gray-800" placeholder="Your Name">
            <textarea class="bg-gray-100 col-span-2 h-32 pl-5 pt-3 border-b-transparent border-b-2 hover:border-b-gray-800" placeholder="Massage"></textarea> 
            <button class="bg-gray-800 text-gray-100 col-span-1 w-40 h-16 rounded-2xl">SEND</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import Services from "./Services.vue";
</script>

<style scoped>
div#contact {
    margin-top: 250px;
    padding-left: 165px;
    padding-right: 165px;
}
</style>