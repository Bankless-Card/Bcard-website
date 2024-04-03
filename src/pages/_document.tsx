import { Html, Head, Main, NextScript } from 'next/document'
import Script from 'next/script'

export default function Document() {

  console.log(process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS);    //G-WXX5WPLBE4

  let myTag = process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS;

    return (
      <Html lang="en">
        <Head />
        
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
}
