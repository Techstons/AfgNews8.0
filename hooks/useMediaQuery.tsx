import React from "react";

const useMediaQuery = (query: string) => {
  const [matches, setMatches] = React.useState(false);

  const handleChange = (e: any) => setMatches(e.matches);

  React.useEffect(() => {
    const m = window.matchMedia(query);

    setMatches(m.matches);

    m.addEventListener("change", handleChange);

    return () => {
      m.removeEventListener("change", handleChange);
    };
  }, [query]);

  return !matches;
};

export default useMediaQuery;
