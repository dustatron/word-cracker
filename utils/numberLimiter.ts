export const numberLimiter = (num: number, updater: (num: number) => void) => {
  // if (num < 15) {
  //   return updater(num)
  // }
  updater(num > 14 ? 14 : num < 2 ? 2 : num)
}
