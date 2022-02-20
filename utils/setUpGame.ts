import wordList from "./wordlist.json"

export const setUpGame = (wordLength: number) => {
  const list = wordList.filter((word) => word.length === wordLength)
  const main = list[Math.floor(Math.random() * (1 - list.length) + list.length)]
  return { list, main }
}
