import 'styles/globals.css'
import type { AppProps } from 'next/app'
import { Layout } from 'components/molecules/layout'
import { useEffect, useState } from 'react'
import { Spinner } from 'components/atoms/spinner'

export default function App({ Component, pageProps }: AppProps) {
  const [animation, setAnimation] = useState(true)
  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimation((prev) => !prev)
    }, 4000)

    return () => clearTimeout(timer)
  }, [])

  if (animation) return <Spinner />
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}
