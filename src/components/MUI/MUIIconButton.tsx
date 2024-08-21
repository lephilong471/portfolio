import IconButton, { IconButtonProps } from '@mui/material/IconButton';
import React from 'react';

type MUIIconButtonProps = IconButtonProps & {};

const MUIIconButton = (props: MUIIconButtonProps) => {
  return (
    <>
      <IconButton {...props} />
    </>
  );
};

export default MUIIconButton;
