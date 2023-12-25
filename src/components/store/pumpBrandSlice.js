import {createSlice} from "@reduxjs/toolkit";


const initialState = {
    currentValue: '',
}

const pumpBrandSlice = createSlice({
    name: 'pumpBrand',
    initialState,
    reducers: {
        addBrandPump(state, action){
            state.currentValue = action.payload
        },
        cleanBrandPump(){
            return (initialState)
        }
        },
    }
    )

export const {
    addBrandPump,
    cleanBrandPump,
} = pumpBrandSlice.actions
export default pumpBrandSlice.reducer
