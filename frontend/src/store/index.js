import { configureStore } from '@reduxjs/toolkit'
import customizationReducer from './reducers/customizationReducer';
import userReducer from './reducers/userReducer';

const store = configureStore({
    reducer: {
        // Add reducers here
        customization: customizationReducer,
        user: userReducer
    }
});

export { store };