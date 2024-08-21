import Switch, {SwitchProps} from '@mui/material/Switch'

type MUISwitchProps = SwitchProps & {}

const MUISwitch = (props: MUISwitchProps) => {
    return (
        <>
            <Switch {...props} />
        </>
    )
}

export default MUISwitch