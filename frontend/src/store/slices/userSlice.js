import config from 'config';
import { createSlice } from '@reduxjs/toolkit';

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
export const { addUser, removeUser } = userSlice.actions;
export default userSlice.reducer;
