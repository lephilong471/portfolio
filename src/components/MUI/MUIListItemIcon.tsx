import ListItemIcon, { ListItemIconProps } from '@mui/material/ListItemIcon';
import React from 'react';

type MUIListItemIconProps = ListItemIconProps & {};

const MUIListItemIcon = (props: MUIListItemIconProps) => {
  return (
    <>
      <ListItemIcon {...props} />
    </>
  );
};

export default MUIListItemIcon;
