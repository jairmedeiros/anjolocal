// import { useDispatch } from 'react-redux';
import { initializeStore } from '../src/Redux';
// import useInterval from '../lib/useInterval';
import Layout from '../src/Components/Layout';
// import Clock from '../src/Components/Clock';
import Counter from '../src/Components/Counter';

const ReduxPage = () => {
  // Tick the time every second
  // const dispatch = useDispatch();

  // useInterval(() => {
  //   dispatch({
  //     type: 'TICK',
  //     light: true,
  //     lastUpdate: Date.now(),
  //   });
  // }, 1000);

  return (
    <Layout>
      {/* <Clock /> */}
      <Counter />
    </Layout>
  );
};

export async function getStaticProps() {
  const reduxStore = initializeStore();
  const { dispatch } = reduxStore;

  dispatch({
    type: 'TICK',
    light: true,
    lastUpdate: Date.now(),
  });

  return {
    props: {
      initialReduxState: reduxStore.getState(),
    },
    unstable_revalidate: 1,
  };
}

export default ReduxPage;
