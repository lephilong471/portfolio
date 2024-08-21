import Paper, {PaperProps} from '@mui/material/Paper';
import React from 'react';

type MUIMenuItemProps = PaperProps & {};

const MUIPaper = (props: MUIMenuItemProps) => {
  return (
    <>
      <Paper {...props} />
    </>
  );
};

export default MUIPaper;
