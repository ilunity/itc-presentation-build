import React from 'react';
import { AboutProps } from './about.types';
import { Grid, Paper, Typography, useMediaQuery, useTheme } from '@mui/material';

const formattedText = (
  `Мы орешки не простые-
В каждом мысли золотые.
Трудностям мы скажем “Нет”,
Tinkoff команде шлём привет!
На любой вопрос заумный
Мы дадим ответ нетрудный
-Чтобы каждый мог понять
И другому передать.
`);

export const About: React.FC<AboutProps> = () => {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up('sm'));

  return (
    <Grid
      container
      sx={ {
        flexDirection: 'column',
        justifyContent: 'flex-end',
        alignItems: 'center',
        mb: 6,
      } }
    >
      <Grid item height={ '85%' }>
        <Paper
          sx={ {
            maxWidth: 600,
            p: 4,
            display: 'flex',
            flexDirection: 'column',
            textAlign: 'center',
          } }
        >
          <Typography variant={ 'h2' } gutterBottom>
            О НАС
          </Typography>
          <Typography variant={ 'h5' } paragraph>
            Мы - база, основание.
          </Typography>
          <Typography variant={ 'h5' } paragraph mb={ 5 }>
            Каждый из нас - професи анал своего дела
            и к работемы подходим основательно,
            без рофлов и кринжа.
          </Typography>
          <Typography
            variant={ matches ? 'h5' : 'h6' }
            component={ 'pre' }
          >
            { formattedText }
          </Typography>
          <Typography variant={ 'body1' } paragraph mt={ 5 } color={ 'text.secondary' }>
            *Шрифт если чо не с Майнкрафта
          </Typography>
        </Paper>
      </Grid>
    </Grid>
  );
};

