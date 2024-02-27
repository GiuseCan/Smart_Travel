<template>
  <header class="flex justify-between pt-12 px-10 items-center">
    <router-link to="/" class="text-gray-100 font-bold md:text-3xl lg:text-5xl drop-shadow-lg">
      Travello
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
      <router-link
        :to="{ name: 'signup' }"
        class="text-gray-100 md:text-md lg:text-xl font-bold drop-shadow-lg mr-3"
      >
        Đăng Ký
      </router-link>
      <router-link
        :to="{ name: 'login' }"
        class="text-gray-100 md:text-md lg:text-xl font-bold drop-shadow-lg"
      >
        Đăng Nhập
      </router-link>
    </div>
    <!-- <div id="userMenu">
      <UserMenu class="text-gray-100 text-xl font-bold drop-shadow-lg mr-7" />
    </div> -->
  </header>
</template>

<script setup>
import UserMenu from '../views/UserMenu.vue'

</script>
