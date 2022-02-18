import React from "react"
import { HStack, VStack, Flex, Box } from "@chakra-ui/react"
import { LetterState } from "../../types"

type Props = {
  letters: LetterState[]
  index: number
}

const GuessRow = ({ letters, index }: Props) => {
  return (
    <HStack
      w="100%"
      spacing={4}
      padding="3"
      justifyContent="center"
      alignContent="center"
      height="5rem"
    >
      <Box p="5" borderRadius={5}>
        {index}
      </Box>
      {letters.map((l, idx) => (
        <Box
          key={`${l}-${idx}`}
          p="5"
          border="1px solid white"
          borderRadius={5}
        >
          {l.letter}
        </Box>
      ))}
    </HStack>
  )
}

export default GuessRow
