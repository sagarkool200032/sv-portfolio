import { useState, useEffect } from "react";

const useMediaQuery = (props) => {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    const media = window.matchMedia(props.query);
    if (media.matches !== matches) {
      setMatches(media.matches);
    }
    const listener = () => setMatches(media.matches);
    window.addEventListener("resize", listener);
    return () => window.removeEventListener("resize", listener);
  }, [matches, props.query]);

  return matches;
};

export default useMediaQuery;