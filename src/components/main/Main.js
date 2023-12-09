import React, {useState} from 'react';

import PumpSelected from "./pumpSelected/PumpSelected";
import PumpCharacteristics from "./pumpCharacteristics/pumpCharacteristics";
import {useSelector} from "react-redux";
import styles from '../../App.module.css'
import ImagePump from "./imagePump/ImagePump";
import GeneratePump from "./generatePump/GeneratePump";

const Main = () => {
    const pumpSelected = useSelector(store => store.pump.currentValue)
    const [openBlock, setOpenBlock] = useState(false)
    function toggleOpenBlock (boolean) {
        setOpenBlock(boolean)
    }

    return (
        <div className={styles.item}>
            <div className={styles.item_1}>
                <div>
                    <PumpSelected toggleOpenBlock={toggleOpenBlock}/>
                </div>

                <div>
                    {!pumpSelected || <PumpCharacteristics/>}
                </div>
                <div style={{color: 'red'}}>Доп опции</div>
                <div>
                    <GeneratePump toggleOpenBlock={toggleOpenBlock} openBlock={openBlock}/>
                </div>
            </div>

            <div className={styles.item_2}>
                {!pumpSelected || <ImagePump/>}
            </div>

        </div>
    );
};

export default Main;