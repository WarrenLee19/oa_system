import axios from 'axios'
import Vue from 'vue'
// import router from '../src/router/index'

const http=axios.create({
    baseURL:'http://localhost:9988/'
})
//拦截
http.interceptors.request.use(function (config) {
    // Do something before request is sent
//     if(localStorage.token){
//     config.headers.Authorization='Bearer '+localStorage.token 
// }
    return config;
  }, function (error) {
    // Do something with request error
    return Promise.reject(error);
  })
//全局捕获
    http.interceptors.response.use(res=>{
        return res
    },err=>{
        if (err.response.data.message) {
            Vue.prototype.$message({
              type: 'error',
              message: err.response.data.message
            })
            
            // if (err.response.status === 401) {
            //     setTimeout(()=>{
            //   router.push('/login')},1000
            //     )
            // }
          }
        return Promise.reject(err)
    })
export default http 