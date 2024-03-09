<template>
  <div class="w-full h-full">
    <div id="booking" class="rounded-lg">
      <div
        class="flex gap-96 justify-around pt-6 pb-4 shadow-md mb-5 items-center"
      >
        <router-link
          to="/"
          class="text-blue-500 font-bold md:text-xl lg:text-3xl drop-shadow-lg"
        >
          JustChill
        </router-link>
        <div>
          <ol class="flex items-center">
            <li class="relative w-44">
              <div class="flex items-center">
                <div
                  class="z-10 flex items-center justify-center w-6 h-6 bg-blue-600 rounded-full ring-0 ring-white dark:bg-blue-900 sm:ring-8 dark:ring-gray-900 shrink-0"
                >
                  <svg
                    class="w-2.5 h-2.5 text-blue-100 dark:text-blue-300"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 16 12"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M1 5.917 5.724 10.5 15 1.5"
                    />
                  </svg>
                </div>
                <div class="flex w-44 bg-gray-200 h-0.5 dark:bg-gray-700"></div>
              </div>
              <div class="mt-3">
                <h3 class="font-medium text-gray-900 dark:text-white">Đặt</h3>
              </div>
            </li>
            <li class="relative w-44">
              <div class="flex items-center">
                <div
                  class="z-10 flex items-center justify-center w-6 h-6 bg-blue-600 rounded-full ring-0 ring-white dark:bg-blue-900 sm:ring-8 dark:ring-gray-900 shrink-0"
                >
                  <svg
                    class="w-2.5 h-2.5 text-blue-100 dark:text-blue-300"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 16 12"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M1 5.917 5.724 10.5 15 1.5"
                    />
                  </svg>
                </div>
                <div class="flex w-44 bg-gray-200 h-0.5 dark:bg-gray-700"></div>
              </div>
              <div class="mt-3">
                <h3 class="font-medium text-gray-900 dark:text-white">
                  Thanh toán
                </h3>
              </div>
            </li>
            <li class="relative">
              <div class="flex items-center">
                <div
                  class="z-10 flex items-center justify-center w-6 h-6 bg-gray-200 rounded-full ring-0 ring-white dark:bg-gray-700 sm:ring-8 dark:ring-gray-900 shrink-0"
                >
                  <svg
                    class="w-2.5 h-2.5 text-gray-900 dark:text-white"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 16 12"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M1 5.917 5.724 10.5 15 1.5"
                    />
                  </svg>
                </div>
              </div>
              <div class="mt-3">
                <h3 class="font-medium text-gray-900 dark:text-white">
                  Vé điện tử
                </h3>
              </div>
            </li>
          </ol>
        </div>
      </div>
      <div id="infor" class="px-44">
        <div class="pb-7 flex flex-col gap-5">
          <h5 class="font-bold text-2xl text-gray-900">Đặt chỗ của tôi</h5>
          <p class="text-md text-gray-700">Điền thông tin và xem đặt chỗ</p>
          <h5 class="pt-5">Thông tin liên hệ</h5>
        </div>
        <div class="border-solid p-2 border-gray-800">
          <form>
            <div class="grid gap-6 mb-6 md:grid-cols-2">
              <div class="relative">
                <input
                  required
                  type="text"
                  id="default_filled"
                  class="block rounded-t-lg px-2.5 pb-2.5 pt-5 w-full text-sm text-gray-900 bg-gray-50 dark:bg-gray-700 border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                  placeholder=" "
                />
                <label
                  for="default_filled"
                  class="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] start-2.5 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto"
                  >Họ (vd: Nguyen)</label
                >
              </div>
              <div class="relative">
                <input
                  required
                  type="text"
                  id="default_filled"
                  class="block rounded-t-lg px-2.5 pb-2.5 pt-5 w-full text-sm text-gray-900 bg-gray-50 dark:bg-gray-700 border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                  placeholder=" "
                />
                <label
                  for="default_filled"
                  class="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] start-2.5 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto"
                  >Tên Đệm & Tên (vd: Nguyen Cong Can)</label
                >
              </div>
              <div class="relative">
                <input
                  required
                  type="text"
                  id="default_filled"
                  class="block rounded-t-lg px-2.5 pb-2.5 pt-5 w-full text-sm text-gray-900 bg-gray-50 dark:bg-gray-700 border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                  placeholder=" "
                />
                <label
                  for="default_filled"
                  class="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] start-2.5 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto"
                  >Địa chỉ</label
                >
              </div>
              <div class="relative">
                <input
                  required
                  type="text"
                  id="default_filled"
                  class="block rounded-t-lg px-2.5 pb-2.5 pt-5 w-full text-sm text-gray-900 bg-gray-50 dark:bg-gray-700 border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                  placeholder=" "
                />
                <label
                  for="default_filled"
                  class="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] start-2.5 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto"
                  >Số điện thoại</label
                >
              </div>
              <div class="relative">
                <input
                  required
                  type="text"
                  id="default_filled"
                  class="block rounded-t-lg px-2.5 pb-2.5 pt-5 w-full text-sm text-gray-900 bg-gray-50 dark:bg-gray-700 border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                  placeholder=" "
                />
                <label
                  for="default_filled"
                  class="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] start-2.5 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto"
                  >Địa chỉ Email</label
                >
              </div>
              <div class="relative">
                <input
                  required
                  type="date"
                  id="default_filled"
                  class="block rounded-t-lg px-2.5 pb-2.5 pt-5 w-full text-sm text-gray-900 bg-gray-50 dark:bg-gray-700 border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                  placeholder=" "
                />
                <label
                  for="default_filled"
                  class="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] start-2.5 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto"
                  >Ngày sinh</label
                >
              </div>
            </div>

            <!-- <div class="flex items-start mb-6">
              <div class="flex items-center h-5">
                <input
                  id="remember"
                  type="checkbox"
                  value=""
                  class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800"
                  required
                />
              </div>
              <label
                for="remember"
                class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >I agree with the
                <a
                  href="#"
                  class="text-blue-600 hover:underline dark:text-blue-500"
                  >terms and conditions</a
                >.</label
              >
            </div> -->
            <!-- Modal toggle -->

            <button
              class="block text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              type="submit"
              name="redirect"
              @click="initiatePayment"
            >
              Thanh toán
            </button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import axios from "axios";

const apiUrl =
  "http://localhost:8080/smart_travel_api/api/checkout/OnlineCheckoutController.php";

// Example data to send (customize as needed)
const paymentData = {
  amount: 100000, // Amount in VND
  orderId: "your-order-id",
  // ...other payment details
};
const initiatePayment = async () => {
  axios
    .post(apiUrl)
    .then((response) => {
      console.log("Payment request successful:", response.data);
      console.log(response.data.data);
      // Redirect user to VNPAY payment page if redirection is required
      if (response.data.data) {
        // debugger;
        window.location.href = response.data.data;
      } else {
        // Handle successful payment without redirection
      }
    })
    .catch((error) => {
      console.error("Payment request failed:", error);
      // Handle payment errors
    });
};
</script>

<style scoped>
div#booking {
}
div#booking > div {
  /* position: absolute; */
}
</style>
