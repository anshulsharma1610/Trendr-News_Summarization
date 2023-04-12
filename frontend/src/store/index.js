import { configureStore } from '@reduxjs/toolkit'
import customizationReducer from './slices/customizationSlice';
import userReducer from './slices/userSlice';

const store = configureStore({
    reducer: {
        // Add reducers here
        customization: customizationReducer,
        user: userReducer
    }
});

export { store };