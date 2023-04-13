import config from 'config';
import { createSlice } from '@reduxjs/toolkit';
import * as actionTypes from '../actions';

const initialState = {
    user: {
        id: 1,
        name: 'John Doe',
        email: 'john@doe.com',
        avatar: config.defaultAvatar,
        role: 'admin',
        status: 'active'
    }
};

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        addUser: (state, action) => {
            return state
        },
        removeUser: (state, action) => {
            return state
        }
    },
})

// Action creators are generated for each case reducer function
export const { userReducer } = userSlice.actions;

export default userSlice.reducer;
