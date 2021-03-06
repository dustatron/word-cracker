import { LetterState } from "../types"
export const evalGuess = (
  masterWord: string,
  guess: LetterState[]
): LetterState[] => {
  const masterTrimmed = [...masterWord.toLocaleLowerCase().split("")]
  const correctResults = guess.map((l, idx) => {
    if (l.letter.toLocaleLowerCase() === masterWord[idx].toLocaleLowerCase()) {
      masterTrimmed[idx] = "!"
      return {
        letter: l.letter,
        state: "correct",
      }
    } else {
      return l
    }
  })
  const withGoodButWrongSpace = correctResults.map((l) => {
    if (l.state === "correct") {
      return l
    } else if (masterTrimmed.includes(l.letter.toLocaleLowerCase())) {
      const goodLetterIndex = masterTrimmed.indexOf(
        l.letter.toLocaleLowerCase()
      )
      masterTrimmed[goodLetterIndex] = "!"
      return {
        state: "good",
        letter: l.letter,
      }
    } else {
      return { state: "wrong", letter: l.letter }
    }
  })
  // @ts-ignore
  return withGoodButWrongSpace
}
export const evalWin = (
  letters: LetterState[],
  mainLength: number
): boolean => {
  const corrects = letters.filter((l) => l.state === "correct")
  return corrects.length === mainLength
}
