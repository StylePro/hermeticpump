import React, {useState} from 'react';
import {useSelector} from "react-redux";

import Item from './Item';
import {ALL_PUMP} from "../../../const/const";




const PumpCharacteristics = () => {

    const pump = useSelector(store => store.pump.currentPermanentName)
    const propertiesPumps = useSelector(store => store.optionsPumps.property)
    let filterOptionsPumps = propertiesPumps.filter(el=> el.typePump === ALL_PUMP || el.typePump === pump)

    return (
        <div>
            <>Заполните поля:</>
            {filterOptionsPumps.map(el => <Item key={el.id} el={el}/>)}
        </div>
    )
}

export default PumpCharacteristics;