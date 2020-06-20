import { initializeApollo } from '../src/Apollo';
import Layout from '../src/Components/Layout';
import Submit from '../src/Components/Submit';
import PostList, { ALL_POSTS_QUERY, allPostsQueryVars } from '../src/Components/PostList';

const ApolloPage = () => (
  <Layout>
    <Submit />
    <PostList />
  </Layout>
);

export async function getStaticProps() {
  const apolloClient = initializeApollo();

  await apolloClient.query({
    query: ALL_POSTS_QUERY,
    variables: allPostsQueryVars,
  });

  return {
    props: {
      initialApolloState: apolloClient.cache.extract(),
    },
    unstable_revalidate: 1,
  };
}

export default ApolloPage;
