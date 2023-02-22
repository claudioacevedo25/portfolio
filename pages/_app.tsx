import Head from 'next/head'
import { useEffect, useState } from 'react'
import type { AppProps } from 'next/app'
import { useRouter } from 'next/router'
import { Analytics } from '@vercel/analytics/react'
import { Layout } from 'components/molecules/layout'
import { Spinner } from 'components/atoms/spinner'
import { Context } from 'components/molecules/context'
import 'styles/globals.css'

const DELAY = 3000

export default function App({ Component, pageProps }: AppProps) {
  const [animation, setAnimation] = useState(true)
  const router = useRouter()
  const isResumePage = router.route === '/resume'

  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimation((prev) => !prev)
    }, DELAY)

    return () => clearTimeout(timer)
  }, [])

  if (animation && !isResumePage) return <Spinner />
  return (
    <>
      <Head>
        <title>{'Maxi Pezzotta'}</title>
        <meta name="description" content="software developer" />
        <meta
          name="keywords"
          content="maximiliano pezzotta, javaScript, react,  next js, framework, github"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#ff9f2d" />
        <link rel="apple-touch-icon" href="/code.svg" />
        <link rel="icon" href="/code.svg" />
      </Head>
      <Context>
        <Layout>
          <Component {...pageProps} />
          <Analytics />
        </Layout>
      </Context>
    </>
  )
}
