import { combineReducers } from '@reduxjs/toolkit';

// reducer import
import customizationReducer from './customizationSlice';
import userReducer from './userSlice';

// ==============================|| COMBINE REDUCER ||============================== //

export const reducers = combineReducers({
    customization: customizationReducer,
    user: userReducer
});

// export default reducers;
