import Collapse, { CollapseProps } from '@mui/material/Collapse';
import React from 'react';

type MUICollapseProps = CollapseProps & {};

const MUICollapse = (props: MUICollapseProps) => {
  return (
    <>
      <Collapse {...props} />
    </>
  );
};

export default MUICollapse;
