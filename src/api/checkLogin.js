import getApiData from './index.js'
const path = '/login/status'
function checkLogin() {
  return getApiData(path).then(
    response => {
      let data
      if (response.code === 200) {
        data = response.profile
        data.isLogin = true
      } else {
        data = { isLogin: false }
      }
      return data
    }
  )
}
export default checkLogin
