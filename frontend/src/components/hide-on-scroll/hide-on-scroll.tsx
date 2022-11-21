import React from 'react';
import { HideOnScrollProps } from './hide-on-scroll.types';
import { Slide, useScrollTrigger } from '@mui/material';

export const HideOnScroll: React.FC<HideOnScrollProps> = ({ children }) => {
  const trigger = useScrollTrigger();

  return (
    <Slide appear={ false } direction="down" in={ !trigger }>
      { children }
    </Slide>
  );
};
