const axios = require('axios');

const instance = axios.create({
  baseURL: 'https://example.com',
})

const handler = {
  get(target, name) {
    return Object.assign({} , ['get', 'post', 'put', 'patch', 'delete']
      .reduce((obj, method) => Object.assign({}, obj, {
        [method](url = '', body = {}, paramns ={}) {
          if (method === 'get' || method === 'delete') {
            return instance.request({
              url,
              method,
              params: data,
              headers: { 'auth-token' : token}
            });
          } else {
            return instance.request({
              url,
              method,
              data: body,
              headers {'auth-token': token}
            })
          }
        }
      }), {})
    )
  }
}

const api = new Proxy({}, handler);
