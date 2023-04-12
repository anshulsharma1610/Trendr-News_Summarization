import { useSelector } from 'react-redux';

import { ThemeProvider } from '@mui/material/styles';
import { CssBaseline, StyledEngineProvider } from '@mui/material';

// routing
import Routes from 'routes';
// ==============================|| APP ||============================== //

const App = () => {
    return (
        <StyledEngineProvider injectFirst>
            <CssBaseline />
            <Routes />
        </StyledEngineProvider>
    );
};

export default App;
