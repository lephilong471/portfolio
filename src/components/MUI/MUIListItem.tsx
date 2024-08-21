import ListItem, { ListItemProps } from '@mui/material/ListItem';
import React from 'react';

type MUIListItemProps = ListItemProps & {};

const MUIListItem = (props: MUIListItemProps) => {
  return (
    <>
      <ListItem {...props} />
    </>
  );
};

export default MUIListItem;
