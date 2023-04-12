// // project imports
// import config from 'config';

// // action - state management
// import * as actionTypes from './actions';

// export const initialState = {
//     isOpen: [], // for active default menu
//     defaultId: 'default',
//     fontFamily: config.fontFamily,
//     borderRadius: config.borderRadius,
//     opened: true
// };

// // ==============================|| CUSTOMIZATION REDUCER ||============================== //

// const customizationReducer = (state = initialState, action) => {
//     let id;
//     switch (action.type) {
//         case actionTypes.MENU_OPEN:
//             id = action.id;
//             return {
//                 ...state,
//                 isOpen: [id]
//             };
//         case actionTypes.SET_MENU:
//             return {
//                 ...state,
//                 opened: action.opened
//             };
//         case actionTypes.SET_FONT_FAMILY:
//             return {
//                 ...state,
//                 fontFamily: action.fontFamily
//             };
//         case actionTypes.SET_BORDER_RADIUS:
//             return {
//                 ...state,
//                 borderRadius: action.borderRadius
//             };
//         default:
//             return state;
//     }
// };

// export default customizationReducer;

import config from 'config';
import { createSlice } from '@reduxjs/toolkit';
import * as actionTypes from './actions';

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
        customizationReducer: (state, action) => {
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
export const { customizationReducer } = customizationSlice.actions;

export default customizationSlice.reducer;
