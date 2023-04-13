import { configureStore } from '@reduxjs/toolkit'
import customizationReducer from './slices/customizationSlice';
import authReducer from './slices/authSlice';
import messageReducer from './slices/messageSlice';

const store = configureStore({
    reducer: {
        // Add reducers here
        customization: customizationReducer,
        user: authReducer,
        message: messageReducer
    }
});

export { store };