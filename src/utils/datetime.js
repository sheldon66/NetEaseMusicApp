export const secondsToFormatmmSS = (seconds) => {
  const minute = Math.floor(seconds / 60)
  const second = parseInt(seconds % 60).toString().padStart(2, '0')
  return `${minute}:${second}`
}
