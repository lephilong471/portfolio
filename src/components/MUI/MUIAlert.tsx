import Alert, { AlertProps } from '@mui/material/Alert';
import React from 'react';

type MUIBoxProps = AlertProps & {};

const MUIAlert = (props: MUIBoxProps) => {
  return (
    <>
      <Alert {...props} />
    </>
  );
};

export default MUIAlert;
