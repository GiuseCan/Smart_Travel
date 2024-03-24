<template>
  <div>
    <div class="p-4 mb-2 flex">
      <h1 class="text-3xl font-bold text-gray-600">Thống kê, doanh thu</h1>
    </div>
    <div>
      <div>
        <h3 class="font-bold text-xl text-gray-600 pl-10">
          Biểu đồ bán vé tại các điểm đến
        </h3>
        <canvas
          class="md:max-w-[1200px] md:max-h-[600px]"
          id="myChartTicket"
        ></canvas>
      </div>
      <div class="bg-gray-100">
        <h3 class="font-bold text-xl text-gray-600 pl-10 pt-10">
          Biểu đồ doanh thu theo tháng
        </h3>

        <canvas
          class="md:max-w-[1200px] md:max-h-[600px]"
          id="myChartBudget"
        ></canvas>
      </div>
    </div>
  </div>
</template>

<script setup>
import Chart from "chart.js/auto";
import { onMounted, ref, watch, computed } from "vue";
import axios from "axios";

const tickets = ref([]);
const labels_ticket = ref([]);
const labelNames = ref([]);
const amountData = ref([]);
const bookings = ref([]);
const destinations = ref([]);
const tickedBooked = ref([]);
const BudgetByMonth = ref(Array.from({ length: 12 }, () => 0));

// ------------------------- Phần tính toán dữ liệu --------------------------
onMounted(async () => {
  try {
    const ticket_list = await axios.get(
      "http://localhost:8080/smart_travel_api/admin/api/manageTicket/showAllTicket.php"
    );
    tickets.value = ticket_list.data;
    console.log(tickets.value);

    tickets.value.forEach((ticket) => {
      const index = labels_ticket.value.findIndex(
        (label) => label.destination_id === ticket.destination_id
      );

      if (index === -1) {
        labels_ticket.value.push({
          destination_id: ticket.destination_id,
          amount_ticker: ticket.amount,
          destination_name: ticket.destination,
        });
      } else {
        labels_ticket.value[index].amount_ticker += ticket.amount;
      }
    });
    try {
      const booking_list = await axios.get(
        "http://localhost:8080/smart_travel_api/admin/api/manageBooking/showAllBooking.php"
      );
      bookings.value = booking_list.data;
      console.log(bookings.value);
      // debugger;
    } catch (error) {
      console.error(error);
    }
    try {
      const destinationList = await axios.get(
        "http://localhost:8080/smart_travel_api/admin/api/manageVisit/showAllDestination.php"
      );
      destinations.value = destinationList.data;
      console.log(destinations.value);
    } catch (error) {
      console.error(error);
    }

    // Tính toán dữ liệu và gán cho labelNames và amountData sau khi tickets đã được xử lý
    labelNames.value = labels_ticket.value.map(
      (label) => label.destination_name
    );
    amountData.value = labels_ticket.value.map((label) => label.amount_ticker);
    console.log(labelNames.value);
    console.log(amountData.value);

    // Khởi tạo mảng tickedBooked với các phần tử ban đầu bằng 0
    tickedBooked.value = Array(labelNames.value.length).fill(0);

    // Lặp qua mảng bookings
    for (let i = 0; i < bookings.value.length; i++) {
      // console.log(bookings.value[i].destination);
      for (let j = 0; j < labels_ticket.value.length; j++) {
        // console.log(labels_ticket.value[j].destination_name);
        if (
          labels_ticket.value[j].destination_name ==
          bookings.value[i].destination
        ) {
          tickedBooked.value[j]++;
        }
      }
    }
    console.log(tickedBooked.value);

    for (let i = 0; i < bookings.value.length; i++) {
      const month = bookings.value[i].time_start.split("-")[1];
      const BudgetMonth = bookings.value[i].total_amount;
      console.log(month);
      console.log(BudgetMonth);
      for (let j = 0; j < BudgetByMonth.value.length; j++) {
        if (month == j) {
          BudgetByMonth.value[j] += BudgetMonth;
        }
      }
    }
    console.log(BudgetByMonth.value);

    createChart();
    createChartBudget();
  } catch (error) {
    console.error(error);
  }
});

