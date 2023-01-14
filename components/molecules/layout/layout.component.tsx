import Head from 'next/head'
import { Header } from '../header'
import { ToggleColorMode } from '../context'
import styles from './layout.module.css'

type Props = {
  children: React.ReactNode
}

export const Layout = ({ children }: Props) => (
  <>
    <Head>
      <title>Dev - Maxi Pezzotta</title>
      <meta name="description" content="software developer" />
      <meta
        name="keywords"
        content="maximiliano pezzotta, javaScript, react,  next js, framework, github"
      />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href="/code.svg" />
    </Head>
    <ToggleColorMode>
      <Header />
      <main className={styles.container}>{children}</main>
    </ToggleColorMode>
  </>
)
