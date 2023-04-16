import { useSelector } from 'react-redux';

import { ThemeProvider } from '@mui/material/styles';
import { CssBaseline, StyledEngineProvider } from '@mui/material';
// import dotenv from 'dotenv';
// dotenv.config();

// routing
import Routes from 'routes';

// defaultTheme
import themes from 'themes';

// ==============================|| APP ||============================== //

const App = () => {
    const customization = useSelector((state) => state.customization);

    return (
        <StyledEngineProvider injectFirst>
            <ThemeProvider theme={themes(customization)}>
                <CssBaseline />
                <Routes />
            </ThemeProvider>
        </StyledEngineProvider>
    );
};

export default App;
