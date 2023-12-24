import React, {useState} from 'react';
import {useSelector} from "react-redux";
import {ALL_PUMP} from "../../../const/const";


const GeneratePump = ({toggleOpenBlock, openBlock}) => {


    const pumpConst = useSelector(store => store.pump.currentPermanentName)
    const pump = useSelector(store => store.pump.currentValue)
    const propertiesPumps = useSelector(store => store.optionsPumps.property)
    const [data, setData] = useState('')
    const [error, setError] = useState(false)

        // проверяем все ли поля заполнены
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
            dataProcessing(values)
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
                return  4
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
        console.log(generateMaterialKey(data.material))
        console.log(generateDensityKey(data.density))
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
    /*function getPump() {
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
    }*/

    return (
        <div>
            <button
                onClick={getPump}
            >Сформировать код
            </button>
        </div>
    )
};

export default GeneratePump;