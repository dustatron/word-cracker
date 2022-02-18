import { LetterState } from "../types"
export const evalGuess = (
  masterWord: string,
  guess: LetterState[]
): LetterState[] => {
  const rightPlace = guess.map((l, index) => {
    if (
      l.letter.toLocaleLowerCase() === masterWord[index].toLocaleLowerCase()
    ) {
      return { letter: l.letter, state: "correct" }
    } else if (
      masterWord.toLocaleLowerCase().includes(l.letter.toLocaleLowerCase())
    ) {
      return { letter: l.letter, state: "good" }
    } else {
      return l
    }
  })
  // @ts-ignore
  return rightPlace
}
