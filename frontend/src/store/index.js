// import { createStore } from 'redux';
// import reducer from './reducer';

// // ==============================|| REDUX - MAIN STORE ||============================== //

// const store = createStore(reducer);
// const persister = 'Free';

// export { store, persister };

import { configureStore } from '@reduxjs/toolkit'
import customizationReducer from './customizationReducer';

const store = configureStore({
    reducer: {
        // Add reducers here
        customization: customizationReducer
    }
});

export { store };