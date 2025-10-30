import wordListCommon from "./wordlist-common.json"
import wordListExtended from "./wordlist-extended.json"

export type WordListMode = "common" | "extended"

export const setUpGame = (
  wordLength: number,
  mode: WordListMode = "common"
) => {
  const wordList = mode === "extended" ? wordListExtended : wordListCommon
  const list = wordList.filter((word) => word.length === wordLength)
  const main = list[Math.floor(Math.random() * list.length)]
  return { list, main }
}
