// 引入封装的api 
import api from '../index';
// 引入URL
import { URL } from '../requestUrl';
const { loginUrl, userUrl,getBasketballData,getStudyData,getClassData,getCharacterData,getCarData } = URL
//下面是简写的形式
// getXXX 自定义的接口名字
export const goLogin = (params) => api.get(`${loginUrl}`, params);
export const getUser = (data) => api.post(`${userUrl}`, data);
export const basketballData = (data) => api.post(`${getBasketballData}`, data);
export const studyData = (data) => api.post(`${getStudyData}`, data);
export const classData = (data) => api.post(`${getClassData}`, data);
export const characterData = (data) => api.post(`${getCharacterData}`, data);
export const carData = (data) => api.post(`${getCarData}`, data);


// 下面是详细的写法
// export const xxxx = (params) => api({
//     url: '', // 请求地址
//     method: 'post', // 请求方式
//     // data: params, // (一般post请求，我们习惯使用 data属性来传参)
//     params: params //(一般get请求，我们习惯使用params属性来传参）
//     // 注意：data，和 params 两个属性传参使用，并不是固定的，也可以调换使用。
// })