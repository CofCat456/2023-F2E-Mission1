// 換算金錢
export function currency(val: number, symbol: string = 'NT$ '): string {
  if (!val)
    return '0'
  const arr = val.toString().split('.')
  const re = /(\d{1,3})(?=(\d{3})+$)/g
  return symbol + arr[0].replace(re, '$1,') + (arr.length === 2 ? `.${arr[1]}` : '')
}

// scrollToCenter
// NOTE: https://gsap.com/community/forums/topic/16828-scrollto-how-to-scroll-to-div-in-center-of-viewport/
export function scrollCenter(id: string) {
  const { clientHeight } = document.documentElement
  const target = document.getElementById(id)
  const targetHeight = target?.clientHeight

  return targetHeight ? (targetHeight - clientHeight) / 2 : -100
}
