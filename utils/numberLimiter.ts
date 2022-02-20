export const numberLimiter = (num: number, updater: (num: number) => void) => {
  const updateNumber = num > 14 ? 14 : num < 2 ? 2 : num
  updater(updateNumber)
  return updateNumber
}
