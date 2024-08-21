import TextField, {TextFieldProps} from '@mui/material/TextField'

type MUISwitchProps = TextFieldProps & {}

const MUISwitch = (props: MUISwitchProps) => {
    return (
        <>
            <TextField {...props} />
        </>
    )
}

export default MUISwitch