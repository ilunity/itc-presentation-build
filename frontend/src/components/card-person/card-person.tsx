import React from 'react';
import { CardPersonProps } from './card-person.types';
import { Card, CardActionArea, CardContent, CardMedia, Grid } from '@mui/material';
import { CardProperty } from '../card-property';

export const CardPerson = ({ img, name, role, speciality, course }: CardPersonProps) => {
  const onClick = () => {
    alert(`It is the ${ name }!`);
  };

  return (
    <Grid item xs={ 12 } sm={ 6 } md={ 4 } xl={ 3 }>
      <CardActionArea
        onClick={ onClick }
      >
        <Card>
          <CardMedia
            component="img"
            image={ img }
            height={ '300px' }
          />
          <CardContent>
            <CardProperty title={ 'Name' } value={ name }/>
            <CardProperty title={ 'Role' } value={ role }/>
            <CardProperty title={ 'Speciality' } value={ speciality }/>
            <CardProperty title={ 'Course' } value={ course }/>
          </CardContent>
        </Card>
      </CardActionArea>
    </Grid>
  );
};
