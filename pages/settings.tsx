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
import { numberLimiter, WordListMode } from "../utils"
import { useGameData } from "../context/GameDataContext"

const Settings = () => {
  const { wordLength, updateLength, wordListMode, updateWordListMode } =
    useGameData()
  const [inputValue, setInputValue] = useState<number>(() => wordLength)
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
