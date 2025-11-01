import React, { useContext, createContext, ReactElement, useState } from "react"
import { LetterState } from "../types"
import { numberLimiter, guessLimiter, setUpGame, WordListMode } from "../utils"

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
  wordListMode: "common",
  updateWordListMode: () => {},
  guessLimit: 6,
  updateGuessLimit: () => {},
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
  makeGame: (length?: number) => void
  guessHistory: LetterState[]
  setGuessHistory: (history: LetterState[]) => void
  wordListMode: WordListMode
  updateWordListMode: (mode: WordListMode) => void
  guessLimit: number
  updateGuessLimit: (num: number) => void
}
const GameDataProvider = ({ children }: any): ReactElement => {
  const [wordLength, setWordLength] = useState<number>(5)
  const [letterSet, setLetterSet] = useState<LetterState[]>([])
  const [history, setHistory] = useState<LetterState[][]>([])
  const [wordList, setWordList] = useState<string[]>([])
  const [mainWord, setMainWord] = useState<string>("")
  const [guessHistory, setGuessHistory] = useState<LetterState[]>([])
  const [wordListMode, setWordListMode] = useState<WordListMode>("common")
  const [guessLimit, setGuessLimit] = useState<number>(6)

  const updateLength = (num: number) => {
    const updateNumber = numberLimiter(num)
    setWordLength(updateNumber)
    window.localStorage["word-cracker-length"] = updateNumber
  }

  const updateWordListMode = (mode: WordListMode) => {
    setWordListMode(mode)
    window.localStorage["word-cracker-wordlist-mode"] = mode
  }

  const updateGuessLimit = (num: number) => {
    const updateNumber = guessLimiter(num)
    setGuessLimit(updateNumber)
    window.localStorage["word-cracker-guess-limit"] = updateNumber
  }

  const makeGame = (length?: number) => {
    const { list, main } = setUpGame(length || wordLength, wordListMode)
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
    wordListMode,
    updateWordListMode,
    guessLimit,
    updateGuessLimit,
  }
  return (
    <GameDataContext.Provider value={value}>
      {children}
    </GameDataContext.Provider>
  )
}

export default GameDataProvider
