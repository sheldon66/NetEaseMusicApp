import getApiData from './index.js'
const path = '/homepage/block/page'

const discoverData = getApiData(path).then(response => {
  const data = {}
  for (let i = 0; i < 4; i++) {
    const item = response.data.blocks[i]
    switch (item.blockCode) {
      case 'HOMEPAGE_BLOCK_PLAYLIST_RCMD':
        data.playlist = item.creatives
        break
      case 'HOMEPAGE_BLOCK_STYLE_RCMD':
        data.custom = {
          title: item.uiElement.mainTitle.title,
          subTitle: item.uiElement.subTitle.title,
          creatives: item.creatives
        }
        break
    }
  }
  return data
})
export default discoverData
