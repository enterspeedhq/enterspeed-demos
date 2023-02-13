import { useState, useEffect } from "react";

const useHydrated = () => {
  const [hydrated, setHydrated] = useState(false);
  useEffect(() => {
    setHydrated(true);
  }, []);

  return hydrated;
};

export default useHydrated;
