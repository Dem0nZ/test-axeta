import React, { useState } from 'react';
import styles from './header.module.scss';
import ValidationLabel from './ValidationLabel';
import { editName } from '../../store/infoSlice';

const InputField = ({
    isLarge,
    value,
    validationError,
    onValueChanged,
    onValueUpdated
}) => {
    const _validationError = validationError === undefined ? null : validationError
    const [isFocused, setIsFocused] = useState(false)
    const dispatchValue = (e) => {
        (_validationError === null && onValueUpdated) && onValueUpdated(e.target.innerText)
        setIsFocused(false)
    }

    return (
        <div className={styles.fieldContainer}>
            <div className={styles.inputField}>
                <span className={ `${isLarge ? styles.largeValue : styles.value} ${_validationError !== null ? styles.invalidField : ''}` }
                    onFocus={ ()=> {setIsFocused( true )}}
                    onInput={(e) => {
                        onValueChanged && onValueChanged( e.target.innerText )
                    }}
                    onBlur={ ( e ) => dispatchValue(e) }
                    contentEditable>
                    { value }
                </span>
                {isFocused && <ValidationLabel isValid={_validationError}/> }
            </div>
            { isFocused && (_validationError !== null) && <p className={styles.errorMessage}>{_validationError}</p> }
        </div>
    );
};

export default InputField;