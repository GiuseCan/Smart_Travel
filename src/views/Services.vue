<template>
  <div>
    <div class="hero-body mt-12 flex flex-wrap justify-center">
      <h2 class="title font-bold text-gray-100 text-8xl drop-shadow-2xl">
        Let us take you away
      </h2>
      <div
        id="form_infor"
        class="flex gap-3 mt-20 rounded-lg bg-black-rgba py-10 px-10"
      >
        <input
          class="input w-44 rounded-md p-1"
          type="text"
          placeholder="City"
        />
        <input
          class="input w-32 rounded-md p-1"
          type="text"
          placeholder="Departure"
        />
        <input
          class="input w-32 rounded-md p-1"
          type="text"
          placeholder="Arrival"
        />
        <input
          class="input w-32 rounded-md p-1"
          type="text"
          placeholder="Budget"
        />
        <div class="select is-link">
          <select class="p-1 px-5 rounded-sm">
            <option>Choose Preference</option>
            <option>With options</option>
          </select>
        </div>
        <div class="buttons">
          <button
            class="button py-1 px-3 rounded-md is-info bg-slate-700 text-gray-100"
          >
            Search
          </button>
        </div>
      </div>
    </div>
    <!-- <Footer class="mt-6"/> -->
  </div>
</template>

<script setup>
import Footer from "./Footer.vue";

</script>
