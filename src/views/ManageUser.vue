<template>
  <div class="text-gray-900 bg-gray-200">
    <div class="p-4 flex">
      <h1 class="text-3xl font-bold text-gray-600">Người Dùng</h1>
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
          <tr
            v-for="(user, index) in displayedUsers"
            :key="index"
            class="border-b hover:bg-orange-100 bg-gray-100"
          >
            <td class="p-3 px-5">
              <input
                v-model="user.user_id"
                type="text"
                disabled="true"
                class="bg-transparent border-none"
              />
            </td>
            <td class="p-3 px-5">
              <input
                v-model="user.user_name"
                type="text"
                disabled="true"
                class="bg-transparent border-none"
              />
            </td>
            <td class="p-3 px-5">
              <input
                v-model="user.email"
                type="text"
                disabled="true"
                class="bg-transparent border-none"
              />
            </td>
            <td class="p-3 px-5 flex justify-end">
              <button
                class="mr-3 text-sm bg-blue-500 hover:bg-blue-700 text-white py-1 px-2 rounded focus:outline-none focus:shadow-outline"
                @click="editUser(user)"
              >
                Edit
              </button>
              <button
                type="button"
                class="text-sm bg-red-500 hover:bg-red-700 text-white py-1 px-2 rounded focus:outline-none focus:shadow-outline"
                @click="deleteUser(user)"
              >
                Delete
              </button>
            </td>

            <!-- class="fixed inset-0 z-50 flex items-center justify-center overflow-auto backdrop-filter backdrop-blur-sm" -->
            <div
              v-if="showModal"
              class="fixed inset-0 flex items-center justify-center overflow-auto bg-opacity-50"
              @click.self="closeModal"
            >
              <div class="bg-white p-8 rounded-lg shadow-lg max-w-md">
                <!-- Nội dung của modal -->
                <h2 class="text-xl font-semibold mb-4">Thông tin người dùng</h2>
                <form
                  @submit.prevent="update"
                  class="grid grid-cols-1 gap-6 mt-8 md:grid-cols-2"
                >
                  <div>
                    <label
                      class="block mb-2 text-sm text-gray-600 dark:text-gray-200"
                      >Họ và tên</label
                    >
                    <input
                      v-model="currentUser.user_name"
                      type="text"
                      class="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                    />
                  </div>

                  <div>
                    <label
                      class="block mb-2 text-sm text-gray-600 dark:text-gray-200"
                      >SĐT</label
                    >
                    <input
                      v-model="currentUser.phone_number"
                      type="text"
                      placeholder="XXX-XX-XXXX-XXX"
                      class="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                    />
                  </div>

                  <div>
                    <label
                      class="block mb-2 text-sm text-gray-600 dark:text-gray-200"
                      >Địa chỉ Email</label
                    >
                    <input
                      disabled="true;"
                      v-model="currentUser.email"
                      type="email"
                      placeholder="canbl@example.com"
                      class="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-gray-200 border border-gray-200 rounded-md dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                    />
                  </div>

                  <div>
                    <label
                      class="block mb-2 text-sm text-gray-600 dark:text-gray-200"
                      >Mật khẩu</label
                    >
                    <input
                      v-model="currentUser.password"
                      type="password"
                      placeholder="12345"
                      class="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                    />
                  </div>

                  <div>
                    <label
                      class="block mb-2 text-sm text-gray-600 dark:text-gray-200"
                      >Ngày sinh</label
                    >
                    <input
                      v-model="currentUser.birth_day"
                      type="date"
                      placeholder="Enter your birthday"
                      class="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                    />
                  </div>

                  <div>
                    <label
                      class="block mb-2 text-sm text-gray-600 dark:text-gray-200"
                      >Giới tính</label
                    >
                    <select
                      v-model="currentUser.gender"
                      id="genders"
                      class="border border-gray-200 px-5 py-3 border-gray-300 text-gray-600 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    >
                      <option
                        v-for="(gender, index) in genders"
                        :key="index"
                        :value="gender"
                      >
                        {{ gender }}
                      </option>
                    </select>
                  </div>
                  <div>
                    <label
                      class="block mb-2 text-sm text-gray-600 dark:text-gray-200"
                      >Địa chỉ</label
                    >
                    <input
                      v-model="user.address"
                      type="text"
                      placeholder="Địa chỉ của bạn"
                      class="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                    />
                  </div>
                  <button
                    type="submit"
                    @click="update()"
                    class="flex items-center justify-between w-full px-6 py-3 text-sm tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-500 rounded-md hover:bg-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50"
                  >
                    <span>Lưu chỉnh sửa</span>

                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="w-5 h-5 rtl:-scale-x-100"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                        clip-rule="evenodd"
                      />
                    </svg>
                  </button>
                </form>

                <!-- Nút để đóng modal -->
                <button
                  class="mt-4 text-sm bg-gray-300 hover:bg-gray-400 text-gray-800 py-1 px-2 rounded focus:outline-none focus:shadow-outline"
                  @click="closeModal"
                >
                  Close
                </button>
              </div>
            </div>
          </tr>
        </tbody>
      </table>
    </div>
    <button
      class="ml-10 text-sm bg-blue-500 hover:bg-blue-700 text-white py-2 px-3 rounded focus:outline-none focus:shadow-outline"
      type="button"
      @click="showModalAdd = true"
    >
      Thêm người dùng
    </button>
    <!-- Pagination -->
    <div class="flex justify-center">
      <button
        class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-l"
        :disabled="currentPage === 1"
        @click="goToPage(currentPage - 1)"
      >
        Previous
      </button>
      <button
        class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4"
        v-for="pageNumber in totalPages"
        :key="pageNumber"
        :class="{ 'bg-blue-700': currentPage === pageNumber }"
        @click="goToPage(pageNumber)"
      >
        {{ pageNumber }}
      </button>
      <button
        class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-r"
        :disabled="currentPage === totalPages"
        @click="goToPage(currentPage + 1)"
      >
        Next
      </button>
    </div>

    <!-- Modal Del -->
    <div
      v-if="showModalDel"
      class="fixed inset-0 z-50 flex items-center justify-center overflow-auto bg-black bg-opacity-50"
      @click.self="closeModalDel"
    >
      <div class="bg-white p-8 rounded-lg shadow-lg max-w-md">
        <!-- Nội dung của modal -->
        <h2 class="text-xl font-semibold mb-4">Xác nhận xoá người dùng</h2>
        <p>Bạn muốn xoá người dùng?</p>
        <p>ID: {{ currentUser.user_id }}</p>
        <p>Email đăng ký: {{ currentUser.email }}</p>
        <p>Tên người dùng: {{ currentUser.user_name }}</p>
        <!-- Nút để xác nhận xoá -->
        <button
          class="mt-4 text-sm bg-red-500 hover:bg-red-700 text-white py-1 px-2 rounded focus:outline-none focus:shadow-outline mr-2"
          @click="deleteItem"
        >
          Xoá
        </button>
        <!-- Nút để trở lại -->
        <button
          class="mt-4 text-sm bg-gray-300 hover:bg-gray-400 text-gray-800 py-1 px-2 rounded focus:outline-none focus:shadow-outline"
          @click="closeModalDel"
        >
          Trở về
        </button>
      </div>
    </div>

    <!-- Modal Add -->
    <div
      v-if="showModalAdd"
      class="fixed inset-0 z-50 flex items-center justify-center overflow-auto bg-black bg-opacity-50"
      @click.self="closeModalAdd"
    >
      <div class="bg-white p-8 rounded-lg shadow-lg max-w-md">
        <!-- Nội dung của modal -->
        <h2 class="text-xl font-semibold mb-4">Thông tin người dùng</h2>
        <form
          @submit.prevent=""
          class="grid grid-cols-1 gap-6 mt-8 md:grid-cols-2"
        >
          <div>
            <label class="block mb-2 text-sm text-gray-600 dark:text-gray-200"
              >Họ và tên</label
            >
            <input
              v-model="user_name"
              type="text"
              class="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
            />
          </div>

          <div>
            <label class="block mb-2 text-sm text-gray-600 dark:text-gray-200"
              >SĐT</label
            >
            <input
              v-model="phone_number"
              type="text"
              placeholder="XXX-XX-XXXX-XXX"
              class="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
            />
          </div>

          <div>
            <label class="block mb-2 text-sm text-gray-600 dark:text-gray-200"
              >Địa chỉ Email</label
            >
            <input
              v-model="email"
              required
              type="email"
              placeholder="canbl@example.com"
              class="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
            />
          </div>

          <div>
            <label class="block mb-2 text-sm text-gray-600 dark:text-gray-200"
              >Mật khẩu</label
            >
            <input
              v-model="password"
              required
              type="password"
              placeholder="12345"
              class="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
            />
          </div>

          <div>
            <label class="block mb-2 text-sm text-gray-600 dark:text-gray-200"
              >Ngày sinh</label
            >
            <input
              v-model="birth_day"
              type="date"
              placeholder="Enter your birthday"
              class="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
            />
          </div>

          <div>
            <label class="block mb-2 text-sm text-gray-600 dark:text-gray-200"
              >Giới tính</label
            >
            <select
              v-model="gender"
              id="countries"
              class="border border-gray-200 px-5 py-3 border-gray-300 text-gray-600 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            >
              <option selected value="1">Nam</option>
              <option value="2">Nữ</option>
              <option value="3">Không đề cập</option>
            </select>
          </div>
          <div>
            <label class="block mb-2 text-sm text-gray-600 dark:text-gray-200"
              >Địa chỉ</label
            >
            <input
              v-model="address"
              type="text"
              placeholder="Địa chỉ của bạn"
              class="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
            />
          </div>
          <button
            type="submit"
            @click="addUser()"
            class="flex items-center justify-between w-full px-6 py-3 text-sm tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-500 rounded-md hover:bg-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50"
          >
            <span>Thêm người dùng</span>

            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="w-5 h-5 rtl:-scale-x-100"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fill-rule="evenodd"
                d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                clip-rule="evenodd"
              />
            </svg>
          </button>
        </form>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref, watch, computed } from "vue";
