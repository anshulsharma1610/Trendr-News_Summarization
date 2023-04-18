import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    open: false,
    message: "",
    color: "success",
    vertical: "top",
    horizontal: "center"
};

const snackbarSlice = createSlice({
    name: "snackbar",
    initialState,
    reducers: {
        setSnackbar: (state, action) => {
            console.log('-------satte at snackbarr', action)
            return {
                ...state,
                open: true,
                message: action.payload.message,
                color: action.payload.color ? action.payload.color : "success",
                vertical: action.payload.vertical ? action.payload.vertical : "top",
                horizontal: action.payload.horizontal ? action.payload.horizontal : "center"
            };
        },
        clearSnackbar: (state, action) => {
            return {
                ...state,
                open: false,
                message: "",
                color: "success",
                vertical: "top",
                horizontal: "center"
            };
        },
    },
});

export const { setSnackbar, clearSnackbar } = snackbarSlice.actions;
export default snackbarSlice.reducer;