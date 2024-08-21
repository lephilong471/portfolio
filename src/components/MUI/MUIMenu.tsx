import Menu, {MenuProps} from '@mui/material/Menu';
import React from 'react';

type MUIMenuProps = MenuProps & {};

const MUIMenu = (props: MUIMenuProps) => {
  return (
    <>
      <Menu {...props} />
    </>
  );
};

export default MUIMenu;
