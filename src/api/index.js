let url = 'https://6vvna2cs.api.lncld.net';
import axios from 'axios';
// http request 拦截器
axios.interceptors.request.use(
    config => {
        // if (localStorage.getItem('key')) {  // 判断是否存在token，如果存在的话，则每个http header都加上token
        //     config.headers.Authorization = `token ${localStorage.getItem('key')}`;
        // }
        return config;
    },
    err => {
        return Promise.reject(err);
    }
)

// http response 拦截器
axios.interceptors.response.use(
    response => {
		// router.replace({
  //           path: '/user',
  //           query: {redirect: router.currentRoute.fullPath}
  //       })
        return response;
    },
    error => {
        if (error.response) {
            
        }
        return Promise.reject(error.response.data)   // 返回接口返回的错误信息
    }
)

export default {
	// 登录接口
	login(options, config) {
		return axios.post(url + '/1.1/login', options, config)
	}
}