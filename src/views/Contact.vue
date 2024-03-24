<template>
  <div>
    <Services />

    <div id="contact" class="pb-28">
      <h2 class="text-gray-800 font-bold space-x-4 text-2xl pb-12">
        Liên Hệ Với Chúng Tôi
      </h2>
      <div class="grid lg:grid-cols-2 md:grid-cols-1">
        <div>
          <p class="text-gray-500 pb-16 mr-7">
            JustChill.vn luôn sẵn sàng hỗ trợ bạn lên kế hoạch cho chuyến đi lý
            tưởng. Nếu bạn có bất kỳ câu hỏi, thắc mắc nào về các điểm đến, dịch
            vụ đặt phòng, đặt vé máy bay hoặc cần tư vấn thêm về hành trình,
            đừng ngần ngại liên lạc với chúng tôi. Bạn có thể liên hệ qua.
          </p>
          <section class="pb-6">
            <h4
              class="bg-gray-800 text-gray-100 font-bold inline-block py-1 px-4 rounded-xl"
            >
              ADDRESS:
            </h4>
            <p class="text-gray-500 pl-5 pt-3">
              54 Nguyễn Lương Bằng, thành phố Đà Nẵng
            </p>
          </section>
          <section class="pb-6">
            <h4
              class="bg-gray-800 text-gray-100 font-bold inline-block py-1 px-4 rounded-xl"
            >
              PHONE:
            </h4>
            <p class="text-gray-500 pl-5 pt-3">+84 912 313 283</p>
          </section>
          <section class="pb-6">
            <h4
              class="bg-gray-800 text-gray-100 font-bold inline-block py-1 px-4 rounded-xl"
            >
              EMAIL:
            </h4>
            <p class="text-gray-500 pl-5 pt-3">canbl2002@gmail.com</p>
          </section>
        </div>
        <div class="grid grid-cols-2 gap-2">
          <input
            type="text"
            class="bg-gray-100 col-span-2 h-14 px-5 border-b-transparent border-b-2 hover:border-b-gray-800"
            placeholder="Your Name"
          />
          <input
            type="text"
            class="bg-gray-100 col-span-1 h-14 mr-3 px-5 border-b-transparent border-b-2 hover:border-b-gray-800"
            placeholder="Your Name"
          />
          <input
            type="text"
            class="bg-gray-100 col-span-1 h-14 ml-3 px-5 border-b-transparent border-b-2 hover:border-b-gray-800"
            placeholder="Your Name"
          />
          <textarea
            class="bg-gray-100 col-span-2 h-32 pl-5 pt-3 border-b-transparent border-b-2 hover:border-b-gray-800"
            placeholder="Massage"
          ></textarea>
          <button
            class="bg-gray-800 text-gray-100 col-span-1 w-40 h-16 rounded-2xl"
          >
            SEND
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import Services from "./Services.vue";
</script>

<style scoped>
div#contact {
  margin-top: 250px;
  padding-left: 165px;
  padding-right: 165px;
}
</style>
