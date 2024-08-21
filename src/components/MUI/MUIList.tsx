import List, { ListProps } from '@mui/material/List';
import React from 'react';

type MUIListProps = ListProps & {};

const MUIList = (props: MUIListProps) => {
  return (
    <>
      <List {...props} />
    </>
  );
};

export default MUIList;
