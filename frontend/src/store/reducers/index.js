import { combineReducers } from '@reduxjs/toolkit';

// reducer import
import customizationReducer from './customizationReducer';
import userReducer from './userReducer';

// ==============================|| COMBINE REDUCER ||============================== //

export const reducers = combineReducers({
    customization: customizationReducer,
    user: userReducer
});

// export default reducers;
