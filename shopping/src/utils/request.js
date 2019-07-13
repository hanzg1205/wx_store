import Fly from "flyio/dist/npm/wx";
import { mapState } from "vuex";
export let fly = new Fly();

//设置超时
fly.config.timeout = 10000;
//设置请求基地址
fly.config.baseURL = "https://sign.jasonandjay.com/";
// fly.config.baseURL = "http://123.206.55.50:7001/"
// fly.config.baseURL = "http://169.254.12.68:7001/"
// fly.config.baseURL = 'http://127.0.0.1:7001/'

const HOST = "https://127.0.0.1"; // 更改
//添加请求拦截器
fly.interceptors.request.use(request => {
  // 把openid放在请求头部
  let trackId = "F649B34989975F268D3E917EBD51B81C7D08F94FA6DDF11851787716A558794DC6291F956DE6188AC10DAC62D9392D3B3674D93872E445F199F0CD733106E3F6BDCEDB846A3B42A62830075BE7A4132959767C70BBCC4FD2504723625057EDC2925C8248A015E8F1";
  let contentType = "application/x-www-form-urlencoded"
  if (trackId){
    request.headers['trackId'] = trackId;
    request.headers['content-type'] = contentType;
  }

  //给所有请求添加自定义header
  // request.headers["Cookie"] = map(cookies, (v, k) => k + '=' + v).join(';')
  //打印出请求体
  // console.log(request.body)
  //终止请求
  //var err=new Error("xxx")
  //err.request=request
  //return Promise.reject(new Error(""))

  //可以显式返回request, 也可以不返回，没有返回值时拦截器中默认返回request
  return request;
});

//添加响应拦截器，响应拦截器会在then/catch处理之前执行
fly.interceptors.response.use(
  response => {
    if (response.request.url.indexOf(HOST) == 0) {
      let hcks =
        response.headers["set-cookie"] || response.headers["Set-Cookie"];
      if (hcks != null) {
        hcks.forEach(v => {
          let ck = v.split(";")[0].split("=");
          cookies[ck[0]] = ck[1];
        });
      }
    }
    //只将请求结果的data字段返回
    return response.data;
  },
  err => {
    //发生网络错误后会走到这里
    //return Promise.resolve("ssss")
  }
);

export default fly;
