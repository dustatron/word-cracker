import React from "react"
import { HStack, VStack, Flex, Box } from "@chakra-ui/react"
import { LetterState } from "../../types"

type Props = {
  letters: LetterState[]
  wordLength?: number
}

const GuessRow = ({ letters, wordLength }: Props) => {
  // @ts-ignore
  const starterArray = Array.apply(null, { length: wordLength }).map(
    (l, idx) => {
      if (letters && letters[idx]?.letter) {
        return letters[idx]
      } else {
        return { letter: "", state: "guess" }
      }
    }
  )
  const letterArray =
    wordLength && letters.length < wordLength ? starterArray : letters

  return (
    <HStack
      w="100%"
      spacing={4}
      padding="3"
      justifyContent="center"
      alignContent="center"
      height="5rem"
    >
      {letterArray.map((l, idx) => {
        const correct = l.state === "correct" ? "green.300" : ""
        const good = l.state === "good" ? "yellow.400" : ""
        return (
          <Box
            key={`${l}-${idx}`}
            p="5"
            border="1px solid white"
            borderRadius={5}
            background={correct || good}
          >
            {l.letter}
          </Box>
        )
      })}
    </HStack>
  )
}

export default GuessRow
