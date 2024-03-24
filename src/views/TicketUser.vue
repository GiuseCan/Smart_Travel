<template>
  <div>
    <Navbar class="bg-blue-400 pb-7" />

    <div class="flex justify-center gap-20">
      <img
        width="500px"
        src="https://th.bing.com/th/id/R.14b2b51e6630f397681dc78b9d471890?rik=Mx9k0YKoEup1Ag&pid=ImgRaw&r=0"
        alt=""
      />
      <div class="pb-7 flex flex-col gap-5">
        <h5 class="font-bold text-2xl text-gray-900">
          Thông tin các vé đã đặt
        </h5>
        <div class="overflow-x-auto">
          <table class="min-w-full divide-y divide-gray-200">
            <thead class="bg-gray-50">
              <tr>
                <th
                  scope="col"
                  class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Id vé
                </th>
                <th
                  scope="col"
                  class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Ngày xuất phát
                </th>
                <th
                  scope="col"
                  class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Ngày về
                </th>
                <th
                  scope="col"
                  class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Tổng chi phí
                </th>
              </tr>
            </thead>
            <tbody class="bg-white divide-y divide-gray-200">
              <tr v-for="(plan, index) in plans" :key="index">
                <td class="px-6 py-4 whitespace-nowrap">
                  {{ plan.id_ticket }}
                </td>
                <td class="px-6 py-4 whitespace-nowrap">
                  {{ plan.time_start }}
                </td>
                <td class="px-6 py-4 whitespace-nowrap">{{ plan.time_end }}</td>

                <td class="px-6 py-4 whitespace-nowrap">
                  {{ formatCurrency(plan.total_amount) }} VND
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
    <h2 class="font-bold pt-10 text-xl text-center mb-10">
      Xem các thông tin chi tiết tại email nhận vé.
    </h2>
    <Footer />
  </div>
</template>

<script setup>
import Footer from "../components/Footer.vue";
import Navbar from "../components/Navbar.vue";
import { useRoute } from "vue-router";
import { onMounted, ref, computed, watch, watchEffect } from "vue";
import axios from "axios";

const route = useRoute();
const plans = ref("");
const locations = ref([]);
const departure = ref("");
const destination = ref("");
const fee_travel = ref("");
const visit_list = ref([]);
const visits = ref([]);
console.log(locations.value);
console.log(visits.value);

onMounted(async () => {
  await axios
    .get(
      `http://localhost:8080/smart_travel_api/api/user/planBooked.php?id=${route.params.id}`
    )
    .then(({ data }) => {
      plans.value = data;
      // console.log(plan.value);
      // console.log(plan.value.id_visits);
      // const id_visits_array = ref(plan.value.id_visits[0].split(","));
      // console.log(id_visits_array.value);

      // const formData = new FormData();
      // formData.append("visit_ids", id_visits_array.value);
      // axios
      //   .get(
      //     `http://localhost:8080/smart_travel_api/api/location/showDeparture_Destination.php?id=${plan.value.id_ticket}`
      //   )
      //   .then(({ data }) => {
      //     locations.value = data;
      //     console.log(locations.value);
      //   });

      // axios
      //   .post(
      //     "http://localhost:8080/smart_travel_api/api/location/VisitController.php",
      //     formData
      //   )
      //   .then(({ data }) => {
      //     visit_list.value = data;
      //     console.log(visit_list.value);
      //   });
    });
});

watchEffect(() => {
  // locations.value =;
  // departure.value = locations.value.departure_name;
  // destination.value = locations.value.destination_name;
  // fee_travel.value = formatCurrency(locations.value.fee);
  // fee_travel.value = formatCurrency(locations.value.fee);
  console.log(plans.value);
});

function formatCurrency(number) {
  // Chuyển số nguyên thành chuỗi và đảm bảo số tiền là số dương
  const positiveNumber = Math.abs(number).toString();

  // Tách từng chữ số của số tiền
  const parts = positiveNumber.split("");

  // Tạo mảng để chứa chuỗi kết quả
  const result = [];

  // Duyệt qua từng chữ số và thêm dấu chấm ngăn cách sau mỗi 3 chữ số từ phải sang trái
  for (let i = parts.length - 1; i >= 0; i--) {
    result.unshift(parts[i]);
    if ((parts.length - i) % 3 === 0 && i !== 0) {
      result.unshift(".");
    }
  }

  // Nếu số ban đầu là số âm, thêm dấu trừ vào chuỗi kết quả
  if (number < 0) {
    result.unshift("-");
  }

  // Kết hợp các phần tử của mảng kết quả thành một chuỗi và trả về
  return result.join("");
}
</script>