import axios from "axios";
// http://localhost:8080/smart_travel_api/admin/api/manageUser/showAllUser.php

const users = ref([]);
const currentUser = ref([]);

onMounted(async () => {
  try {
    const response = await axios.get(
      "http://localhost:8080/smart_travel_api/admin/api/manageUser/showAllUser.php"
    );
    users.value = response.data;
    console.log(users.value);
    // debugger;
  } catch (error) {
    console.error(error);
  }
});

let isUpdating = false; // Biến này sẽ kiểm tra xem hàm update đã được gọi hay chưa

async function update() {
  if (isUpdating) return; // Nếu hàm update đã được gọi, không cho phép gọi lại
  isUpdating = true; // Đánh dấu là hàm update đang được gọi

  const formData = new FormData();
  formData.append("user_id", currentUser.value.user_id);
  formData.append("user_name", currentUser.value.user_name);
  formData.append("password", currentUser.value.password);
  formData.append("phone_number", currentUser.value.phone_number);
  formData.append("birth_day", currentUser.value.birth_day);
  formData.append("gender", currentUser.value.gender);
  formData.append("address", currentUser.value.address);
  formData.append("avatar", currentUser.value.avatar);

  try {
    const response = await axios.post(
      "http://localhost:8080/smart_travel_api/admin/api/manageUser/editUser.php",
      formData
    );
    alert("Cập nhật thành công");

    // Cập nhật displayedUsers sau khi nhận phản hồi thành công
    const updatedUserIndex = displayedUsers.value.findIndex(
      (user) => user.user_id === currentUser.value.user_id
    );
    if (updatedUserIndex !== -1) {
      displayedUsers.value[updatedUserIndex] = { ...currentUser.value };
    }
  } catch (error) {
    console.error("Error:", error);
    alert("Cập nhật thất bại. Xin vui lòng thử lại!");
  } finally {
    isUpdating = false; // Đặt lại biến isUpdating sau khi hoàn thành hoặc gặp lỗi
  }
}

