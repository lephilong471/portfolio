import CardContent, { CardContentProps } from '@mui/material/CardContent';
import React from 'react';

type MUICardContentProps = CardContentProps & {};

const MUICardContent = (props: MUICardContentProps) => {
  return (
    <>
      <CardContent {...props} />
    </>
  );
};

export default MUICardContent;
