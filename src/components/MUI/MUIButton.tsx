import Button, { ButtonProps } from '@mui/material/Button';
import React from 'react';

type MUIButtonProps = ButtonProps & {};

const MUIButton = (props: MUIButtonProps) => {
  return (
    <>
      <Button {...props} />
    </>
  );
};

export default MUIButton;
