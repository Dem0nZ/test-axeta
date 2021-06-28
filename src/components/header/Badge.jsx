import React, { useState } from 'react'
import classes from './badge.module.scss'
import removeIco from '../../assets/remove.png'
import { useDispatch } from 'react-redux'
import { removeSkill } from '../../store/infoSlice';

const Badge = (id) => {
    const dispatch = useDispatch()
    return (
        <div className={classes.badge}
        onClick={ () => dispatch(removeSkill(id)) }>
            <img src={removeIco}/>
        </div>
    );
};

export default Badge