/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-props-no-spreading */

import { ApolloProvider } from '@apollo/react-hooks';
import { Provider } from 'react-redux';
import Head from 'next/head';
import { useStore, useApollo } from '../src';

import '../public/static/scss/style.scss';

export default function App({ Component, pageProps }) {
  const store = useStore(pageProps.initialReduxState);
  const apolloClient = useApollo(pageProps.initialApolloState);

  return (
    <Provider store={store}>
      <ApolloProvider client={apolloClient}>
        <Head>
          <meta charSet="utf-8" />
          <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
          <meta httpEquiv="Content-Language" content="pt-br" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <title>Anjolocal - Seja a esperança de alguém</title>
          <script src="https://unpkg.com/animejs@2.2.0/anime.min.js" />
          <script src="https://unpkg.com/scrollreveal@4.0.0/dist/scrollreveal.min.js" />
        </Head>
        <Component {...pageProps} />
      </ApolloProvider>
    </Provider>
  );
}
