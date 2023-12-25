import React, {useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {ALL_PUMP} from "../../../const/const";
import store from "../../store/store";
import {addBrandPump} from "../../store/pumpBrandSlice";


const GeneratePump = () => {


    const pumpConst = useSelector(store => store.pump.currentPermanentName)
    const pump = useSelector(store => store.pump.currentValue)
    const propertiesPumps = useSelector(store => store.optionsPumps.property)
    const pumpBrand = useSelector(store=> store.pumpBrand.currentValue)
    const [error, setError] = useState(false)
    const dispatch = useDispatch()

    function getError () {
        const verificationFields = propertiesPumps
            .filter(el=> el.requiredField === true && el.typePump === ALL_PUMP || el.typePump === pumpConst)
            .every(el=> el.currentValue)
       return(verificationFields)
    }

    function getPump() {
        const result = getError()
        getError()
        if (result){
           const values = getValues()
            dispatch(addBrandPump(`${pump}${values.flow}/${values.head}.${dataProcessing(values)}`))
        } else {
            setError(true);
            console.log(error)
        }
    }
    function dataProcessing(data){
        function generateMaterialKey(string){
            switch (string) {
                case '12Х18Н10Б':
                    return '13'
                case '10Х17Н13М2Б':
                    return '14'
                case '06ХН28МДБ':
                    return '02'
                case 'PVDF(Solef)':
                    return '82'
                case 'PFA(Teflon)':
                    return '85'
            }
        }
        function generateDensityKey(density){
            if (density <= 600) {
                return 3
            }
            if (density > 600 && density <= 800) {
                return 4
            }
            if (density > 800 && density < 1200) {
                return 5
            }
            if (density >= 1200 && density <= 1600) {
                return 6
            }
            if (density > 1600) {
                return 7
            }
        }
        function eX (string) {
            if (string === "Да"){
                return 2
            }
            if (string === 'Нет'){
                return 1
            }
        }
        const keyMaterial = generateMaterialKey(data.material)
        const keyDensity = generateDensityKey(data.density)
        const keyEx = eX(data.availabilityOfExplosionProtection)
        return (keyMaterial + keyDensity + keyEx)
    }

    function getValues() {
        const elements = propertiesPumps.reduce((acc, el)=> {
            if(el.currentValue) {
                acc[el.valueEng] = el.currentValue
            }
            return acc
        }, {})
        return(elements)
    }

    return (
        <div>
            <button
                onClick={getPump}
            >Сформировать код
            </button>
            <div>{pumpBrand}</div>
        </div>
    )
};

export default GeneratePump;