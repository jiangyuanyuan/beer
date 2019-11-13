import configs from './config.js';
import axios from 'axios';
import {language} from "../assets/lang";
export const environment = {
  baseUrl: "http://47.56.83.245:8400",
  userMock: false,
  lang: language,
};
const http = {};
Object.keys(configs).forEach(item => {
  http[item] = (data) => {
    const {config, response} = configs[item];
    if (environment.userMock) return new Promise((resolve, reject)=>{
      setTimeout(() => resolve(response), 300)
    });
    let res;
    if (config.type === "post") res = axios.post(environment.baseUrl + config.url, {data, headers: {lang: environment.lang}});
    if(config.type === "get") res = axios.get(environment.baseUrl + config.url, {params: data, headers: {lang: environment.lang}});
    return res.then(res => {
      if (res.status === 200) return res.data;
      return res;
    });
  }
});
export default http;