const genders = ref(["Nam", "Nữ", "Không đề cập"]);

// Số lượng mục trên mỗi trang
const itemsPerPage = ref(5);

// Trang hiện tại
const currentPage = ref(1);

// Tính tổng số trang dựa trên số lượng mục và số lượng mục trên mỗi trang
const totalPages = computed(() =>
  Math.ceil(users.value.length / itemsPerPage.value)
);

// Tính chỉ mục bắt đầu của mục đầu tiên trên trang hiện tại
const startIndex = computed(() => (currentPage.value - 1) * itemsPerPage.value);

// Lọc và hiển thị danh sách người dùng trên trang hiện tại
const displayedUsers = computed(() =>
  users.value.slice(startIndex.value, startIndex.value + itemsPerPage.value)
);

// Chuyển đến trang cụ thể
const goToPage = (page) => {
  if (page >= 1 && page <= totalPages.value) {
    currentPage.value = page;
  }
};

// Phương thức để chỉnh sửa người dùng
const editUser = (user) => {
  currentUser.value = { ...user }; // Lưu trữ user hiện tại
  showModal.value = true; // Hiển thị modal
};
const deleteUser = (user) => {
  currentUser.value = { ...user }; // Lưu trữ user hiện tại
  showModalDel.value = true; // Hiển thị modal
};

