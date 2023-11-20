import React, {useState} from 'react';
import styles from './pumpCharacteristics.module.css'
import {changeInput, changeSelect} from "../../store/optionsPumpSlice";
import {useDispatch} from "react-redux";

const Item = ({el}) => {

    const [error, setError] = useState({
        boolean: false,
        value: ''
    })
    const [errorSelect, setErrorSelect] = useState({
        boolean: false,
        value: ''
    })
    const dispatch = useDispatch()

    function inputHandler(text, id) {
        dispatch(changeInput({text, id}))
    }

    function changeHandler(text, id) {
        if (text) {
            dispatch(changeSelect({text, id}))
        } else {setError({boolean: true, value: 'Значение не заполнено'})}

    }
    function checkingError(text, id, type) {
        if (type === 'number') {
            if (!text) {
                setError({boolean: true, value: 'Значение не заполнено'})
            } if (text && text.length > 4) {
                setError({boolean: true, value: 'Значение превышает стандартный диапазон'})   /// Учесть значения с плавающей точкой
            }
        } if (type === 'select') {
            if (!text) {
                setErrorSelect({boolean: true, value: 'Значение не выбрано'})
            }
            }
        }

    return (
        <div>
            <div>
                {el.type === 'number' &&
                    <label> {el.valueRus}
                        <input
                            onChange={e=> inputHandler(e.target.value, el.id)}
                            className={error.boolean? styles.input_error: ''}
                            onFocus={()=> setError({boolean: false, value: ''})}
                            onBlur={e=> checkingError(e.target.value, el.id, el.type)}
                            type={el.type}/>
                    </label>
                }
            </div>
            <div className={error.boolean? styles.text_error: ''}>{error.value}</div>
            <div>
                {el.type === 'select' &&
                    <label> {el.valueRus}
                        <select
                            className={error.boolean? styles.input_error: ''}
                            onBlur={e=> checkingError(e.target.value, el.id, el.type)}
                            value={'' || el.currentValue}
                            onChange={e=> changeHandler(e.target.value, el.id)}
                        >
                            <option value=''>--option--</option>
                            {el.optionSelect.map(el=> <option key={el.id} value={el.material}>{el.material}</option>)}
                        </select>
                    </label>
                }
            </div>
            <div className={errorSelect.boolean? styles.text_error: '' }>{errorSelect.value}</div>
        </div>
    );
};

export default Item;