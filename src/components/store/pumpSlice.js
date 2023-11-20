import {createSlice} from "@reduxjs/toolkit";
import { v4 as uuidv4 } from 'uuid';
import GH from '../../assets/GH.jpg'
import GHM from '../../assets/GHM.jpeg'
import GHO from '../../assets/GHO.jpeg'
import GHS from '../../assets/GHS.jpeg'
import GHI from '../../assets/GHI.jpeg'


const initialState = {
    currentValue: '',
    pumpSeries: [
        {id: uuidv4(), nameRus: 'ГХ', nameEng: 'GH', image: GH},
        {id: uuidv4(), nameRus: 'ГХМ', nameEng: 'GHM', image: GHM},
        {id: uuidv4(), nameRus: 'ГХО', nameEng: 'GHО', image: GHO},
        {id: uuidv4(), nameRus: 'ГХC', nameEng: 'GHS', image: GHS},
        {id: uuidv4(), nameRus: 'ГХИ', nameEng: 'GHI', image: GHI},
    ],
}

const pumpSlice = createSlice({
    name: 'pump',
    initialState,
    reducers: {
        addPump(state, action) {
            state.currentValue = action.payload
        }
    }
})

export const {addPump} = pumpSlice.actions
export default pumpSlice.reducer
