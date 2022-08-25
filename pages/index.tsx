import type { NextPage } from 'next'
import { Stack, Button } from '@mui/material'
import { Accessibility } from '@mui/icons-material'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="https://nextjs.org">Next.js!</a>
        </h1>

        <Stack spacing={2} direction="row">
          <Button variant="text">Text</Button>
          <Button variant="contained">Contained</Button>
          <Button variant="outlined">Outlined</Button>
          <Accessibility></Accessibility>
        </Stack>
      </main>
    </div>
  )
}

export default Home
