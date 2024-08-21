import Typography, { TypographyProps } from '@mui/material/Typography';
import React from 'react';

type MUITypographyProps = TypographyProps & {};

const MUITypography = (props: MUITypographyProps) => {
  return (
    <>
      <Typography {...props} />
    </>
  );
};

export default MUITypography;
