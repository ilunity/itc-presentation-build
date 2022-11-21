import React from 'react';
import { CardContainerProps } from './card-container.types';
import { Container, Grid } from '@mui/material';
import { cards } from '../../utils/mock/cards';
import { CardPerson } from '../card-person';

export const CardContainer: React.FC<CardContainerProps> = () => {
  return (
    <Container>
      <Grid
        container
        spacing={ 4 }
        justifyContent={ 'center' }
      >
        { cards.map(card =>
          <CardPerson key={ card.id }{ ...card }/>,
        ) }
      </Grid>
    </Container>
  );
};
