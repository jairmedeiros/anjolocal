import { useEffect } from 'react';

function useMouseEvent(condition, innerHandleClickOutsideFn, node, action) {
  useEffect(() => {
    async function handleClickOutside(e) {
      if (!node.current.contains(e.target)) {
        await innerHandleClickOutsideFn();
      }
    }

    if (condition) {
      document.addEventListener(action, handleClickOutside);
    } else {
      document.removeEventListener(action, handleClickOutside);
    }
  }, [condition, node, innerHandleClickOutsideFn, action]);
}

export default useMouseEvent;
