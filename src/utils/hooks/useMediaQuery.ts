import { useEffect, useState } from "react";

export const useMediaQuery = (mediaQuery: string) => {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    const mediaWatcher = window.matchMedia(mediaQuery);
    setMatches(mediaWatcher.matches);

    const updateMatches = (e: any) => {
      setMatches(e.matches);
    }

    if(mediaWatcher.addEventListener) {
      mediaWatcher.addEventListener('change', updateMatches)
      return function cleanup() {
        mediaWatcher.removeEventListener('change', updateMatches)
      }
    } else {
      mediaWatcher.addListener(updateMatches)
      return function cleanup() {
        mediaWatcher.removeListener(updateMatches)
      }
    }
  }, []);

  return matches;
};
