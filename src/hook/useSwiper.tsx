// useSwiper.ts
import { useEffect } from "react";

const useSwiper = (ref: React.RefObject<HTMLDivElement>) =>
  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const scrollBy = el.clientWidth / 3;
    let intervalId: number;

    const scroll = () =>
      (intervalId = window.setInterval(
        () =>
          el.scrollBy({
            left: scrollBy,
            behavior: "smooth",
          }),
        2500
      ));

    scroll();

    return () => clearInterval(intervalId);
  }, [ref]);

export default useSwiper;

