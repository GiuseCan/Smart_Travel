import axiosClient from "@/axiosClient";

export function Login({commit}, email, password){
  axiosClient.get(`api/user/login.php?email=${email},password=${password}`)
  .then(({data}) => {
    debugger;
    commit('setLogin', data.account)
  })
}