import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { setMessage } from "./messageSlice";
import { userSubbed } from "./subscriptionSlice";

import AuthService from "services/authService";

const user = JSON.parse(localStorage.getItem("user"));

export const register = createAsyncThunk(
    "auth/register",
    async ({ fname, lname, email, password }, thunkAPI) => {
        try {
            const data = await AuthService.register(fname, lname, email, password);
            if (data.userSubscription && data.userSubscription.userSub)
                thunkAPI.dispatch(userSubbed());
            thunkAPI.dispatch(setMessage(data.message));
            return { user: data };
        } catch (error) {
            const message =
                (error.response &&
                    error.response.data &&
                    error.response.data.message) ||
                error.message ||
                error.toString();
            thunkAPI.dispatch(setMessage(message));
            return thunkAPI.rejectWithValue();
        }
    }
);

export const login = createAsyncThunk(
    "auth/login",
    async ({ email, password }, thunkAPI) => {
        try {
            const data = await AuthService.login(email, password);

            console.log('anshul--login', data)
            if (data.userSubscription && data.userSubscription.userSub)
                thunkAPI.dispatch(userSubbed());
            thunkAPI.dispatch(setMessage(data.message));

            return { user: data };
        } catch (error) {
            const message =
                (error.response &&
                    error.response.data &&
                    error.response.data.message) ||
                error.message ||
                error.toString();
            thunkAPI.dispatch(setMessage(message));
            return thunkAPI.rejectWithValue();
        }
    }
);

export const googleLogin = createAsyncThunk(
    "auth/googleLogin",
    async (thunkAPI) => {
        try {
            const data = await AuthService.googleLogin()
                .then((userData) => {
                    console.log('User data:', userData);
                    return userData
                    // Do something with the user data
                }).catch((error) => {
                    console.error('Error:', error);
                    // Handle the error
                });

            console.log("here at succ", data)
            // thunkAPI.dispatch(setMessage(data.message));

            if (data.userSubscription && data.userSubscription.userSub)
                thunkAPI.dispatch(userSubbed());
            return { user: data };
        } catch (error) {
            const message =
                (error.response &&
                    error.response.data &&
                    error.response.data.message) ||
                error.message ||
                error.toString();
            console.log("here at err", error)
            thunkAPI.dispatch(setMessage(message));
            return thunkAPI.rejectWithValue();
        }
    }
);


export const logout = createAsyncThunk("auth/logout", async () => {
    await AuthService.logout();
});


const initialState = user
    ? { isLoggedIn: true, user }
    : { isLoggedIn: false, user: null };

const authSlice = createSlice({
    name: "auth",
    initialState,
    extraReducers: {
        [register.fulfilled]: (state, action) => {
            state.isLoggedIn = true;
            state.user = action.payload.user;
        },
        [register.rejected]: (state, action) => {
            state.isLoggedIn = false;
            state.user = null;
        },
        [login.fulfilled]: (state, action) => {
            state.isLoggedIn = true;
            state.user = action.payload.user;
        },
        [login.rejected]: (state, action) => {
            state.isLoggedIn = false;
            state.user = null;
        },
        [googleLogin.fulfilled]: (state, action) => {
            state.isLoggedIn = true;
            state.user = action.payload.user;
        },
        [googleLogin.rejected]: (state, action) => {
            state.isLoggedIn = false;
            state.user = null;
        },
        [logout.fulfilled]: (state, action) => {
            state.isLoggedIn = false;
            state.user = null;
        },
    },
});

const { reducer } = authSlice;
export default reducer;