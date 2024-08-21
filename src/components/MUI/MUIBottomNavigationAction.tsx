import BottomNavigationAction, {BottomNavigationActionProps} from '@mui/material/BottomNavigationAction'
import React from 'react';

type MUIBottomNavigationActionProps = BottomNavigationActionProps & {}

const MUIBottomNavigationAction = (props: MUIBottomNavigationActionProps) => {
    return (
        <>
            <BottomNavigationAction {...props} />
        </>
    )
}

export default MUIBottomNavigationAction