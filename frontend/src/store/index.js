import { configureStore } from '@reduxjs/toolkit'
import customizationReducer from './reducers/customizationReducer';


const store = configureStore({
    reducer: {
        // Add reducers here
        customization: customizationReducer,
        // user: userReducer
    }
});

export { store };