import {createSlice} from "@reduxjs/toolkit";
import {v4 as uuidv4} from "uuid";
import {ALL_PUMP, GHI_PUMP} from "../../const/const";






const initialState = {
    property: [
        {id: uuidv4(), valueRus: 'Подача, м3/ч: ', valueEng: 'flow', currentValue: '', type: 'number', typePump: ALL_PUMP},
        {id: uuidv4(), valueRus: 'Напор, м: ', valueEng: 'head', currentValue: '', type: 'number', typePump: ALL_PUMP},
        {id: uuidv4(), valueRus: 'Давление на входе, МПа: ', valueEng: 'inletPressure', currentValue: '', type: 'number', typePump: ALL_PUMP},
        {id: uuidv4(), valueRus: 'Давление на выходе, МПа: ', valueEng: 'outletPressure', currentValue: '', type: 'number', typePump: ALL_PUMP},
        {id: uuidv4(), valueRus: 'Материал проточной части: ', valueEng: 'material', currentValue: '', type: 'select', optionSelect:
                [
                    {id: uuidv4(), material: '12Х18Н10Б'},
                    {id: uuidv4(), material: '10Х17Н13М2Б'},
                    {id: uuidv4(), material: '06ХН28МДБ'},
                    {id: uuidv4(), material: 'PVDF(Solef)'},
                    {id: uuidv4(), material: 'PFA(Teflon)'},
                ], typePump: ALL_PUMP},
        {id: uuidv4(), valueRus: 'Плотность, кг/м3: ', valueEng: 'density', currentValue: '', type: 'number', typePump: ALL_PUMP},
        {id: uuidv4(), valueRus: 'Рабочая температура, град С: ', valueEng: 'temperature', currentValue: '', type: 'number', typePump: ALL_PUMP},
        {id: uuidv4(), valueRus: 'Глубина погружения: ', valueEng: 'depth', currentValue: '', type: 'number', typePump: GHI_PUMP},
        {id: uuidv4(), valueRus: 'Опорная плита (ГОСТ 33259-2015): ', valueEng: 'basePlate', currentValue: '', type: 'select', optionSelect:
                [
                    {id: uuidv4(), material: '600-6-01-1-B'},
                    {id: uuidv4(), material: '700-6-01-1-B'},
                    {id: uuidv4(), material: '800-6-01-1-B'},
                    {id: uuidv4(), material: '900-6-01-1-B'},
                    {id: uuidv4(), material: '1000-6-01-1-B'},
                ], typePump: GHI_PUMP},
    ]
}
const pumpOptionsSlice = createSlice({
    name: 'optionsPumps',
    initialState,
    reducers: {
        changeInput(state, action) {
            const {text, id} = action.payload
            let str = state.property.find(el=> el.id === id)
            str.currentValue=text
        },
        changeSelect(state, action) {
            const {text, id} = action.payload
            let str = state.property.find(el=> el.id === id)
            str.currentValue=text
        }
    }
})

export const {
    changeInput,
    changeSelect
} = pumpOptionsSlice.actions
export default pumpOptionsSlice.reducer
