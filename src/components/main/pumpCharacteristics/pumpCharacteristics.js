import React from 'react';
import {useSelector} from "react-redux";

import Item from './Item';



const PumpCharacteristics = () => {

    const propertiesPumps = useSelector(store => store.optionsPumps.property)
    return (
        <div>
            {propertiesPumps.map(el => <Item key={el.id} el={el}/>)}
        </div>
    )
}

export default PumpCharacteristics;