<template>
  <div>
    <div class="hero-body mt-12 flex flex-wrap justify-center">
      <h2 class="title font-bold text-gray-100 text-7xl drop-shadow-2xl">
        Trải nghiệm cùng chúng tôi
      </h2>
      <div
        id="form_infor"
        class="flex gap-3 mt-20 rounded-lg bg-black-rgba py-10 px-10"
      >
        <div class="select is-link">
          <select class="p-1 px-5 rounded-sm text-gray-400">
            <option>Từ</option>
            <option>Da Nang</option>
            <option>Hoi An</option>
            <option>Tam Ky</option>
          </select>
        </div>
        <div class="select is-link">
          <select class="p-1 px-5 rounded-sm text-gray-400">
            <option>Đến</option>
            <option>Da Nang</option>
            <option>Hoi An</option>
            <option>Tam Ky</option>
          </select>
        </div>
        <input
          class="input w-32 rounded-md p-1"
          type="date"
          placeholder="Ngày khởi hành"
        />
        <input
          class="input w-32 rounded-md p-1"
          type="date"
          placeholder="Ngày kết thúc"
        />
        <input
          class="input w-32 rounded-md p-1"
          type="text"
          placeholder="Ngân sách"
        />
        <div class="select is-link">
          <select class="p-1 px-5 rounded-sm text-gray-400">
            <option>Sở thích</option>
            <option>With options</option>
          </select>
        </div>
        <router-link
          :to="{ name: 'services' }"
          class="button py-1 px-3 rounded-md is-info bg-slate-700 text-gray-100"
        >
          Lên lịch
        </router-link>
      </div>
    </div>
    
    
    <!-- <Footer class="mt-6"/> -->

  </div>
</template>

<script setup>
import Footer from "../components/Footer.vue";
</script>
