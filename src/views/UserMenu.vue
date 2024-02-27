<template>
  <div class="flex justify-end pt-5 pr-5">
    <div class="relative inline-block mb-20">
      <button
        id="dropdownDefaultButton"
        data-dropdown-toggle="dropdown"
        class="relative z-10 flex items-center p-2 text-sm text-gray-600 bg-white border border-transparent rounded-md focus:border-blue-500 focus:ring-opacity-40 dark:focus:ring-opacity-40 focus:ring-blue-300 dark:focus:ring-blue-400 focus:ring dark:text-white dark:bg-gray-800 focus:outline-none"
        type="button"
      >
        <span class="mx-1">Cẩn</span>
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
        class="absolute pr-5 right-0 z-20 w-56 py-2 mt-2 overflow-hidden bg-white rounded-md shadow-xl dark:bg-gray-800"
      >
        <div
          class="py-2 text-sm text-gray-700 dark:text-gray-200"
          aria-labelledby="dropdownDefaultButton"
        >
          <a
            href="#"
            class="flex items-center p-3 -mt-2 text-sm text-gray-600 transition-colors duration-200 transform dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white"
          >
            <img
              class="flex-shrink-0 object-cover mx-1 rounded-full w-9 h-9"
              src="https://images.unsplash.com/photo-1523779917675-b6ed3a42a561?ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8d29tYW4lMjBibHVlfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=face&w=500&q=200"
              alt="jane avatar"
            />
            <div class="mx-1">
              <h1
                class="text-sm font-semibold text-gray-700 dark:text-gray-200"
              >
                Jane Doe
              </h1>
              <p class="text-sm text-gray-500 dark:text-gray-400">
                janedoe@exampl.com
              </p>
            </div>
          </a>

          <hr class="border-gray-200 dark:border-gray-700" />
          <router-link
            :to="{ name: 'userprofile' }"
            class="block px-4 py-3 text-sm text-gray-600 capitalize transition-colors duration-200 transform dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white"
          >
            view profile
          </router-link>

          <hr class="border-gray-200 dark:border-gray-700" />

          <a
            href="#"
            class="block px-4 py-3 text-sm text-gray-600 capitalize transition-colors duration-200 transform dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white"
          >
            Help
          </a>
          <a
            href="#"
            class="block px-4 py-3 text-sm text-gray-600 capitalize transition-colors duration-200 transform dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white"
          >
            Sign Out
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import "../../node_modules/flowbite/dist/flowbite";
</script>

<style scoped></style>
