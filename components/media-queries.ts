import { useMediaQuery } from "react-responsive";
// This hook will define all media queries throughout the media
export const useMediaQueries = () => {
  return {
    lg: useMediaQuery({ query: "(min-width: 1024px)" }),
    md: useMediaQuery({ query: "(min-width: 728px)" }),
    sm: useMediaQuery({ query: "(min-width: 640px)" }),
  };
};
