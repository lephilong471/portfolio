import Card, { CardProps } from '@mui/material/Card';
import React from 'react';

type MUICardProps = CardProps & {};

const MUICard = (props: MUICardProps) => {
  return (
    <>
      <Card {...props} />
    </>
  );
};

export default MUICard;
