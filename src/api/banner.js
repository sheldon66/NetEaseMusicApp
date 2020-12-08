// 0: pc
// 1: android
// 2: iphone
// 3: ipad
import getApiData from './index.js'
const path = '/banner?type=2'

const bannerData = getApiData(path).then(response => response.banners)
export default bannerData
