export default function getApiData(path) {
  return fetch(`http://192.168.50.57:3000${path}`, { credentials: 'include' })
    .then((response) => {
      if (!response.json) {
        console.log('返回数据没有json方法')
        throw Error('服务器异常')
      } else {
        return response.json()
      }
    })
  // .then((response) => {
  //   if (response.code === 200) {
  //     return response
  //   } else {
  //     const msg = response.msg || '服务器异常'
  //     throw Error(`${response.code}: ${msg}`)
  //   }
  // })
}
