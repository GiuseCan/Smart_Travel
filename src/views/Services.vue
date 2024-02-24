<template>
  <div>
    <div class="hero-body flex flex-wrap justify-center  mt-36">
      <h2 class="title font-bold text-gray-100 text-7xl drop-shadow-2xl">
        Trải nghiệm cùng chúng tôi
      </h2>
      <div class="p-16 mt-14 rounded-lg bg-black-rgba py-10 px-10">
        <div
          id="form_infor"
          class="flex flex-wrap justify-center gap-3 p-12 rounded-lg bg-slate-50"
        >
          <div class="select is-link">
            <select class="p-3 px-7 rounded-lg bg-slate-200 text-gray-700">
              <option>Từ</option>
              <option>Da Nang</option>
              <option>Hoi An</option>
              <option>Tam Ky</option>
            </select>
          </div>
          <div class="select is-link">
            <select class="p-3 px-7 rounded-lg bg-slate-200 text-gray-700">
              <option>Đến</option>
              <option>Da Nang</option>
              <option>Hoi An</option>
              <option>Tam Ky</option>
            </select>
          </div>
          <input
            class="input p-3 px-7 rounded-lg bg-slate-200 text-gray-700"
            type="date"
            placeholder="Ngày khởi hành"
          />
          <input
            class="p-3 px-7 rounded-lg bg-slate-200 text-gray-700"
            type="date"
            placeholder="Ngày kết thúc"
          />
          <input
            class="p-3 px-7 rounded-lg bg-slate-200 text-gray-700"
            type="text"
            placeholder="Ngân sách (VND)"
          />
          <div class="select is-link">
            <select class="p-3 px-7 rounded-lg bg-slate-200 text-gray-700">
              <option>Sở thích</option>
              <option>With options</option>
            </select>
          </div>
          <router-link
            :to="{ name: 'render_plan' }"
            class="button p-3 px-7 font-bold rounded-lg bg-slate-800 text-gray-50"
          >
            Tạo Lịch
          </router-link>
        </div>
      </div>
    </div>
    <router-view> </router-view>
  </div>
</template>

<script setup>
import Footer from "../components/Footer.vue";
</script>

<style scoped>
/* div#form_infor {
  position: relative;
}
div#form_infor::after {
  color: rgb(70,46,46);
  font-size: 20px;
  content: "Lập lịch trình";
  display: inline-block;
  width: 300px;
  height: 80px;
  position: absolute;
  top: -20%;
  transform: translateY(-50%);
  background-color: rgb(248,250,252);
  border-radius: 10px;
  padding-top: 10px;
  text-align: center;
} */
</style>
