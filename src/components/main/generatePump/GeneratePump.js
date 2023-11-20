import React from 'react';
import {useSelector} from "react-redux";


const GeneratePump = () => {

    const propertiesPumps = useSelector(store => store.optionsPumps.property)

    function getPump() {
        let flow = ''
        let head = ''
        let material = ''
        propertiesPumps.map((el) => {
            switch (el.valueEng) {
                case 'Flow':
                    flow = el.currentValue
                    break;
                case 'Head':
                    head = el.currentValue
                    break
                case 'Material':
                    material = el.currentValue
            }
        })
        console.log(`${flow}/${head}`)

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