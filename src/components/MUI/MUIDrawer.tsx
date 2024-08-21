import Drawer, { DrawerProps } from '@mui/material/Drawer';
import React from 'react';

type MUIDrawerProps = DrawerProps & {};

const MUIDrawer = (props: MUIDrawerProps) => {
  return (
    <>
      <Drawer {...props} />
    </>
  );
};

export default MUIDrawer;
