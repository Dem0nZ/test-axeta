import React, { useEffect, useRef, useState } from 'react'
import styles from './header.module.scss'
import { useDispatch, useSelector } from 'react-redux'
import SimpleReactValidator from 'simple-react-validator'
import { addSkill, editLocation, editName } from '../../store/infoSlice';
import SkillBox from './SkillBox';

const Header = () => {
    const [ isAddingSkill, setAddingSkill ] = useState( false )
    const addSkillRef = useRef(null)
    const info = useSelector( ( state ) => state.info )
    const dispatch = useDispatch()
    const simpleValidator = useRef( new SimpleReactValidator() )

    useEffect(()=> {
        if(addSkillRef.current) {
            addSkillRef.current.focus()
        }
    },[isAddingSkill])

    const skills = info.skills?.map( skill => <SkillBox id={skill.id} skill={skill.skill}/> )

    return (
        <div className={ styles.header }>
            <div className='container'>
                <div className={ styles.leftBlock }>
                    <div className={ styles.avatar }>

                    </div>
                    <div className={ styles.info }>
                        <h1 className={ styles.name }
                            onBlur={ ( e ) => dispatch( editName( e.target.innerText ) ) }
                            contentEditable>

                            { info.name }

                        </h1>
                        <p className={ styles.location }
                           onBlur={ ( e ) => dispatch( editLocation( e.target.innerText ) ) }
                           contentEditable>

                            { info.location }

                        </p>
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