import Grid, { GridProps } from '@mui/material/Grid';
import React from 'react';

type MUIGridProps = GridProps & {};

const MUIGrid = (props: MUIGridProps) => {
  return (
    <>
      <Grid {...props} />
    </>
  );
};

export default MUIGrid;
