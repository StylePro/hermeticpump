import React, {useState} from 'react';
import {useSelector} from "react-redux";


const GeneratePump = () => {
    const pump = useSelector(store => store.pump.currentValue)
    const propertiesPumps = useSelector(store => store.optionsPumps.property)
    const [code, setCode] = useState(null)

    function getPump() {
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

        function getCodeExplosionProtection () {
            if (explosionProtection === 'Да') {
                codeExplosionProtection = 2
            } else if (explosionProtection === 'Нет'){
                codeExplosionProtection = 1
            }
        }

        propertiesPumps.map(el => {
            switch (el.valueEng) {
                case 'flow':
                    flow = el.currentValue
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
                    getCodeExplosionProtection ()
                    break;
            }
        })
    }
    return (
        <div>
            <button
                disabled
                onClick={getPump}
            >Сформировать код
            </button>
            <div>{code}</div>
        </div>
    )
};

export default GeneratePump;