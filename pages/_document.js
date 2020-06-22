import Document, { Html, Head, Main, NextScript } from 'next/document';
import '../public/static/scss/style.scss';

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html lang="pt-br">
        <Head />
        <body className="is-boxed has-animations">
          <Main />
          <script src="/static/js/main.js" />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
