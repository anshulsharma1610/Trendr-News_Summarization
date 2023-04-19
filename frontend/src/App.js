import * as React from 'react';
import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setSnackbar, clearSnackbar } from 'store/slices/snackbarSlice';
import { Route, Navigate } from 'react-router-dom';

import { ThemeProvider } from '@mui/material/styles';
import { CssBaseline, StyledEngineProvider } from '@mui/material';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';

// routing
import Routes from 'routes';

// defaultTheme
import themes from 'themes';

const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

// ==============================|| APP ||============================== //

const App = () => {
    const customization = useSelector((state) => state.customization);
    const snackbars = useSelector((state) => state.snackbar);
    const dispatch = useDispatch();
    const isAuthenticated = useSelector((state) => state.user.isLoggedIn);
    console.log('--isAuth', isAuthenticated)

    const vertical = snackbars.vertical;
    const horizontal = snackbars.horizontal;

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        dispatch(clearSnackbar());
    };

    return (
        <StyledEngineProvider injectFirst>
            <ThemeProvider theme={themes(customization)}>
                <CssBaseline />
                {snackbars.open &&
                    <Snackbar open={snackbars.open} autoHideDuration={3000} onClose={handleClose} anchorOrigin={{ vertical, horizontal }} >
                        <Alert onClose={handleClose} severity={snackbars.color} sx={{ width: '100%' }}>
                            {snackbars.message}
                        </Alert>
                    </Snackbar>
                }
                <Routes />
            </ThemeProvider>
        </StyledEngineProvider >
    );
};

export default App;
