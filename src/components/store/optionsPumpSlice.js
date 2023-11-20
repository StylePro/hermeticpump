import {createSlice} from "@reduxjs/toolkit";
import {v4 as uuidv4} from "uuid";


const initialState = {
    property: [
        {id: uuidv4(), valueRus: 'Подача, м3/ч: ', valueEng: 'Flow', currentValue: '', type: 'number'},
        {id: uuidv4(), valueRus: 'Напор, м: ', valueEng: 'Head', currentValue: '', type: 'number'},
        {id: uuidv4(), valueRus: 'Материал проточной части: ', valueEng: 'Material', currentValue: '', type: 'select', optionSelect:
                [
                    {id: uuidv4(), material: '12Х18Н10Б', code: '13'},
                    {id: uuidv4(), material: '10Х17Н13М2Б', code: '14'},
                    {id: uuidv4(), material: '06ХН28МДБ', code: '02'},
                    {id: uuidv4(), material: 'PVDF(Solef)', code: '82'},
                    {id: uuidv4(), material: 'PFA(Teflon)', code: '85'},
                ]},
        {id: uuidv4(), valueRus: 'Плотность, кг/м3: ', valueEng: 'density', currentValue: '', type: 'number'},
        {id: uuidv4(), valueRus: 'Рабочая температура, град С: ', valueEng: 'temperature', currentValue: '', type: 'number'},
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
