import React from 'react';
import styles from "../../../App.module.css";
import {useDispatch, useSelector} from "react-redux";
import {addPump} from "../../store/pumpSlice";

const PumpSelected = () => {
    const dispatch = useDispatch();
    const pumpSelected = useSelector(store => store.pump.currentValue)
    const pumps = useSelector(store => store.pump.pumpSeries)
    function changeHandler (e) {
        dispatch(addPump(e.target.value))
    }
    return (
        <div className={styles.item}>
            <label> Выберите насос:
                <select
                    value={pumpSelected}
                    onChange={changeHandler}
                >
                    <option value="-" hidden>--option--</option>
                    {pumps.map(el=> <option key={el.id} value={el.nameRus}>{el.nameRus}</option>
                    )}
                </select>
            </label>
        </div>
    );
};

export default PumpSelected;