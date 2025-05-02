import { useEffect, useState } from "react";

function useTime() {
  const [year, setYear] = useState(0);

  useEffect(() => {
    const date = new Date();
    setYear(date.getFullYear());
  }, []);

  return { year };
}

export default useTime;

