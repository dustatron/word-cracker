import { useState } from "react"
import {
  Text,
  Flex,
  Box,
  Container,
  Input,
  Spacer,
  Button,
} from "@chakra-ui/react"
import Link from "next/link"
import { numberLimiter } from "../utils"
import { useGameData } from "../context/GameDataContext"

const Settings = () => {
  const { wordLength, updateLength } = useGameData()
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
        <Text>Word Length</Text>
        <Input
          type="number"
          value={inputValue}
          onChange={(e) => {
            setInputValue(numberLimiter(parseInt(e.target.value)))
            updateLength(parseInt(e.target.value))
          }}
        />
      </Box>
    </Container>
  )
}

export default Settings
