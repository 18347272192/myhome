import { RequestConfig } from 'umi';
const baseURL = 'http://111.203.59.61:8060/dev-api';
const authorization = 'Bearer eyJhbGciOiJIUzUxMiJ9.eyJsb2dpbl91c2VyX2tleSI6IjIxZTI0MWZmLTYxYjgtNGYyZC1iYzhkLWUzNTE2MTEzODFjOSJ9.VYDNy3gfsgyBnr06SoqGTTcerKH87EHgEeO1P12GCtgjHxDGjS0r4iw4-1LVOV-Ratisq0g-drMHjNYzpgocVA'
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
