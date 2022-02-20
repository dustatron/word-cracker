import { useState, useEffect } from "react"
import "../styles/globals.css"
import type { AppProps } from "next/app"
import { ChakraProvider, extendTheme, type ThemeConfig } from "@chakra-ui/react"
import GameDataProvider, { useGameData } from "../context/GameDataContext"

function MyApp({ Component, pageProps }: AppProps) {
  const config: ThemeConfig = {
    initialColorMode: "dark",
    useSystemColorMode: false,
  }

  const theme = extendTheme({ config })
  // const [wordLength, setWordLength] = useState<number>(5)

  // useEffect(() => {
  //   const mainWordLenth = window.localStorage["word-cracker-length"]
  //   if (typeof mainWordLenth === "string") {
  //     setWordLength(parseInt(mainWordLenth))
  //   } else {
  //     window.localStorage["word-cracker-length"] = 5
  //   }
  // }, [])

  // const handleUpdateLength = (num: number) => {
  //   const updateNumber = numberLimiter(num, setWordLength)
  //   window.localStorage["word-cracker-length"] = updateNumber
  // }
  // const { list: wordList, mainWord } = useWordList(wordLength)

  return (
    <ChakraProvider theme={theme}>
      <GameDataProvider>
        <Component {...pageProps} />
      </GameDataProvider>
    </ChakraProvider>
  )
}

export default MyApp
