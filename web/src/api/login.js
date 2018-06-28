
const axios = require('axios')

export function getCaptcha () {
  return  axios({
    method: 'get',
    url: 'login/captcha'
  })
}
