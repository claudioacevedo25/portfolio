import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <title>Maxi Pezzotta</title>
        <meta name="description" content="software developer" />
        <meta
          name="keywords"
          content="maximiliano pezzotta, javaScript, react,  next js, framework, github"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/code.svg" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
