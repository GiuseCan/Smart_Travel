<template>
  <header class="z-10 shadow-sm flex justify-between pt-8 md:px-10 lg:px-32 items-center">
    <router-link
      to="/"
      class="text-gray-100 font-bold md:text-3xl lg:text-5xl drop-shadow-lg"
    >
      JustChill
    </router-link>
    <div class="flex gap-10">
      <router-link
        :to="{ name: 'homeview' }"
        class="text-gray-100 md:text-lg lg:text-2xl font-bold drop-shadow-lg"
      >
        Trang Chủ
      </router-link>
      <router-link
        :to="{ name: 'services' }"
        class="text-gray-100 md:text-lg lg:text-2xl font-bold drop-shadow-lg"
      >
        Dịch Vụ
      </router-link>
      <router-link
        :to="{ name: 'aboutus' }"
        class="text-gray-100 md:text-lg lg:text-2xl font-bold drop-shadow-lg"
      >
        Chúng Tôi
      </router-link>
      <router-link
        :to="{ name: 'contact' }"
        class="text-gray-100 md:text-lg lg:text-2xl font-bold drop-shadow-lg"
      >
        Liên Hệ
      </router-link>
    </div>
    <div>
      <div v-if="!user">
        <router-link
          :to="{ name: 'signup' }"
          class="text-gray-100 hover:text-gray-50 transition-colors md:text-md lg:text-lg font-bold drop-shadow-lg mr-3 border-solid border-2 py-3 md:px-2 lg:px-4 rounded-md"
        >
          Đăng Ký
        </router-link>
        <router-link
          :to="{ name: 'login' }"
          class="text-gray-100 hover:text-gray-50 transition-colors md:text-md lg:text-lg font-bold drop-shadow-lg border-solid border-2 py-3 md:px-2 lg:px-4 rounded-md"
        >
          Đăng Nhập
        </router-link>
      </div>
      <div v-else>
        <UserMenu class="text-gray-100 text-xl font-bold drop-shadow-lg" />
      </div>
    </div>
  </header>
</template>

<script setup>
import UserMenu from "../views/UserMenu.vue";
import { ref, computed, watch } from "vue";

const user = JSON.parse(localStorage.getItem("user"));

</script>
