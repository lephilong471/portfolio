import Link, { LinkProps } from '@mui/material/Link';
import React from 'react';

type MUILinkProps = LinkProps & {};

const MUIList = (props: MUILinkProps) => {
  return (
    <>
      <Link {...props} />
    </>
  );
};

export default MUIList;
