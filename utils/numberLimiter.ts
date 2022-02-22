export const numberLimiter = (num: number) => {
  const updateNumber = num > 14 ? 14 : num < 2 ? 2 : num
  return updateNumber
}
