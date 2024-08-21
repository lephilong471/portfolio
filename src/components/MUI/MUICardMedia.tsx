import CardMedia, { CardMediaProps } from '@mui/material/CardMedia';
import React from 'react';

type MUICardMediaProps = CardMediaProps & {};

const MUICardMedia = (props: MUICardMediaProps) => {
  return (
    <>
      <CardMedia {...props} />
    </>
  );
};

export default MUICardMedia;
