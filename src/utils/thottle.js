export default function throttle(fn, thresholdTime) {
  let timeout
  let start = new Date()
  const threshold = thresholdTime || 160
  return function () {
    const context = this; const args = arguments; const curr = new Date()
    clearTimeout(timeout)// 总是干掉事件回调
    if (curr - start >= threshold) {
      fn.apply(context, args) // 只执行一部分方法，这些方法是在某个时间段内执行一次
      start = curr
    } else {
      // 让方法在脱离事件后也能执行一次
      timeout = setTimeout(function () {
        fn.apply(context, args)
      }, threshold)
    }
  }
}
