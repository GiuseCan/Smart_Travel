<template>
  <div>
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
    <div class="flex justify-center gap-20 items-center">
      <img
        width="600px"
        src="https://th.bing.com/th/id/R.14b2b51e6630f397681dc78b9d471890?rik=Mx9k0YKoEup1Ag&pid=ImgRaw&r=0"
        alt=""
      />
      <div class="pb-7 flex flex-col gap-5">
        <h5 class="font-bold text-2xl text-gray-900">Thông tin vé online</h5>
        <h4 class="text-lg">ID vé: {{ id_ticket }}</h4>
        <h5 class="text-lg">Ngày xuất phát: {{ date_start }}</h5>
        <h5 class="text-lg">Ngày về: {{ date_end }}</h5>
        <h5 class="text-lg">Tổng chi phí: {{ formatCurrency(total) }}</h5>
        <h2 class="font-bold pt-10 text-xl">
          Xem các thông tin chi tiết tại email nhận vé.
        </h2>
      </div>
    </div>
    <Footer />
  </div>
</template>

<script setup>
import Footer from "../components/Footer.vue";
import { onMounted, ref, watch } from "vue";
import axios from "axios";

const storedUser = localStorage.getItem("user");
const user = ref(storedUser ? JSON.parse(storedUser) : {});

// Kiểm tra xem user có tồn tại và có giá trị hợp lệ không
const id_user = ref(
  user.value && user.value.user && user.value.user.user_id
    ? user.value.user.user_id
    : ""
);

const storedPlan = localStorage.getItem("plan");
const plan = ref(storedPlan ? JSON.parse(storedPlan) : {});
console.log(plan.value);
const emailBooking = ref(localStorage.getItem("emailBooking"));

const id_ticket = ref(plan.value.id_ticket);
const date_start = ref(plan.value.dateStart);
const date_end = ref(plan.value.dateEnd);
const total = ref(plan.value.total);
// const email = ref(plan.value.email);
// const id_visits = ref(plan.value.visitList);
const id_visits = ref(plan.value.visitList.join(",")); // Chuyển mảng thành chuỗi

// console.log(id_visits.value);
// console.log(emailBooking.value.replace(/^"(.*)"$/, '$1'));

onMounted(async () => {
  const formDataItinerary = new FormData();
  formDataItinerary.append("id_user", id_user.value);
  formDataItinerary.append("id_ticket", id_ticket.value);
  formDataItinerary.append("date_start", date_start.value);
  formDataItinerary.append("date_end", date_end.value);
  formDataItinerary.append("total", total.value);
  formDataItinerary.append("id_visits", id_visits.value);
  formDataItinerary.append("paid", 1);
  formDataItinerary.append(
    "mailBooking",
    emailBooking.value.replace(/^"(.*)"$/, "$1")
  );

  await axios
    .post(
      "http://localhost:8080/smart_travel_api/api/checkout/user_booking.php",
      formDataItinerary
    )
    .then((response) => {
      // Hiển thị thông báo từ server nếu có
      if (response.data && response.data.message) {
        alert(response.data.message);
      }
    })
    .catch((error) => {
      console.error("Error:", error);
    });
});

function formatCurrency(total) {
  // Chuyển đổi số thành chuỗi và tách thành mảng các ký tự
  const strTotal = total.toString().split("");
  // Tạo mảng mới để lưu trữ chuỗi kết quả
  let result = [];
  // Biến đếm số ký tự
  let count = 0;

  // Lặp qua từng ký tự trong chuỗi
  for (let i = strTotal.length - 1; i >= 0; i--) {
    // Thêm ký tự vào đầu mảng kết quả
    result.unshift(strTotal[i]);
    // Tăng biến đếm số ký tự
    count++;
    // Nếu đã thêm 3 ký tự và chưa phải là ký tự cuối cùng
    if (count % 3 === 0 && i !== 0) {
      // Thêm dấu chấm vào đầu mảng kết quả
      result.unshift(".");
    }
  }

  // Ghép mảng kết quả thành chuỗi và thêm ký tự VND vào cuối
  return result.join("") + " VND";
}
</script>
