import React, { useContext } from 'react';
import { ThemeChangeButtonProps } from './theme-change-button.types';
import { IconButton, useTheme } from '@mui/material';
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import { ColorModeContext } from '../app';

export const ThemeChangeButton: React.FC<ThemeChangeButtonProps> = () => {
  const theme = useTheme();
  const colorMode = useContext(ColorModeContext);

  return (
    <IconButton onClick={ colorMode.toggleColorMode }>
      {
        theme.palette.mode === 'dark'
          ? <LightModeIcon fontSize={ 'large' }/>
          : <DarkModeIcon color={ 'secondary' } fontSize={ 'large' }/>
      }
    </IconButton>
  );
};
