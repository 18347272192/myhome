import { RequestConfig } from 'umi';
const baseURL = 'http://111.203.59.61:8060/dev-api';
const authorization = 'Bearer eyJhbGciOiJIUzUxMiJ9.eyJsb2dpbl91c2VyX2tleSI6IjE0YzhjMzdlLThmYzYtNGYzOS05ZDVmLTU1MjQ0ZDdhNTI1NCJ9.Z2FfPH3P5XgRl6_sYB7LX1TWRuglJmVb9MSqx4gOkgdzKokbP1Igwy5kZDkz4XQ38JyIwO7E0OHkxwx5TUpTTg'
export const request: RequestConfig = {
  timeout: 10000,
  errorConfig: {},
  middlewares: [],
  requestInterceptors: [(url, options) => {
    if(!/http/.test(url)){
        url=baseURL+url;
    }
    console.log('url',url)
    return {
      url,
      options: { ...options, interceptors: true, headers:{...options.headers,authorization} },
    };
  }],
  responseInterceptors: [],
};
