import React from 'react';
import {useSelector} from "react-redux";


const GeneratePump = () => {

    const propertiesPumps = useSelector(store => store.optionsPumps.property)
    console.log(propertiesPumps)

    function getPump() {
        let key = ''
        console.log(key)
        function getCodeMaterial() {
            propertiesPumps.map(el => {
                switch (el.currentValue) {
                    case '12Х18Н10Б':
                        key = '13'
                        break;
                    case '10Х17Н13М2Б':
                        key = '14'
                        break;
                    case '06ХН28МДБ':
                        key = '02'
                        break;
                    case 'PVDF(Solef)':
                        key = '82'
                        break;
                    case 'PFA(Teflon)':
                        key = '85'
                        break;
                    default:
                        key = ''
                }
            })
        }
        getCodeMaterial()
        let flow = ''
        let head = ''
        let material = ''
        propertiesPumps.map((el) => {
            switch (el.valueEng) {
                case 'flow':
                    flow = el.currentValue
                    break;
                case 'head':
                    head = el.currentValue
                    break
                case 'material':
                    material = el.currentValue
            }
        })
        console.log(`${flow}/${head}.${key}`)

    }

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