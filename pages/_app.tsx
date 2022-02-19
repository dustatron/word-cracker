import { useState } from "react"
import "../styles/globals.css"
import type { AppProps } from "next/app"
import { ChakraProvider, extendTheme, type ThemeConfig } from "@chakra-ui/react"
import { useWordList, numberLimiter } from "../utils"

function MyApp({ Component, pageProps }: AppProps) {
  const config: ThemeConfig = {
    initialColorMode: "dark",
    useSystemColorMode: false,
  }

  const theme = extendTheme({ config })
  const [wordLength, setWordLength] = useState<number>(() => 5)
  const { list: wordList, mainWord } = useWordList(wordLength)

  return (
    <ChakraProvider theme={theme}>
      <Component
        {...pageProps}
        wordList={wordList}
        mainWord={mainWord}
        wordLength={wordLength}
        updateLength={(num: number) => numberLimiter(num, setWordLength)}
      />
    </ChakraProvider>
  )
}

export default MyApp
