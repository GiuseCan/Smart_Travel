<template>
  <div class=" flex justify-end">
    <div class="relative inline-block">
      <button
        class="relative flex items-center p-2 text-sm text-gray-100 bg-white-rgba border border-transparent rounded-md focus:border-blue-500 focus:ring-opacity-40 dark:focus:ring-opacity-40 focus:ring-blue-300 dark:focus:ring-blue-400 focus:ring dark:text-white dark:bg-gray-800 focus:outline-none"
        type="button"
        @click="toggleDropMenu()"
      >
        <img
          class="flex-shrink-0 object-cover mx-1 rounded-full w-9 h-9"
          src="../../image/avt.jpg"
          alt="jane avatar"
        />
        <span class="mx-1">{{ user_name }}</span>
        <svg
          class="w-5 h-5 mx-1"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M12 15.713L18.01 9.70299L16.597 8.28799L12 12.888L7.40399 8.28799L5.98999 9.70199L12 15.713Z"
            fill="currentColor"
          ></path>
        </svg>
      </button>

      <!-- Dropdown menu -->
      <div
        id="dropdown"
        class="hidden absolute right-0 z-50 w-56 py-2 mt-2 overflow-hidden bg-white rounded-md shadow-xl dark:bg-gray-800"
      >
        <div class="py-2 text-sm text-gray-700 dark:text-gray-200">
          <a
            href="#"
            class="flex items-center p-3 -mt-2 text-sm text-gray-600 transition-colors duration-200 transform dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white"
          >
            <div class="mx-1">
              <h1
                class="text-sm font-semibold text-gray-700 dark:text-gray-200"
              >
                {{ user_name }}
              </h1>
              <p class="text-sm text-gray-500 dark:text-gray-400">
                {{ email }}
              </p>
            </div>
          </a>

          <hr class="border-gray-200 dark:border-gray-700" />
          <router-link
            :to="{ name: 'userprofile' }"
            class="block px-4 py-3 text-sm text-gray-600 capitalize transition-colors duration-200 transform dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white"
          >
            Chỉnh sửa hồ sơ
          </router-link>
          <router-link
          :to="{ name: 'ticket_user', params: { id: id_user} }"
            class="block px-4 py-3 text-sm text-gray-600 capitalize transition-colors duration-200 transform dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white"
          >
            Vé đã đặt
          </router-link>

          <hr class="border-gray-200 dark:border-gray-700" />
          <button
            type="submit"
            @click="Logout()"
            class="block px-4 py-3 text-sm text-gray-600 capitalize transition-colors duration-200 transform dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white"
          >
            Đăng xuất
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useRouter } from "vue-router";
import axios from "axios";
import { ref, computed, watch, onMounted } from "vue";

// const user = JSON.parse(localStorage.getItem("user"));
const user = JSON.parse(localStorage.getItem("user"));
const user_name = ref(user?.user?.user_name || ""); // Use ref instead of directly extracting
const email = ref(user?.user?.email || ""); // Use ref instead of directly extracting
const router = useRouter();
const id_user = ref(user?.user?.user_id || "")

async function Logout() {
  try {
    // Gọi API logout
    const response = await axios.get(
      "http://localhost:8080/smart_travel_api/api/user/logout.php"
    );

    // Xử lý thành công
    if (response.status === 200) {
      // Xóa token và thông tin người dùng
      localStorage.removeItem("user");

      // Chuyển hướng đến trang chủ
      window.location.href = "/"; // Chuyển hướng đến trang chủ
    } else {
      throw new Error("Lỗi khi đăng xuất");
    }
  } catch (error) {
    // Hiển thị thông báo lỗi
    console.error(error.message);
  }
}


function toggleDropMenu() {
  const dropdown = document.getElementById("dropdown");
  dropdown.classList.toggle("hidden");
}
</script>

<style scoped></style>
