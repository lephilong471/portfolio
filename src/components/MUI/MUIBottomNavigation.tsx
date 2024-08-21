import BottomNavigation, {BottomNavigationProps} from '@mui/material/BottomNavigation';
import React from 'react';

type MUIBottomNavigationProps = BottomNavigationProps & {};

const MUIBottomNavigation = (props: MUIBottomNavigationProps) => {
  return (
    <>
      <BottomNavigation {...props} />
    </>
  );
};

export default MUIBottomNavigation;
