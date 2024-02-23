<template>
  <!-- component -->
  <section class="bg-white dark:bg-gray-900">
    <navbar class="sticky top-0 bg-blue-300 shadow-md pt-5 pb-7" />

    <div class="flex justify-center min-h-screen">
      <div
        class="hidden bg-cover lg:block lg:w-2/5"
        style="
          background-image: url('https://images.unsplash.com/photo-1494621930069-4fd4b2e24a11?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=715&q=80');
        "
      ></div>

      <div
        class="flex items-center w-full max-w-3xl p-8 mx-auto lg:px-12 lg:w-3/5"
      >
        <div class="w-full">
          <div class="flex justify-around items-center">
            <div>
              <div v-if="imageUrl">
                <img
                  class="w-32 h-32 object-cover"
                  :src="imageUrl"
                  alt="Uploaded Image"
                />
              </div>
              <div v-else>
              <label
                class="w-50 flex flex-col items-center px-4 py-6 bg-white text-blue rounded-lg shadow-lg tracking-wide uppercase border border-blue cursor-pointer hover:bg-blue hover:text-white"
              >
                <svg
                  class="w-8 h-8"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path
                    d="M16.88 9.1A4 4 0 0 1 16 17H5a5 5 0 0 1-1-9.9V7a3 3 0 0 1 4.52-2.59A4.98 4.98 0 0 1 17 8c0 .38-.04.74-.12 1.1zM11 11h3l-4-4-4 4h3v3h2v-3z"
                  />
                </svg>
                <span class="mt-2 text-base leading-normal">Ảnh đại diện</span>

                <input
                  type="file"
                  class="hidden"
                  accept="image/*"
                  @change="handleFileUpload"
                />
              </label>
            </div>
            </div>
            
            <div>
              <h1
                class="text-2xl font-semibold tracking-wider text-gray-800 dark:text-white"
              >
                Tài khoản của bạn.
              </h1>

              <p class="mt-4 text-gray-500 dark:text-gray-400">
                Trải nghiệm cùng chúng tôi
              </p>
            </div>
          </div>

          <form class="grid grid-cols-1 gap-6 mt-8 md:grid-cols-2">
            <div>
              <label class="block mb-2 text-sm text-gray-600 dark:text-gray-200"
                >Họ và tên</label
              >
              <input
                type="text"
                placeholder="Cẩn"
                class="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
              />
            </div>

            <div>
              <label class="block mb-2 text-sm text-gray-600 dark:text-gray-200"
                >SĐT</label
              >
              <input
                type="text"
                placeholder="XXX-XX-XXXX-XXX"
                class="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
              />
            </div>

            <div>
              <label class="block mb-2 text-sm text-gray-600 dark:text-gray-200"
                >Địa chỉ Email</label
              >
              <input
                type="email"
                placeholder="canbl@example.com"
                class="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
              />
            </div>

            <div>
              <label class="block mb-2 text-sm text-gray-600 dark:text-gray-200"
                >Ngày sinh</label
              >
              <input
                type="date"
                placeholder="Enter your birthday"
                class="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
              />
            </div>

            <div>
              <label class="block mb-2 text-sm text-gray-600 dark:text-gray-200"
                >Giới tính</label
              >
              <select
                id="countries"
                class="border border-gray-200 px-5 py-3 border-gray-300 text-gray-600 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              >
                <option selected value="1">Nam</option>
                <option value="2">Nữ</option>
                <option value="3">Không đề cập</option>
              </select>
            </div>
            <div>
              <label class="block mb-2 text-sm text-gray-600 dark:text-gray-200"
                >Địa chỉ</label
              >
              <input
                type="password"
                placeholder="Enter your address"
                class="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
              />
            </div>

            <div>
              <label class="block mb-2 text-sm text-gray-600 dark:text-gray-200"
                >Sở thich</label
              >

              <div id="check_preference" class="flex gap-5 flex-wrap">
                <label class="inline-flex items-center mt-3">
                  <input
                    type="checkbox"
                    class="form-checkbox h-5 w-5 text-gray-600"
                    checked
                  /><span class="ml-2 text-gray-700">Danger</span>
                </label>

                <label class="inline-flex items-center mt-3">
                  <input
                    type="checkbox"
                    class="form-checkbox h-5 w-5 text-red-600"
                    checked
                  /><span class="ml-2 text-gray-700">Chill</span>
                </label>
                <label class="inline-flex items-center mt-3">
                  <input
                    type="checkbox"
                    class="form-checkbox h-5 w-5 text-red-600"
                    checked
                  /><span class="ml-2 text-gray-700">Chill</span>
                </label>
                <label class="inline-flex items-center mt-3">
                  <input
                    type="checkbox"
                    class="form-checkbox h-5 w-5 text-red-600"
                    checked
                  /><span class="ml-2 text-gray-700">Chill</span>
                </label>
              </div>
            </div>

            <button
              class="flex items-center justify-between w-full px-6 py-3 text-sm tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-500 rounded-md hover:bg-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50"
            >
              <span>Lưu chỉnh sửa</span>

              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="w-5 h-5 rtl:-scale-x-100"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fill-rule="evenodd"
                  d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                  clip-rule="evenodd"
                />
              </svg>
            </button>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import Navbar from "../components/Navbar.vue";
import { ref } from "vue";

const imageUrl = ref(null);

const handleFileUpload = (event) => {
  const file = event.target.files[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = () => {
      imageUrl.value = reader.result;
    };
    reader.readAsDataURL(file);
  }
};
</script>
