import wordList from "../utils/wordlist.json"

export const useWordList = (wordLength: number) => {
  const list = wordList.filter((word) => word.length === wordLength)
  const mainWord =
    list[Math.floor(Math.random() * (1 - list.length) + list.length)]
  return { list, mainWord }
}
