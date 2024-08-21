import CardActions, { CardActionsProps } from '@mui/material/CardActions';
import React from 'react';

type MUICardActionsProps = CardActionsProps & {};

const MUICardActions = (props: MUICardActionsProps) => {
  return (
    <>
      <CardActions {...props} />
    </>
  );
};

export default MUICardActions;
