import { configureStore } from '@reduxjs/toolkit'
import customizationReducer from './slices/customizationSlice';
import authReducer from './slices/authSlice';
import messageReducer from './slices/messageSlice';
import snackbarReducer from "./slices/snackbarSlice";

const store = configureStore({
    reducer: {
        // Add reducers here
        customization: customizationReducer,
        user: authReducer,
        message: messageReducer,
        snackbar: snackbarReducer
    }
});

export { store };