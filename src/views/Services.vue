<template>
  <div>
    <div class="hero-body flex flex-wrap justify-center  mt-36">
      <h2 class="title font-bold text-gray-100 text-7xl drop-shadow-2xl">
        Trải nghiệm cùng chúng tôi
      </h2>
      <div class="p-16 mt-14 rounded-lg bg-black-rgba py-10 px-10">
        <form @submit.prevent="submitForm">
        <div
          id="form_infor"
          class="flex flex-wrap justify-center gap-3 p-12 rounded-lg bg-slate-50"
        >
          <div class="select is-link">
            <select class="p-3 px-7 rounded-lg bg-slate-200 text-gray-700" name="noidi" v-model="formData.noidi">
              <option>Từ</option>
              <option>Da Nang</option>
              <option>Hoi An</option>
              <option>Tam Ky</option>
            </select>
          </div>
          <div class="select is-link">
            <select class="p-3 px-7 rounded-lg bg-slate-200 text-gray-700" name="noiden" v-model="formData.noiden">
              <option>Đến</option>
              <option>Da Nang</option>
              <option>Hoi An</option>
              <option>Tam Ky</option>
            </select>
          </div>
          <input
            class="input p-3 px-7 rounded-lg bg-slate-200 text-gray-700"
            type="date"
            placeholder="Ngày khởi hành" name="ngaykhoihanh" v-model="formData.ngaykhoihanh"
          />
          <input
            class="p-3 px-7 rounded-lg bg-slate-200 text-gray-700"
            type="date"
            placeholder="Ngày kết thúc" name="ngayketthuc" v-model="formData.ngayketthuc"
          />
          <input
            class="p-3 px-7 rounded-lg bg-slate-200 text-gray-700"
            type="text"
            placeholder="Ngân sách (VND)" name="ngansach" v-model="formData.ngansach"
          />
          <div class="select is-link">
            <select class="p-3 px-7 rounded-lg bg-slate-200 text-gray-700" name="sothich" v-model="formData.sothich"> 
              <option>Sở thích</option>
              <option>With options</option>
            </select>
          </div>
          <button @click="submitForm" type="submit" class="p-3 px-7 font-bold rounded-lg bg-slate-800 text-gray-50"> Tạo lịch</button>
        </div>
      </form>
      </div>
    </div>
    <router-view> </router-view>
  </div>
</template>

<!-- <script setup>
// import Footer from "../components/Footer.vue";

</script> -->


<script setup>
import { ref } from 'vue';
import axios from 'axios';

// Khởi tạo dữ liệu
const formData = ref({
  noidi:'',
  noiden:'',
  ngaykhoihanh:'',
  ngayketthuc:'',
  ngansach:'',
  sothich:''

});
// const options = {
//   method: 'POST',
//   headers: { 'content-type': 'application/form-data' },
//   data: formData,
//   url: 'http://localhost:3000/src/Api/ServicesApi.php',
// };
// axios(options);

// Phương thức gửi form
const submitForm = async () => {
  try {
    const response = await axios.post('http://localhost:3000/src/Api/ServicesApi.php', formData.value);
    console.log(response.data)
    // Xử lý phản hồi từ server nếu cần
  } catch (error) {
    console.error(error);
  }
};
</script>
<style scoped>
</style>
