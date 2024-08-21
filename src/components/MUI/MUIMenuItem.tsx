import MenuItem, {MenuItemProps} from '@mui/material/MenuItem';
import React from 'react';

type MUIMenuItemProps = MenuItemProps & {};

const MUIMenuItem = (props: MUIMenuItemProps) => {
  return (
    <>
      <MenuItem {...props} />
    </>
  );
};

export default MUIMenuItem;
