import React from 'react'
import classes from './validationLabel.module.scss'
import acceptIco from '../../assets/accept.png'
import errorIco from '../../assets/remove.png'

const ValidationLabel = ({
    isValid
}) => {
    return (
        <div className={`${classes.validationLabel} ${isValid !== null ? classes.error : ''}`}>
            <img src={isValid !== null ? errorIco : acceptIco}/>
        </div>
    );
};

export default ValidationLabel;