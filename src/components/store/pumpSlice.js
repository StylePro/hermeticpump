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
        {id: uuidv4(), nameRus: 'ГХ', permanentName: GH_PUMP, image: GH},
        {id: uuidv4(), nameRus: 'ГХМ', permanentName: GHM_PUMP, image: GHM},
        {id: uuidv4(), nameRus: 'ГХО', permanentName: GHO_PUMP, image: GHO},
        {id: uuidv4(), nameRus: 'ГХC', permanentName: GHS_PUMP, image: GHS},
        {id: uuidv4(), nameRus: 'ГХИ', permanentName: GHI_PUMP, image: GHI},
    ],
}

const pumpSlice = createSlice({
    name: 'pump',
    initialState,
    reducers: {
        addPump(state, action) {
            let selectedObject = state.pumpSeries.find(el=> el.nameRus === action.payload)
            state.currentValue = action.payload
            state.currentPermanentName = selectedObject.permanentName
        },
    }
})

export const {addPump, clearFields,} = pumpSlice.actions
export default pumpSlice.reducer
