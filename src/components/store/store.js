import {configureStore} from "@reduxjs/toolkit";
import pumpReducer from './pumpSlice'
import pumpOptionsReducer from './optionsPumpSlice'
import pumpBrandReducer from './pumpBrandSlice'

export default configureStore ({
    reducer: {
        pump: pumpReducer,
        optionsPumps: pumpOptionsReducer,
        pumpBrand: pumpBrandReducer,
    }
});

