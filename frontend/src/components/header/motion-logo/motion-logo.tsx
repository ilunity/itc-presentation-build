import React from 'react';
import { MotionLogoProps } from './motion-logo.types';
import { ButtonBase, CardMedia } from '@mui/material';
import { motion } from 'framer-motion';
import logo from '../../../assets/logo.svg'

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
          src={ logo }
          alt={ 'Логотип' }
          height={ logoHeight }
        />
      </ButtonBase>
    </motion.div>
  );
};
