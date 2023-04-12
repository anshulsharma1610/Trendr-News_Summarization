import { combineReducers } from '@reduxjs/toolkit';

// reducer import
import customizationReducer from './customizationSlice';
import userReducer from './authSlice';

// ==============================|| COMBINE REDUCER ||============================== //

export const reducers = combineReducers({
    customization: customizationReducer,
    user: userReducer
});

// export default reducers;
