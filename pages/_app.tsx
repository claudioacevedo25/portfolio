import { useEffect, useState } from 'react'
import type { AppProps } from 'next/app'
import { useRouter } from 'next/router'
import { Analytics } from '@vercel/analytics/react'
import { Layout } from 'components/molecules/layout'
import { Spinner } from 'components/atoms/spinner'
import 'styles/globals.css'

const DELAY = 4000

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
    <Layout>
      <Component {...pageProps} />
      <Analytics />
    </Layout>
  )
}
