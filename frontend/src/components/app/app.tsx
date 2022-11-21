import { Box, Container, createTheme, CssBaseline, ThemeProvider } from '@mui/material';
import { Header } from '../header';
import { createContext, useMemo, useState } from 'react';
import { About } from '../about';
import { CardContainer } from '../card-container';
import { themeOptions } from '../../utils/theme-options';

export const ColorModeContext = createContext({
  toggleColorMode: () => {
  },
});

export const App = () => {
  const [mode, setMode] = useState<'dark' | 'light'>('dark');

  const colorMode = useMemo(
    () => ({
      toggleColorMode: () => {
        setMode(prevMode => prevMode === 'light' ? 'dark' : 'light');
      },
    }), [],
  );

  const theme = useMemo(
    () =>
      createTheme({
        ...themeOptions,
        palette: {
          mode,
        },
      }), [mode],
  );

  return (
    <ColorModeContext.Provider value={ colorMode }>
      <ThemeProvider theme={ theme }>
        <CssBaseline/>
        <Box
          sx={ {
            backgroundSize: 'cover',
            backgroundRepeat: 'repeat-y',
            backgroundPosition: 'center',
            backgroundImage: `url('/itsc-team-pres-bg-done.png')`,
          } }
        >
          <Header/>
          <Container
            component={ 'main' }
          >
            <About/>
            <CardContainer/>
          </Container>
        </Box>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
};

