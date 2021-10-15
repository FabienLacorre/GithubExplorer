import type { NextPage } from 'next'
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import SearchBar from "./Components/search-bar";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Traefik</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
       <h1>Select a repository</h1>
       <div style={{width: 486}}>
       <SearchBar/>
       </div>
       
      </main>
    </div>
  )
}

export default Home
