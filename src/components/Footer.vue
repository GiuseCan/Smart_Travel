<template>
  <div
    class="bg-[url('../../image/footer_1.jpg.webp')] w-full object-cover pb-10"
  >
    <div class="pt-32">
      <h3 class="font-bold text-3xl text-gray-100 text-center">Subscribe to our newsletter to get the latest trends & news</h3>
      <h5 class="pt-3 text-gray-100 text-center">Join our database NOW!</h5>
    </div>

    <div>
      <div
        id="form_infor"
        class=" mt-32 flex justify-center gap-5">
        <input
          class="bg-gray-100 bg-opacity-20 input w-96 p-4 border-b-transparent border-b-2 hover:border-b-gray-200"
          type="text"
          placeholder="Name"
        />
        <input
          class="bg-gray-100 bg-opacity-20 input w-96 -4 border-b-transparent border-b-2 hover:border-b-gray-200"
          type="text"
          placeholder="Your e-mail"
        />
        <div class="buttons">
          <button
            class=" bg-gray-100 bg-opacity-20 button py-4 px-10 rounded-2xl is-info text-gray-100 border-b-transparent border-b-2 hover:border-b-gray-200"
          >
            SUBSCRIBE
          </button>
        </div>
      </div>
    </div>

    <div class="flex justify-around px-56 pt-32">
        <div class="flex flex-col items-center gap-3">
            <img class="w-16 h-16" src="https://preview.colorlib.com/theme/travello/images/sign.svg" alt="icon">
            <h4 class="my-3 text-gray-100 font-bold text-xl">GIVE US A CALL</h4>
            <p class="text-gray-100">Office Landline: +44 5567 32 664 567</p>
            <p class="text-gray-100">Mobile: +44 5567 89 3322 332</p>
        </div>
        <div class="flex flex-col items-center gap-3">
            <img class="w-16 h-16" src="https://preview.colorlib.com/theme/travello/images/trekking.svg" alt="icon">
            <h4 class="my-3 text-gray-100 font-bold text-xl">COME & DROP BY</h4>
            <p class="text-gray-100">4124 Barnes Street, Sanford,</p>
            <p class="text-gray-100">FL 32771</p>
        </div>
        <div class="flex flex-col items-center gap-3">
            <img class="w-16 h-16" src="https://preview.colorlib.com/theme/travello/images/around.svg" alt="icon">
            <h4 class="my-3 text-gray-100 font-bold text-xl">SEND US A MESSAGE</h4>
            <p class="text-gray-100">youremail@gmail.com</p>
            <p class="text-gray-100">Office@yourbusinessname.com</p>
        </div>
        
    </div>
  </div>
</template>

<style setup></style>
