import { useMediaQuery } from "react-responsive";

export const useScreenSizes = () => {
  const isLargeScreen = useMediaQuery({ query: "(min-width: 1400px)" });
  const isSmallScreen = useMediaQuery({ query: "(max-width: 767px)" });
  const isMediumScreen = useMediaQuery({
    query: "(min-width: 768px) and (max-width: 1439px)",
  });
  return {
    isLargeScreen,
    isSmallScreen,
    isMediumScreen,
  };
};
