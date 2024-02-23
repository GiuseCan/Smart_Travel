<template>
  <div id="container" class="flex flex-col h-screen bg-gray-100">
    <!-- Barra de navegación superior -->
    <div
      id="navbar"
      class="bg-white text-white shadow-2xl w-full p-2 flex items-center justify-between"
    >
      <div class="flex items-center">
        <div class="flex items-center border-b-2 border-blue-300">
          <router-link
            to="/"
            class="text-blue-300 font-bold text-5xl m-5 drop-shadow-lg"
          >
            Travello
          </router-link>
        </div>
        <div class="md:hidden flex items-center">
          <!-- Se muestra solo en dispositivos pequeños -->
          <button id="menuBtn">
            <i class="fas fa-bars text-gray-500 text-lg"></i>
            <!-- Ícono de menú -->
          </button>
        </div>
      </div>

      <div class="space-x-5">
        <button>
          <i class="fas fa-bell text-gray-500 text-lg"></i>
        </button>
        <button>
          <i class="fas fa-user text-gray-500 text-lg"></i>
        </button>
      </div>
    </div>

    <div class="flex-1 flex flex-wrap">
      <div
        class="p-2 bg-white w-full md:w-60 flex flex-col md:flex hidden"
        id="sideNav"
      >
        <nav>
          <router-link
            class="border-b-2 border-blue-300 block text-gray-500 py-2.5 px-4 my-4 rounded transition duration-200 hover:bg-gradient-to-r hover:from-cyan-500 hover:to-cyan-500 hover:text-white"
            :to="{ name: 'manage_locations' }"
          >
            Quản lý người địa điểm
          </router-link>
          <router-link
            class="border-b-2 border-blue-300 block text-gray-500 py-2.5 px-4 my-4 rounded transition duration-200 hover:bg-gradient-to-r hover:from-cyan-500 hover:to-cyan-500 hover:text-white"
            :to="{ name: 'manage_user' }"
          >
            Quản lý người dùng
          </router-link>
          <router-link
            class="border-b-2 border-blue-300 block text-gray-500 py-2.5 px-4 my-4 rounded transition duration-200 hover:bg-gradient-to-r hover:from-cyan-500 hover:to-cyan-500 hover:text-white"
            :to="{ name: 'manage_booking' }"
          >
            Quản lý đặt lịch
          </router-link>
          <router-link
            class="border-b-2 border-blue-300 block text-gray-500 py-2.5 px-4 my-4 rounded transition duration-200 hover:bg-gradient-to-r hover:from-cyan-500 hover:to-cyan-500 hover:text-white"
            :to="{ name: 'manage_static_and_report' }"
          >
            Quản lý thống kê, báo cáo
          </router-link>
        </nav>
      </div>

      <div id="hero" class="flex-1 p-4 w-full md:w-1/2">
        <router-view> </router-view>
      </div>
    </div>
  </div>
</template>

// script
<script setup>
import { onMounted, ref } from "vue";
import UserProfile from "../views/ManageUser.vue";
var currentView = 0;
</script>

<style scoped>
div#sideNav,
div#navbar {
  background-color: rgb(248, 244, 243);
}
div#hero {
  background-color: rgb(229, 231, 235);
}
</style>
