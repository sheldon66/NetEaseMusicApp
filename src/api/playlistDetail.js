import getApiData from './index.js'
const path = '/playlist/detail'
function getPlaylistDetail(playListID) {
  const playlistData = getApiData(`${path}?id=${playListID}`)
  return playlistData
}
export default getPlaylistDetail
