import { useState } from "react"
import {
  Text,
  Flex,
  Box,
  Container,
  Input,
  Spacer,
  Button,
  Radio,
  RadioGroup,
  Stack,
} from "@chakra-ui/react"
import Link from "next/link"
import { numberLimiter, guessLimiter, WordListMode } from "../utils"
import { useGameData } from "../context/GameDataContext"

const Settings = () => {
  const {
    wordLength,
    updateLength,
    wordListMode,
    updateWordListMode,
    guessLimit,
    updateGuessLimit,
    makeGame,
  } = useGameData()
  const [inputValue, setInputValue] = useState<number>(() => wordLength)
  const [guessLimitInputValue, setGuessLimitInputValue] = useState<number>(
    () => guessLimit
  )
  return (
    <Container>
      <Flex justifyContent="center">
        <Text as="h1" fontSize="36">
          Word Cracker
        </Text>
        <Spacer />
        <Box padding={"3"}>
          <Link href={"/"}>
            <a>
              <Button>&larr; Back</Button>
            </a>
          </Link>
        </Box>
      </Flex>
      <Box w="50%">
        <Text fontSize="20" fontWeight="bold" mb={2}>
          Word Length
        </Text>
        <Input
          type="number"
          value={inputValue}
          onChange={(e) => {
            setInputValue(numberLimiter(parseInt(e.target.value)))
            updateLength(parseInt(e.target.value))
          }}
        />
      </Box>
      <Box w="50%" mt={6}>
        <Text fontSize="20" fontWeight="bold" mb={2}>
          Number of Guesses
        </Text>
        <Input
          type="number"
          value={guessLimitInputValue}
          onChange={(e) => {
            const newLimit = guessLimiter(parseInt(e.target.value))
            setGuessLimitInputValue(newLimit)
            updateGuessLimit(newLimit)
            makeGame()
          }}
        />
        <Text fontSize="sm" color="gray.400" mt={1}>
          Range: 3-12 guesses (default: 6)
        </Text>
      </Box>
      <Box w="50%" mt={6}>
        <Text fontSize="20" fontWeight="bold" mb={2}>
          Word List Size
        </Text>
        <RadioGroup
          value={wordListMode}
          onChange={(value: WordListMode) => updateWordListMode(value)}
        >
          <Stack direction="column" spacing={3}>
            <Radio value="common">
              <Text>
                <strong>Common Words</strong> (~10,000 words)
              </Text>
              <Text fontSize="sm" color="gray.400">
                Most frequently used English words. Great for casual play.
              </Text>
            </Radio>
            <Radio value="extended">
              <Text>
                <strong>Extended Dictionary</strong> (~265,000 words)
              </Text>
              <Text fontSize="sm" color="gray.400">
                Comprehensive word list including rare and obscure words. For
                word masters!
              </Text>
            </Radio>
          </Stack>
        </RadioGroup>
      </Box>
    </Container>
  )
}

export default Settings
