import React from 'react';
import {useSelector} from "react-redux";

const ImagePump = () => {
    const image = useSelector(state=> state.pump.pumpSeries)
    const pumpSelected = useSelector(store => store.pump.currentValue)
    return (
        <div>
            {image.map(el=> el.nameRus === pumpSelected && <img key={el.id} src={el.image} alt=""/>)}
        </div>
    );
};


export default ImagePump;