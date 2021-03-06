import { useState, useEffect } from "react"
import { Text, Flex, Box, Container, Button, Spacer } from "@chakra-ui/react"
import LetterPicker from "../LetterPicker"
import GuessRow from "../GuessRow"
import { LetterState } from "../../types"
import { evalGuess, evalWin } from "../../utils"
import { useRouter } from "next/router"
import Link from "next/link"
import { useGameData } from "../../context/GameDataContext"

const TURN_COUNT = 6
const MainGame = () => {
  const {
    mainWord,
    wordLength,
    history,
    setHistory,
    letterSet,
    setLetterSet,
    guessHistory,
    setGuessHistory,
  } = useGameData()

  const router = useRouter()

  console.log("mainWord", mainWord)

  useEffect(() => {
    setHistory([])
    setLetterSet([])
  }, [])

  const addALetter = (l: string) => {
    if (letterSet.length < wordLength) {
      const newLetterSet: LetterState[] = [
        ...letterSet,
        { letter: l, state: "guess" },
      ]
      setLetterSet(newLetterSet)
    }
  }

  const makeGuess = () => {
    if (letterSet.length === wordLength && history.length !== TURN_COUNT) {
      const evalLetters = evalGuess(mainWord, letterSet)
      const isWin = evalWin(evalLetters, wordLength)
      const newGuessHistory = guessHistory.map((guess) => {
        const updateLetter = evalLetters.find((l) => l.letter == guess.letter)
        if (updateLetter) {
          return updateLetter
        }
        return guess
      })
      setGuessHistory(newGuessHistory)
      if (isWin) {
        setLetterSet([])
        router.push("/win")
      } else {
        const newRow = [evalLetters, ...history]
        setHistory(newRow)
        setLetterSet([])
      }
    }
  }

  const removeLastLetter = () => {
    if (letterSet.length >= 1) {
      const newLetterSet: LetterState[] = [...letterSet].slice(
        0,
        letterSet.length - 1
      )
      setLetterSet(newLetterSet)
    }
  }

  return (
    <Container>
      <Flex justifyContent="center">
        <Text as="h1" fontSize="36">
          Word Cracker
        </Text>
        <Spacer />
        <Box padding={"3"}>
          <Link href={"/settings"}>
            <a>
              <Button>Settings &rarr;</Button>
            </a>
          </Link>
        </Box>
      </Flex>
      <Box>
        {history.length === 6 && (
          <Box>
            <Text as="h3" fontSize={30} align="center">
              Too many turns
            </Text>
            <Text align="center" fontSize={28}>
              Answer : {mainWord}{" "}
            </Text>
          </Box>
        )}
        {history.length !== TURN_COUNT && (
          <GuessRow letters={letterSet} wordLength={wordLength} />
        )}

        {history.map((g, index) => (
          <GuessRow key={`${index}-${index}`} letters={g} />
        ))}
      </Box>
      <LetterPicker
        addALetter={addALetter}
        makeGuess={makeGuess}
        removeLastLetter={removeLastLetter}
        isGuessReady={letterSet.length !== wordLength}
        letterSet={letterSet}
      />
    </Container>
  )
}

export default MainGame