// Sử dụng một biến ref để theo dõi trạng thái của modal
const showModal = ref(false);

// Hàm để đóng modal
const closeModal = () => {
  showModal.value = false;
};

// Sử dụng một biến ref để theo dõi trạng thái của modal
const showModalDel = ref(false);

// Hàm để đóng modal
const closeModalDel = () => {
  showModalDel.value = false;
};

// Hàm để xác nhận xoá
async function deleteItem() {
  // Lấy user_id từ currentUser

  try {
    const response = await axios.delete(
      `http://localhost:8080/smart_travel_api/admin/api/manageUser/deleteUser.php?id=${currentUser.value.user_id}`
    );
    alert("Xoá thành công");
    closeModalDel();

    // Cập nhật displayedUsers sau khi nhận phản hồi thành công
    const updatedUserIndex = displayedUsers.value.findIndex(
      (user) => user.user_id === currentUser.value.user_id
    );
    if (updatedUserIndex !== -1) {
      displayedUsers.value.splice(updatedUserIndex, 1); // Xoá user khỏi displayedUsers
    }
  } catch (error) {
    console.error("Error:", error);
    alert("Xoá thất bại. Xin vui lòng thử lại!");
  }
}

const showModalAdd = ref(false);

// Hàm để đóng modal
const closeModalAdd = () => {
  showModalAdd.value = false;
};

const user_name = ref("");
const email = ref("");
const password = ref("");
const phone_number = ref("");
const birth_day = ref("");
const gender = ref("");
const address = ref("");
const avatar = ref("");

async function addUser() {
  // Kiểm tra email và password có tồn tại không và email có đúng định dạng không
  if (!email.value || !password.value) {
    alert("Vui lòng nhập email và password");
    return;
  }

  // Kiểm tra định dạng email
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email.value)) {
    alert("Email không đúng định dạng");
    return;
  }

  const formData = new FormData();
  formData.append("user_name", user_name.value);
  formData.append("email", email.value);
  formData.append("password", password.value);
  formData.append("phone_number", phone_number.value);
  formData.append("birth_day", birth_day.value);
  formData.append("gender", gender.value);
  formData.append("address", address.value);
  formData.append("avatar", avatar.value);

  try {
    const response = await axios.post(
      "http://localhost:8080/smart_travel_api/admin/api/manageUser/addUser.php",
      formData
    );
    // // Nếu thêm thành công, thêm dữ liệu mới vào danh sách hiển thị
    // const newUser = {
    //   user_id: response.data.user_id, // Giả sử phản hồi trả về user_id
    //   user_name: user_name.value,
    //   password: password.value,
    //   phone_number: phone_number.value,
    //   birth_day: birth_day.value,
    //   gender: gender.value,
    //   address: address.value,
    //   avatar: avatar.value
    // };
    // displayedUsers.value.push(newUser); // Giả sử displayedUsers là một ref hoặc reactive array

    alert("Thêm thành công");
    // Đặt các giá trị về rỗng sau khi thêm thành công
    closeModalAdd();
    user_name.value = "";
    password.value = "";
    phone_number.value = "";
    birth_day.value = "";
    gender.value = "";
    address.value = "";
    avatar.value = "";
  } catch (error) {
    console.error("Error:", error);
    alert("Email đã tồn tại");
  }
}
</script>

<style scoped></style>
