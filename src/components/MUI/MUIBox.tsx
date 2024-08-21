import Box, { BoxProps } from '@mui/material/Box';
import React from 'react';

type MUIBoxProps = BoxProps & {};

const MUIBox = (props: MUIBoxProps) => {
  return (
    <>
      <Box {...props} />
    </>
  );
};

export default MUIBox;
