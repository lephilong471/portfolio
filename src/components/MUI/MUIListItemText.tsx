import ListItemText, {ListItemTextProps} from '@mui/material/ListItemText';
import React from 'react';

type MUIListItemTextProps = ListItemTextProps & {};

const MUITypography = (props: MUIListItemTextProps) => {
  return (
    <>
      <ListItemText {...props} />
    </>
  );
};

export default MUITypography;
