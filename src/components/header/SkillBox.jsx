import React, { useState } from 'react';
import styles from './header.module.scss';
import Badge from './Badge';

const SkillBox = ( { skill, id } ) => {
    const [ isHovered, setIsHovering ] = useState( false )
    return (
        <p className={ styles.skill }
           onMouseEnter={ () => setIsHovering( true ) }
           onMouseLeave={ () => setIsHovering( false ) }>
            { skill }
            { isHovered && <Badge id={ id }/> }
        </p>
    );
};

export default SkillBox;