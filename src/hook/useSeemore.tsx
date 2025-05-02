import { useState } from 'react';

const useSeemore = <T extends number | string>(length: number, initialValue: T) => {
  const [openStates, setOpenStates] = useState<T[]>(() => Array.from({ length }, () => initialValue));

  const toggle = (index: number, value: T) => {
    setOpenStates((prevStates) => prevStates.map((state, i) => (i === index ? value : state)));
  };

  const reset = () => setOpenStates(() => Array.from({ length }, () => initialValue));

  return { openStates, toggle, reset };
};

export default useSeemore;

