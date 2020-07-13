import { Features, Hero, Institutions } from '../src/scenes/Index';

function Index() {
  return (
    <>
      <Hero />
      <Features />
      <Institutions />
    </>
  );
}

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

export default Index;
