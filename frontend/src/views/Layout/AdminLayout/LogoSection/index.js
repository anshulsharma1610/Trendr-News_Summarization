import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

// material-ui
import { ButtonBase } from '@mui/material';

// project imports
import config from 'config';
import { MENU_OPEN } from 'store/actions';
import { customize } from 'store/slices/customizationSlice';

// ==============================|| MAIN LOGO ||============================== //

const LogoSection = () => {
    const defaultId = useSelector((state) => state.customization.defaultId);
    const dispatch = useDispatch();
    return (
        <ButtonBase disableRipple onClick={() => dispatch(customize({ type: MENU_OPEN, id: defaultId }))} component={Link} to={config.defaultPath}>
            <h1>Trendr</h1>
        </ButtonBase>
    );
};

export default LogoSection;
