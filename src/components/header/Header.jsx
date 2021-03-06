import React, { useEffect, useRef, useState } from 'react'
import styles from './header.module.scss'
import { useDispatch, useSelector } from 'react-redux'
import { addSkill, editLocation, editName, sortSkills } from '../../store/infoSlice';
import SkillBox from './SkillBox';
import InputField from './InputField';

const getNameValidationError = (name) => {
    const pattern = /^[\s\da-zA-Zа-яА-Я]+$/
    return (name.match(pattern) === null) ? 'Name is not valid' : null
}

const Header = () => {
    const [ isAddingSkill, setAddingSkill ] = useState( false )
    const addSkillRef = useRef(null)
    const info = useSelector( ( state ) => state.info )
    const dispatch = useDispatch()

    const [nameValidationError, setNameValidationError] = useState(getNameValidationError(info.name))
    const nameValidator = (name) => {
        setNameValidationError(getNameValidationError(name))
    }

    const skills = info.skills?.map( skill => <SkillBox id={skill.id} skill={skill.skill}/> )

    useEffect( () => {
        dispatch( sortSkills() )
    },[skills])

    useEffect(()=> {
        if(addSkillRef.current) {
            addSkillRef.current.focus()
        }
    },[isAddingSkill])



    return (
        <div className={ styles.header }>
            <div className='container'>
                <div className={ styles.leftBlock }>
                    <div className={ styles.avatar }>

                    </div>
                    <div className={ styles.info }>
                        <InputField
                            isLarge={true}
                            value={info.name}
                            onValueChanged={nameValidator}
                            onValueUpdated={ value => dispatch( editName(value)) }
                            validationError={nameValidationError}
                        />
                        <InputField
                            value={info.location}
                            onValueUpdated={value => dispatch( editLocation( value ) )}
                        />
                        <div className={ styles.language }>
                        <span>
                            🇬🇧
                        </span>
                            <p>
                                English
                            </p>
                        </div>
                        <div className={ styles.skills }>

                            { skills }

                            { !isAddingSkill
                                ? <p className={ styles.skill }
                                     onClick={ () => setAddingSkill( true )}>+</p>
                                : <div className={ styles.addSkill }
                                       contentEditable
                                       ref={addSkillRef}
                                       onBlur={ (e) => { dispatch( addSkill(e.target.innerText))
                                           setAddingSkill( false)} }>
                                </div> }

                        </div>
                    </div>

                </div>
                <div className={ styles.print }>
                    <svg width='24' height='24' viewBox='0 0 24 24' fill='#B3BAC0' xmlns='http://www.w3.org/2000/svg'>
                        <path d='M14 20H8V19H14V20ZM24 5V18H20V24H4V18H0V5H4V0H20V5H24ZM18 15H6V22H18V15ZM18 2H6V5H18V2ZM22
                        7.5C22 7.224 21.776 7 21.5 7C21.224 7 21 7.224 21 7.5C21 7.776 21.224 8 21.5 8C21.776 8 22 7.776 22
                        7.5ZM16 17H8V18H16V17Z'/>
                    </svg>
                    <span>Print this page</span>
                </div>
            </div>
        </div>
    )
}

export default Header