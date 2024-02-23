<template>
  <div>
    <div class="text-gray-900 bg-gray-200">
      <div class="p-4 flex">
        <h1 class="text-3xl">Người Dùng</h1>
      </div>
      <div class="px-3 py-4 flex justify-center">
        <table class="w-full text-md bg-white shadow-md rounded mb-4">
          <tbody>
            <tr class="border-b">
              <th class="text-left p-3 px-5">ID</th>
              <th class="text-left p-3 px-5">Tên</th>
              <th class="text-left p-3 px-5">Email</th>
              <th></th>
            </tr>
            <tr class="border-b hover:bg-orange-100 bg-gray-100">
              <td class="p-3 px-5">
                <input type="text" value="user.id" class="bg-transparent" />
              </td>
              <td class="p-3 px-5">
                <input type="text" value="user.email" class="bg-transparent" />
              </td>
              <td class="p-3 px-5">
                <input type="text" value="user.email" class="bg-transparent" />
              </td>
              <td class="p-3 px-5 flex justify-end">
                <router-link
                  class="mr-3 text-sm bg-blue-500 hover:bg-blue-700 text-white py-1 px-2 rounded focus:outline-none focus:shadow-outline"
                  :to="{ name: 'edituser' }"
                >
                  Edit
                </router-link>
                <button
                  type="button"
                  class="mr-3 text-sm bg-blue-500 hover:bg-blue-700 text-white py-1 px-2 rounded focus:outline-none focus:shadow-outline"
                >
                  Save</button
                ><button
                  type="button"
                  class="text-sm bg-red-500 hover:bg-red-700 text-white py-1 px-2 rounded focus:outline-none focus:shadow-outline"
                >
                  Delete
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <!-- Hiển thị component con tương ứng với route -->
      <router-view class="mt-56"></router-view>
    </div>
  </div>
</template>

<script setup></script>

<style scoped></style>
