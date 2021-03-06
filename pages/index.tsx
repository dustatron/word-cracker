import type { NextPage } from "next"
import { useEffect } from "react"
import Head from "next/head"
import styles from "../styles/Home.module.css"
import MainGame from "../components/MainGame"
import { useGameData } from "../context/GameDataContext"

const Home: NextPage = () => {
  const { updateLength, makeGame } = useGameData()
  useEffect(() => {
    const mainWordLenth = window.localStorage["word-cracker-length"]
    if (typeof mainWordLenth === "string") {
      updateLength(parseInt(mainWordLenth))
      makeGame(parseInt(mainWordLenth))
    } else {
      updateLength(5)
      makeGame()
    }
  }, [])

  return (
    <div>
      <Head>
        <title>Word Cracker</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <MainGame />
      </main>
      <footer className={styles.footer}>
        <p>Powered by PDX-McCord</p>
      </footer>
    </div>
  )
}

export default Home
