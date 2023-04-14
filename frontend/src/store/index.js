import { configureStore } from '@reduxjs/toolkit'
import customizationReducer from './slices/customizationSlice';
import authReducer from './slices/authSlice';
import messageReducer from './slices/messageSlice';
// import newsReducer from "./slices/newsSlice";
const store = configureStore({
    reducer: {
        // Add reducers here
        customization: customizationReducer,
        user: authReducer,
        message: messageReducer,
        // news: newsReducer
    }
});

export { store };