import { useScript } from '../src/utils/hooks';
import { Header, Features, Hero, Footer, Institutions } from '../src/components';
import { Button } from '../src/components/common';

function Index() {
  useScript('/static/js/main.js');

  return (
    <div className="body-wrap">
      <Header />
      <main>
        <Hero />
        <Features />
        <Institutions />
        <Button majorStyle="primary" url="#" isFloating>
          Colabore com a gente!
        </Button>
      </main>
      <Footer />
    </div>
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
