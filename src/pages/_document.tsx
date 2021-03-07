import Document, {
  Html,
  Head,
  Main,
  NextScript
} from 'next/document';

export default class MyDocument extends Document {

  render() {
    return (
      <Html lang="pt-BR">
        <Head>
          <link rel="shortcut icon" href="favicon.png" type="image/png"/>

          <meta charSet="UTF-8" />
          <link rel="preconnect" href="https://fonts.gstatic.com"/>
          <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=Rajdhani:wght@600&display=swap" rel="stylesheet"/>
        </Head>

        <body className="dark-mode">
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}