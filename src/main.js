import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
// import Stripe from '@stripe/stripe-js'

// // Khởi tạo Stripe với khóa API
// const stripe = new Stripe('pk_test_51OrGTBK6mbXyDbQaqmbGy3vd2uK2xMRVJjxj2BleQ8w5QG3Pogpq3ms9wwnH7Q34MetqXo7ay3QUyW2b6lFtFrKQ00syy27a6y');
// // Lưu trữ Stripe vào Vue instance
// Vue.prototype.$stripe = stripe

const app = createApp(App)
app.use(createPinia())
app.use(router)


app.mount('#app')
