import { Text, Flex, Box, Container, Button, Center } from "@chakra-ui/react"
import Link from "next/link"
import { useGameData } from "../context/GameDataContext"

type Props = {}

const Win = (props: Props) => {
  const { mainWord, history } = useGameData()
  return (
    <Container>
      <Flex justifyContent="center" alignContent="center" wrap="wrap">
        <Box w="100%">
          <Text as="h1" fontSize={48} align="center">
            You win
          </Text>
        </Box>
        <Box width="100%">
          <Text fontSize={28} fontWeight="extrabold" align="center">
            {" "}
            The Word Was:
          </Text>
          <Text fontSize={28} align="center">
            {mainWord.toUpperCase()}
          </Text>
        </Box>
        <Box w="80%" p="5">
          <Text>Total Guesses: {mainWord.length}</Text>
        </Box>
        <Center w="100%">
          <Link href="/">
            <a>
              <Button>Back to Game</Button>
            </a>
          </Link>
        </Center>
      </Flex>
    </Container>
  )
}

export default Win
