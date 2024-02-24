<template>
  <div>
    <div class="py-10 px-32 flex justify-between gap-32 w-full bg-gray-200 shadow-2xl">
      <div class="">
        <section id="departure_time" class="flex flex-col items-end gap-5">
          <h4 class="text-gray-900 font-bold">17h30, 24 thg 2</h4>
          <section class="flex items-center justify-center">
            <h5 class="text-gray-500 text-md pr-5">1h 35m</h5>
            <span class="inline-block w-1 h-32 rounded-lg bg-gray-300"></span>
          </section>
          <h3 class="text-gray-900 font-bold">21:30, 24 thg 2</h3>
        </section>
      </div>
      <div class="flex gap-5">
        <img
          src="../../image//Cau_Rong_1.jpg"
          class="w-64 object-cover rounded-md"
          alt=""
        />
        <section>
          <h3 class="text-xl font-bold">Da Nang</h3>
          <p>Information</p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum est
            eveniet dolorem sit dolor. Voluptas ea rerum beatae, dolorum minus
            architecto laboriosam maxime tempora incidunt deleniti eius,
            molestias, labore facilis.
          </p>
        </section>
      </div>
    </div>
    <div class="py-10 px-32 flex justify-between gap-32 w-full bg-gray-200 shadow-2xl">
      <div class="">
        <section id="departure_time" class="flex flex-col items-end gap-5">
          <h4 class="text-gray-900 font-bold">17h30, 24 thg 2</h4>
          <section class="flex items-center justify-center">
            <h5 class="text-gray-500 text-md pr-5">1h 35m</h5>
            <span class="inline-block w-1 h-32 rounded-lg bg-gray-300"></span>
          </section>
          <h3 class="text-gray-900 font-bold">21:30, 24 thg 2</h3>
        </section>
      </div>
      <div class="flex gap-5">
        <img
          src="../../image//Cau_Rong_1.jpg"
          class="w-64 object-cover rounded-md"
          alt=""
        />
        <section>
          <h3 class="text-xl font-bold">Da Nang</h3>
          <p>Information</p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum est
            eveniet dolorem sit dolor. Voluptas ea rerum beatae, dolorum minus
            architecto laboriosam maxime tempora incidunt deleniti eius,
            molestias, labore facilis.
          </p>
        </section>
      </div>
    </div>
  </div>
</template>

<script setup></script>

<style scoped>
section#departure_time section span {
  position: relative;
}
section#departure_time section span::before {
  content: "";
  position: absolute;
  width: 10px;
  height: 10px;
  background-color: rgb(207, 207, 207);
  border-radius: 50%;
  top: 0;
  left: 0;
  transform: translateX(-25%);
}
section#departure_time section span::after {
  content: "";
  position: absolute;
  width: 10px;
  height: 10px;
  background-color: rgb(27, 120, 219);
  border-radius: 50%;
  bottom: 0;
  right: 0;
  transform: translateX(25%);
}
</style>
