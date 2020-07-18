import { useEffect, useState } from 'react';

const MOBILE_WIDTH = 789;

function useWidthPage() {
  const [width, setWidth] = useState();

  useEffect(() => {
    setWidth(window.innerWidth);

    function handleResize() {
      setWidth(window.innerWidth);
    }

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [width]);

  return { width, isDesktop: width > MOBILE_WIDTH };
}

export default useWidthPage;
