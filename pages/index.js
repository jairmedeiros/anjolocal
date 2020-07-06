/* eslint-disable jsx-a11y/anchor-is-valid */

// import { useDispatch } from 'react-redux';
// import { initializeStore } from '../src/Redux';
// import { initializeApollo } from '../src/Apollo';
// import useInterval from '../src/lib/useInterval';
// import Layout from '../src/Components/Layout';
// import Clock from '../src/Components/Clock';
// import Counter from '../src/Components/Counter';
// import Submit from '../src/Components/Submit';
// import PostList, { ALL_POSTS_QUERY, allPostsQueryVars } from '../src/Components/PostList';

import { useScript } from '../src/utils/hooks';
import { Header, Features, Hero, Footer, Institutions } from '../src/components';

const IndexPage = () => {
  // Tick the time every second
  // const dispatch = useDispatch();

  // useInterval(() => {
  //   dispatch({
  //     type: 'TICK',
  //     light: true,
  //     lastUpdate: Date.now(),
  //   });
  // }, 1000);

  useScript('/static/js/main.js');

  return (
    <div className="body-wrap">
      <Header />
      <main>
        <Hero />
        <Features />
        <Institutions />
      </main>
      <Footer />
    </div>
  );
};

// export async function getStaticProps() {
//   const reduxStore = initializeStore();
//   const apolloClient = initializeApollo();
//   const { dispatch } = reduxStore;

//   dispatch({
//     type: 'TICK',
//     light: true,
//     lastUpdate: Date.now(),
//   });

// await apolloClient.query({
//   query: ALL_POSTS_QUERY,
//   variables: allPostsQueryVars,
// });

//   return {
//     props: {
//       initialReduxState: reduxStore.getState(),
//       initialApolloState: apolloClient.cache.extract(),
//     },
//     unstable_revalidate: 1,
//   };
// }

export default IndexPage;
