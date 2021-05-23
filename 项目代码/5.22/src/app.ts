import { RequestConfig } from 'umi';
const baseURL = 'http://111.203.59.61:8060/dev-api';
const authorization = 'Bearer eyJhbGciOiJIUzUxMiJ9.eyJsb2dpbl91c2VyX2tleSI6IjQ2ZWZlMTRkLWJhZmEtNDE0OS05NmY5LWUyNDNlM2FlOGEzNSJ9._kZJuYrfmQ_2dmOzB2gpRAcyQfaLTBwgB0FOBOfdeB6DzxqBzSJ9VX3eZrFuWpI_Px7JghS5JouyRjamWFal3w'
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