// Hàm tạo biểu đồ
function createChart() {
  // console.log(tickedBooked.value);
  const data = {
    labels: labelNames.value,
    datasets: [
      {
        label: "Tổng số vé",
        data: amountData.value,
        backgroundColor: [
          "rgba(255, 99, 132, 0.6)", // Đỏ
          "rgba(54, 162, 235, 0.6)", // Xanh dương
          "rgba(255, 205, 86, 0.6)", // Vàng
          "rgba(75, 192, 192, 0.6)", // Xanh lá cây
          "rgba(153, 102, 255, 0.6)", // Tím
          "rgba(255, 159, 64, 0.6)", // Cam
          "rgba(201, 203, 207, 0.6)", // Xám
          "rgba(255, 138, 101, 0.6)", // Đỏ cam
          "rgba(75, 192, 192, 0.6)", // Xanh lá cây
          "rgba(139, 195, 74, 0.6)", // Xanh lá
          "rgba(255, 204, 0, 0.6)", // Vàng
        ],
        borderColor: [
          "rgb(255, 99, 132)", // Đỏ
          "rgb(54, 162, 235)", // Xanh dương
          "rgb(255, 205, 86)", // Vàng
          "rgb(75, 192, 192)", // Xanh lá cây
          "rgb(153, 102, 255)", // Tím
          "rgb(255, 159, 64)", // Cam
          "rgb(201, 203, 207)", // Xám
          "rgb(255, 138, 101)", // Đỏ cam
          "rgb(75, 192, 192)", // Xanh lá cây
          "rgb(139, 195, 74)", // Xanh lá
          "rgb(255, 204, 0)", // Vàng
        ],
        borderWidth: 1,
      },
      {
        label: "Số vé bán được",
        data: tickedBooked.value,
        backgroundColor: [
          "rgba(255, 99, 132, 0.6)", // Đỏ
          "rgba(54, 162, 235, 0.6)", // Xanh dương
          "rgba(255, 205, 86, 0.6)", // Vàng
          "rgba(75, 192, 192, 0.6)", // Xanh lá cây
          "rgba(153, 102, 255, 0.6)", // Tím
          "rgba(255, 159, 64, 0.6)", // Cam
          "rgba(201, 203, 207, 0.6)", // Xám
          "rgba(255, 138, 101, 0.6)", // Đỏ cam
          "rgba(75, 192, 192, 0.6)", // Xanh lá cây
          "rgba(139, 195, 74, 0.6)", // Xanh lá
          "rgba(255, 204, 0, 0.6)", // Vàng
        ],
        borderColor: [
          "rgb(255, 99, 132)", // Đỏ
          "rgb(54, 162, 235)", // Xanh dương
          "rgb(255, 205, 86)", // Vàng
          "rgb(75, 192, 192)", // Xanh lá cây
          "rgb(153, 102, 255)", // Tím
          "rgb(255, 159, 64)", // Cam
          "rgb(201, 203, 207)", // Xám
          "rgb(255, 138, 101)", // Đỏ cam
          "rgb(75, 192, 192)", // Xanh lá cây
          "rgb(139, 195, 74)", // Xanh lá
          "rgb(255, 204, 0)", // Vàng
        ],
        borderWidth: 1,
      },
    ],
  };

  const config = {
    type: "bar",
    data: data,
    options: {
      scales: {
        y: {
          beginAtZero: true,
        },
      },
    },
  };

  const myChart_ticket = new Chart(
    document.getElementById("myChartTicket"),
    config
  );
}
function createChartBudget() {
  const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December' ];
  const dataBudget = {
    labels: labels,
    datasets: [
      {
        label: "Doanh thu theo tháng",
        data: BudgetByMonth.value,
        fill: false,
        borderColor: "rgb(75, 192, 192)",
        tension: 0.1,
      },
    ],
  };
  const configBudget = {
    type: "line",
    data: dataBudget,
  };
  const myChart_budget = new Chart(
    document.getElementById("myChartBudget"),
    configBudget
  );
}
</script>

<style scoped></style>
