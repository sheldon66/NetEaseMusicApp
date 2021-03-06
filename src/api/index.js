export default function getApiData(path) {
  return fetch(`http://${process.env.VUE_APP_API_DOMAIN}:3000${path}`, { credentials: 'include' })
    .then((response) => {
      if (!response.json) {
        console.log('返回数据没有json方法')
        throw Error('服务器异常')
      } else {
        return response.json()
      }
    })
}
