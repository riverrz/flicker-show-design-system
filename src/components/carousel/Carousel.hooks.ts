import useMediaQuery from 'beautiful-react-hooks/useMediaQuery';
import { config as styleConfig } from '../../index';

export const useNumberOfItemsVisible = () => {
  const isXS = useMediaQuery(styleConfig.media.xs);
  const isSM = useMediaQuery(styleConfig.media.sm);
  const isMD = useMediaQuery(styleConfig.media.md);

  let numberOfItemsVisible = 5;
  if (isXS) {
    numberOfItemsVisible = 2;
  } else if (isSM) {
    numberOfItemsVisible = 3;
  } else if (isMD) {
    numberOfItemsVisible = 4;
  }

  return numberOfItemsVisible;
};
