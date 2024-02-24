<template>
  <div>
    <div class="py-10 px-32 gap-32 w-full bg-gray-200 shadow-2xl">
      <section class="px-10">
        <ol class="relative border-s border-gray-50 dark:border-gray-700">
          <li class="mb-10 ms-4">
            <div
              class="absolute w-3 h-3 bg-gray-50 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"
            ></div>
            <time
              class="mb-1 text-sm font-normal leading-none text-gray-500 dark:text-gray-500"
              >17h30, Thứ 7, 24/2/2024</time
            >
            <h3 class="text-lg font-semibold text-gray-900 dark:text-white">
              Da Nang City
            </h3>
            <div class="grid grid-cols-2 gap-2">
              <p
                class="mb-2text-base font-normal text-gray-500 dark:text-gray-400"
              >
                thời gian dự trù: <strong>1h 35p</strong>
              </p>
              <input
                class="rounded-lg text-md"
                placeholder="Nhập lại thời gian"
                type="text"
                name=""
                id=""
              />
              <p
                class="mb-2 text-base font-normal text-gray-500 dark:text-gray-400"
              >
                Kinh phí dự trù: <strong>2.000.000</strong> /VND
              </p>
              <input
                class="rounded-lg text-md"
                placeholder="Nhập lại kinh phí"
                type="text"
                name=""
                id=""
              />
              <p
                class="mb-2 text-base font-normal text-gray-500 dark:text-gray-400"
              >
                Sở thích:
              </p>
              <ul
                class="items-center w-full text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg sm:flex dark:bg-gray-700 dark:border-gray-600 dark:text-white"
              >
                <li
                  class="w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600"
                >
                  <div class="flex items-center ps-3">
                    <input
                      id="vue-checkbox-list"
                      type="checkbox"
                      value=""
                      class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                    />
                    <label
                      for="vue-checkbox-list"
                      class="w-full py-3 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                      >Mạo hiểm</label
                    >
                  </div>
                </li>
                <li
                  class="w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600"
                >
                  <div class="flex items-center ps-3">
                    <input
                      id="react-checkbox-list"
                      type="checkbox"
                      value=""
                      class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                    />
                    <label
                      for="react-checkbox-list"
                      class="w-full py-3 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                      >Chill</label
                    >
                  </div>
                </li>
                <li
                  class="w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600"
                >
                  <div class="flex items-center ps-3">
                    <input
                      id="angular-checkbox-list"
                      type="checkbox"
                      value=""
                      class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                    />
                    <label
                      for="angular-checkbox-list"
                      class="w-full py-3 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                      >Tắm biển</label
                    >
                  </div>
                </li>
                <li class="w-full dark:border-gray-600">
                  <div class="flex items-center ps-3">
                    <input
                      id="laravel-checkbox-list"
                      type="checkbox"
                      value=""
                      class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                    />
                    <label
                      for="laravel-checkbox-list"
                      class="w-full py-3 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                      >leo núi</label
                    >
                  </div>
                </li>
                <li class="w-full dark:border-gray-600">
                  <div class="flex items-center ps-3">
                    <input
                      id="laravel-checkbox-list"
                      type="checkbox"
                      value=""
                      class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                    />
                    <label
                      for="laravel-checkbox-list"
                      class="w-full py-3 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                      >Ăn uống</label
                    >
                  </div>
                </li>
              </ul>
            </div>
          </li>
        </ol>
      </section>
      <section class="px-10">
        <ol class="relative border-s border-gray-50 dark:border-gray-700">
          <li class="mb-10 ms-4">
            <div
              class="absolute w-3 h-3 bg-gray-50 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"
            ></div>
            <time
              class="mb-1 text-sm font-normal leading-none text-gray-500 dark:text-gray-500"
              >17h30, Thứ 7, 24/2/2024</time
            >
            <h3 class="text-lg font-semibold text-gray-900 dark:text-white">
              Da Nang City
            </h3>
            <div class="grid grid-cols-2 gap-2">
              <p
                class="mb-2text-base font-normal text-gray-500 dark:text-gray-400"
              >
                thời gian dự trù: <strong>1h 35p</strong>
              </p>
              <input
                class="rounded-lg text-md"
                placeholder="Nhập lại thời gian"
                type="text"
                name=""
                id=""
              />
              <p
                class="mb-2 text-base font-normal text-gray-500 dark:text-gray-400"
              >
                Kinh phí dự trù: <strong>2.000.000</strong> /VND
              </p>
              <input
                class="rounded-lg text-md"
                placeholder="Nhập lại kinh phí"
                type="text"
                name=""
                id=""
              />
              <p
                class="mb-2 text-base font-normal text-gray-500 dark:text-gray-400"
              >
                Sở thích:
              </p>
              <ul
                class="items-center w-full text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg sm:flex dark:bg-gray-700 dark:border-gray-600 dark:text-white"
              >
                <li
                  class="w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600"
                >
                  <div class="flex items-center ps-3">
                    <input
                      id="vue-checkbox-list"
                      type="checkbox"
                      value=""
                      class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                    />
                    <label
                      for="vue-checkbox-list"
                      class="w-full py-3 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                      >Mạo hiểm</label
                    >
                  </div>
                </li>
                <li
                  class="w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600"
                >
                  <div class="flex items-center ps-3">
                    <input
                      id="react-checkbox-list"
                      type="checkbox"
                      value=""
                      class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                    />
                    <label
                      for="react-checkbox-list"
                      class="w-full py-3 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                      >Chill</label
                    >
                  </div>
                </li>
                <li
                  class="w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600"
                >
                  <div class="flex items-center ps-3">
                    <input
                      id="angular-checkbox-list"
                      type="checkbox"
                      value=""
                      class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                    />
                    <label
                      for="angular-checkbox-list"
                      class="w-full py-3 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                      >Tắm biển</label
                    >
                  </div>
                </li>
                <li class="w-full dark:border-gray-600">
                  <div class="flex items-center ps-3">
                    <input
                      id="laravel-checkbox-list"
                      type="checkbox"
                      value=""
                      class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                    />
                    <label
                      for="laravel-checkbox-list"
                      class="w-full py-3 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                      >leo núi</label
                    >
                  </div>
                </li>
                <li class="w-full dark:border-gray-600">
                  <div class="flex items-center ps-3">
                    <input
                      id="laravel-checkbox-list"
                      type="checkbox"
                      value=""
                      class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                    />
                    <label
                      for="laravel-checkbox-list"
                      class="w-full py-3 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                      >Ăn uống</label
                    >
                  </div>
                </li>
              </ul>
            </div>
          </li>
        </ol>
      </section>
      <a
        href="#"
        class="inline-flex items-center px-6 py-3 text-lg font-medium text-gray-900 bg-white border border-gray-200 rounded-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:outline-none focus:ring-gray-100 focus:text-blue-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-700"
        >Chỉnh sửa
        <svg
          class="w-3 h-3 ms-2 rtl:rotate-180"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 14 10"
        >
          <path
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M1 5h12m0 0L9 1m4 4L9 9"
          /></svg
      ></a>
    </div>
  </div>
</template>

<script setup></script>

<style scoped></style>
