import React, { useContext, createContext, ReactElement, useState } from "react"
import { LetterState } from "../types"
import { numberLimiter, setUpGame } from "../utils"

const initialState: GameDataHook = {
  letterSet: [],
  wordLength: 5,
  mainWord: "",
  updateLength: () => {},
  wordList: [],
  history: [],
  setHistory: () => {},
  setLetterSet: () => {},
  makeGame: () => {},
  guessHistory: [],
  setGuessHistory: () => {},
}
const GameDataContext = createContext<GameDataHook>(initialState)

export function useGameData() {
  return useContext<GameDataHook>(GameDataContext)
}

interface GameDataHook {
  wordLength: number
  letterSet: LetterState[]
  history: LetterState[][]
  wordList: string[]
  mainWord: string
  updateLength: (num: number) => void
  setLetterSet: (letters: LetterState[]) => void
  setHistory: (row: LetterState[][]) => void
  makeGame: () => void
  guessHistory: LetterState[]
  setGuessHistory: (history: LetterState[]) => void
}
const GameDataProvider = ({ children }: any): ReactElement => {
  const [wordLength, setWordLength] = useState<number>(5)
  const [letterSet, setLetterSet] = useState<LetterState[]>([])
  const [history, setHistory] = useState<LetterState[][]>([])
  const [wordList, setWordList] = useState<string[]>([])
  const [mainWord, setMainWord] = useState<string>("")
  const [guessHistory, setGuessHistory] = useState<LetterState[]>([])

  const updateLength = (num: number) => {
    const updateNumber = numberLimiter(num, setWordLength)
    window.localStorage["word-cracker-length"] = updateNumber
  }

  const makeGame = () => {
    const { list, main } = setUpGame(wordLength)
    setWordList(list), setMainWord(main)
  }

  const value: GameDataHook = {
    wordLength,
    letterSet,
    history,
    wordList,
    mainWord,
    updateLength,
    setLetterSet,
    setHistory,
    makeGame,
    guessHistory,
    setGuessHistory,
  }
  return (
    <GameDataContext.Provider value={value}>
      {children}
    </GameDataContext.Provider>
  )
}

export default GameDataProvider
