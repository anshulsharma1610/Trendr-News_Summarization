import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isUserSubbed: false,
};

const subSlice = createSlice({
    name: "sub",
    initialState,
    reducers: {
        userSubbed: (state, action) => {
            return {
                isUserSubbed: true,
            };
        },
        clearUserSub: (state, action) => {
            return {
                isUserSubbed: false,
            };
        }
    },
});

export const { userSubbed, clearUserSub } = subSlice.actions;
export default subSlice.reducer;