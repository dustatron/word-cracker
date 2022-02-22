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

  return (
    <ChakraProvider theme={theme}>
      <GameDataProvider>
        <Component {...pageProps} />
      </GameDataProvider>
    </ChakraProvider>
  )
}

export default MyApp
