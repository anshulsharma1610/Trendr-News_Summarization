import config from 'config';
import { createSlice } from '@reduxjs/toolkit';
import * as actionTypes from '../actions';

const initialState = {
    isOpen: [], // for active default menu
    defaultId: 'default',
    fontFamily: config.fontFamily,
    borderRadius: config.borderRadius,
    opened: true
}

export const customizationSlice = createSlice({
    name: 'customization',
    initialState,
    reducers: {
        customize: (state, action) => {
            console.log('-------state action in slice', state, action.payload)
            let id;
            switch (action.payload.type) {
                case actionTypes.MENU_OPEN:
                    id = action.payload.id;
                    return {
                        ...state,
                        isOpen: [id]
                    };
                case actionTypes.SET_MENU:
                    console.log('-------state action in SET_MENU', state, action.payload)
                    return {
                        ...state,
                        opened: action.payload.opened
                    };
                case actionTypes.SET_FONT_FAMILY:
                    return {
                        ...state,
                        fontFamily: action.payload.fontFamily
                    };
                case actionTypes.SET_BORDER_RADIUS:
                    return {
                        ...state,
                        borderRadius: action.payload.borderRadius
                    };
                default:
                    return state;
            }
        }
    },
})

// Action creators are generated for each case reducer function
export const { customize } = customizationSlice.actions;

export default customizationSlice.reducer;
