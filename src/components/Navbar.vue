<template>
  <header class="flex justify-between pt-12 px-10 items-center">
    <router-link to="/" class="text-gray-100 font-bold text-5xl drop-shadow-lg">
      Travello
    </router-link>
    <div class="flex gap-10">
      <router-link
        :to="{ name: 'homeview' }"
        class="text-gray-100 text-2xl font-bold drop-shadow-lg"
      >
        Home
      </router-link>
      <router-link
        :to="{ name: 'services' }"
        class="text-gray-100 text-2xl font-bold drop-shadow-lg"
      >
        Services
      </router-link>
      <router-link
        :to="{ name: 'aboutus' }"
        class="text-gray-100 text-2xl font-bold drop-shadow-lg"
      >
        About Us
      </router-link>
      <router-link
        :to="{ name: 'contact' }"
        class="text-gray-100 text-2xl font-bold drop-shadow-lg"
      >
        Contact
      </router-link>
    </div>
    <div>
      <router-link
        :to="{ name: 'signup' }"
        class="text-gray-100 text-xl font-bold drop-shadow-lg mr-7"
      >
        Sign Up
      </router-link>
      <router-link
        :to="{ name: 'login' }"
        class="text-gray-100 text-xl font-bold drop-shadow-lg"
      >
        Log In
      </router-link>
    </div>
  </header>
</template>

<script setup></script>
