import ListItemButton, {
  ListItemButtonProps
} from '@mui/material/ListItemButton';
import React from 'react';

type MUIListItemButtonProps = ListItemButtonProps & {};

const MUIListItemButton = (props: MUIListItemButtonProps) => {
  return (
    <>
      <ListItemButton {...props} />
    </>
  );
};

export default MUIListItemButton;
