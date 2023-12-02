import {configureStore} from "@reduxjs/toolkit";
import pumpReducer from './pumpSlice'
import pumpOptionsReducer from './optionsPumpSlice'

export default configureStore ({
    reducer: {
        pump: pumpReducer,
        optionsPumps: pumpOptionsReducer,
    }
});

