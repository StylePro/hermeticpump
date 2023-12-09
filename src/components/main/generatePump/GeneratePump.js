import React, {useState} from 'react';
import {useSelector} from "react-redux";
import {ALL_PUMP} from "../../../const/const";


const GeneratePump = ({toggleOpenBlock, openBlock}) => {
    const pumpConst = useSelector(store => store.pump.currentPermanentName)
    const pump = useSelector(store => store.pump.currentValue)
    const propertiesPumps = useSelector(store => store.optionsPumps.property)
    const [data, setData] = useState('')
    const [error, setError] = useState(false)
    console.log(data)
    function getPump() {
        if (!pumpConst) {
            return setData('')
        }
        function validationOfFillingInFields() {
            let res = propertiesPumps.filter(el => {
                if (el.requiredField === true && el.typePump === ALL_PUMP || el.typePump === pumpConst) {
                    return (el)
                }
            }).every(elem => elem.currentValue)
            if (res) {
                setError(false)
            } else {setError(true)}
        }
        validationOfFillingInFields()

        let flow = null
        let head = null
        let material = null
        let codeMaterial = null
        let density = null
        let codeDensity = null
        let explosionProtection = null
        let codeExplosionProtection = null

        function getCodeMaterial() {
            switch (material) {
                case '12Х18Н10Б':
                    codeMaterial = '13'
                    break;
                case '10Х17Н13М2Б':
                    codeMaterial = '14'
                    break;
                case '06ХН28МДБ':
                    codeMaterial = '02'
                    break;
                case 'PVDF(Solef)':
                    codeMaterial = '82'
                    break;
                case 'PFA(Teflon)':
                    codeMaterial = '85'
                    break;
            }

        }

        function getCodeDensity() {
            if (density <= 600) {
                return codeDensity = 3
            } else if (density > 600 && density <= 800) {
                return codeDensity = 4
            } else if (density > 800 && density < 1200) {
                return codeDensity = 5
            } else if (density >= 1200 && density <= 1600) {
                return codeDensity = 6
            } else if (density > 1600 && density <= 2000) {
                return codeDensity = 7
            } else {
                return codeDensity = 'error'
            }
        }

        function getCodeExplosionProtection() {
            if (explosionProtection === 'Да') {
                codeExplosionProtection = 2
            } else if (explosionProtection === 'Нет') {
                codeExplosionProtection = 1
            }
        }

        propertiesPumps.forEach(el => {
            switch (el.valueEng) {
                case 'flow':
                    if (el.currentValue) {
                        flow = el.currentValue
                    }
                    break;
                case 'head':
                    head = el.currentValue
                    break;
                case 'material':
                    material = el.currentValue
                    getCodeMaterial()
                    break;
                case 'density':
                    density = el.currentValue
                    getCodeDensity()
                    break;
                case 'availabilityOfExplosionProtection':
                    explosionProtection = el.currentValue
                    getCodeExplosionProtection()
                    break;
            }
        })
        toggleOpenBlock(true)
        setData(`${pump}${flow}/${head}.${codeMaterial}${codeDensity}${codeExplosionProtection}`)
    }

    return (
        <div>
            <button
                onClick={getPump}
                onBlur={()=> setError(false)}
            >Сформировать код
            </button>
            {openBlock ?
                <div>{error? 'Заполните обязательные поля' : data}</div>
                : ''}
        </div>
    )
};

export default GeneratePump;