import {createSlice} from "@reduxjs/toolkit";
import { v4 as uuidv4 } from 'uuid';
import GH from '../../assets/GH.jpg'
import GHM from '../../assets/GHM.jpeg'
import GHO from '../../assets/GHO.jpeg'
import GHS from '../../assets/GHS.jpeg'
import GHI from '../../assets/GHI.jpeg'
import {GH_PUMP, GHI_PUMP, GHM_PUMP, GHO_PUMP, GHS_PUMP} from "../../const/const";



const initialState = {
    currentValue: '',
    currentPermanentName: '',
    pumpSeries: [
        {id: uuidv4(), nameRus: 'ГХ', typePump: GH_PUMP, image: GH},
        {id: uuidv4(), nameRus: 'ГХМ', typePump: GHM_PUMP, image: GHM},
        {id: uuidv4(), nameRus: 'ГХО', typePump: GHO_PUMP, image: GHO},
        {id: uuidv4(), nameRus: 'ГХC', typePump: GHS_PUMP, image: GHS},
        {id: uuidv4(), nameRus: 'ГХИ', typePump: GHI_PUMP, image: GHI},
    ],
}

const pumpSlice = createSlice({
    name: 'pump',
    initialState,
    reducers: {
        addPump(state, action) {
            let selectedObject = state.pumpSeries.find(el=> el.nameRus === action.payload)
            state.currentValue = action.payload
            state.currentPermanentName = selectedObject.typePump
        },
        removeSelection(state, action) {
            state.currentValue = action.payload
            state.currentPermanentName = action.payload
        }
    }
})

export const {addPump, removeSelection} = pumpSlice.actions
export default pumpSlice.reducer
