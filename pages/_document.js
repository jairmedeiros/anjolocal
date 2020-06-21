import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html lang="pt-br">
        <Head>
          <meta charset="utf-8" />
          <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
          <meta httpEquiv="Content-Language" content="pt-br" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <title>April Template</title>
          {/* <link href="https://fonts.googleapis.com/css?family=Heebo:400,500,700|Fira+Sans:600" rel="stylesheet">
          <link rel="stylesheet" href="dist/css/style.css"> */}
          <script src="https://unpkg.com/animejs@2.2.0/anime.min.js" />
          <script src="https://unpkg.com/scrollreveal@4.0.0/dist/scrollreveal.min.js" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
