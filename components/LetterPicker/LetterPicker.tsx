import React, { useEffect, useState } from "react"
import { Flex, Button } from "@chakra-ui/react"
import { alpha } from "./utils"
import { LetterState } from "../../types"
import { useGameData } from "../../context/GameDataContext"

type Props = {
  addALetter: (letter: string) => void
  makeGuess: () => void
  removeLastLetter: () => void
  isGuessReady: boolean
  letterSet: LetterState[]
}

const LetterPicker = ({
  addALetter,
  makeGuess,
  removeLastLetter,
  isGuessReady,
  letterSet,
}: Props) => {
  const { guessHistory, setGuessHistory } = useGameData()

  useEffect(() => {
    setGuessHistory(
      alpha.map((letter): LetterState => {
        return { letter, state: "guess" }
      })
    )
  }, [])

  const handleMakeGuess = () => {
    makeGuess()
  }
  return (
    <>
      <Flex wrap={"wrap"} alignContent="center" justifyContent="center">
        {guessHistory.map((letter, index) => {
          const getColor = () => {
            if (letter.state === "correct") {
              return "green.300"
            }
            if (letter.state === "good") {
              return "yellow.400"
            }
            if (letter.state === "wrong") {
              return "grey.300"
            }
            return ""
          }
          return (
            <Button
              key={index}
              w="2.5rem"
              h="2.5rem"
              border="1px solid white"
              backgroundColor={getColor()}
              borderRadius={5}
              margin="1"
              background="gray.600"
              userSelect={"none"}
              onClick={() => addALetter(letter.letter)}
              isDisabled={letter.state === "wrong"}
            >
              {letter.letter}
            </Button>
          )
        })}
        <Button
          w="5rem"
          h="2.5rem"
          border="1px solid white"
          borderRadius={5}
          margin="1"
          background="gray.600"
          userSelect={"none"}
          onClick={removeLastLetter}
        >
          Delete
        </Button>
      </Flex>
      <Button
        w="100%"
        p="7"
        border="1px solid white"
        borderRadius={5}
        margin="2"
        background="gray.600"
        userSelect={"none"}
        textAlign="center"
        onClick={handleMakeGuess}
        isDisabled={isGuessReady}
      >
        Enter
      </Button>
    </>
  )
}

export default LetterPicker
