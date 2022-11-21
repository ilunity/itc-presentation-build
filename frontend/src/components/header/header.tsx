import React, { useRef } from 'react';
import { HeaderProps } from './header.types';
import { Box, useMediaQuery, useTheme } from '@mui/material';
import { useScroll, useTransform } from 'framer-motion';
import { ThemeChangeButton } from '../theme-change-button';
import { HideOnScroll } from '../hide-on-scroll';
import { MotionLogo } from './motion-logo';

const useDefineLogoHeight = () => {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up('md'));

  const logoHeight = matches ? '200px' : '100px';
  return logoHeight;
};

export const Header: React.FC<HeaderProps> = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['100vh end', '80vh start'],
  });

  const scale = useTransform(
    scrollYProgress,
    [0, 1],
    [1, 0.5],
  );
  const offset = useTransform(
    scrollYProgress,
    value => `${ 50 - value * 50 }%`,
  );

  const logoHeight = useDefineLogoHeight();

  return (
    <Box
      ref={ ref }
      component={ 'header' }
      sx={ {
        height: `calc(100vh + ${ logoHeight })`,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-end',
        alignItems: 'center',
        position: 'relative',
      } }
    >
      <HideOnScroll>
        <Box
          sx={ {
            position: 'fixed',
            top: 40,
            right: 40,
          } }
        >
          <ThemeChangeButton/>
        </Box>
      </HideOnScroll>
      <MotionLogo
        scale={ scale }
        offset={ offset }
        logoHeight={ logoHeight }
      />
    </Box>
  );
};
