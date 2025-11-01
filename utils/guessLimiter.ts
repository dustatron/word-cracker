export const guessLimiter = (num: number) => {
  const updateNumber = num > 12 ? 12 : num < 3 ? 3 : num
  return updateNumber
}
