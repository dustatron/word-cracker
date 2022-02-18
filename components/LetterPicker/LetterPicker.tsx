import React from "react"
import { Flex, Box, Button } from "@chakra-ui/react"
import { alpha } from "./utils"

type Props = {
  addALetter: (letter: string) => void
  makeGuess: () => void
  removeLastLetter: () => void
  isGuessReady: boolean
}

const LetterPicker = ({
  addALetter,
  makeGuess,
  removeLastLetter,
  isGuessReady,
}: Props) => {
  return (
    <>
      <Flex wrap={"wrap"} alignContent="center" justifyContent="center">
        {alpha.map((letter, index) => {
          return (
            <Button
              key={index}
              w="2.5rem"
              h="2.5rem"
              border="1px solid white"
              borderRadius={5}
              margin="1"
              background="gray.600"
              userSelect={"none"}
              onClick={() => addALetter(letter)}
            >
              {letter}
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
        onClick={makeGuess}
        isDisabled={isGuessReady}
      >
        Enter
      </Button>
    </>
  )
}

export default LetterPicker
