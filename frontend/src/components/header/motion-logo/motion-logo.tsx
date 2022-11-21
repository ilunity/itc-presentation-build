import React from 'react';
import { MotionLogoProps } from './motion-logo.types';
import { ButtonBase, CardMedia, useMediaQuery, useTheme } from '@mui/material';
import { motion } from 'framer-motion';

export const MotionLogo: React.FC<MotionLogoProps> = ({ scale, offset, logoHeight }) => {
  return (
    <motion.div
      style={ {
        scale,
        bottom: offset,
        position: 'relative',
      } }
    >
      <ButtonBase
        disableRipple
        onClick={ () => {
          window.scrollTo(0, window.innerHeight);
        } }
      >
        <CardMedia
          component={ 'img' }
          src={ '/logo.svg' }
          alt={ 'Логотип' }
          height={ logoHeight }
        />
      </ButtonBase>
    </motion.div>
  );
};
