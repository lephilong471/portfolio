import Popover, {PopoverProps} from '@mui/material/Popover'

type MUIPopoverProps = PopoverProps & {}

const MUIPopover = (props: MUIPopoverProps) => {
    return (
        <>
            <Popover 
                sx={{
                    '.MuiPaper-root':{
                        boxShadow:'none !important'
                    }
                }}
            {...props} />
        </>
    )
}

export default MUIPopover