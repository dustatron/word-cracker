import { Text, Flex, Box, Container, Button, Center } from "@chakra-ui/react"
import Link from "next/link"

type Props = {}

const Win = (props: Props) => {
  return (
    <Container>
      <Flex justifyContent="center" alignContent="center" wrap="wrap">
        <Box w="100%">
          <Text as="h1" fontSize={48} align="center">
            You win
          </Text>
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
