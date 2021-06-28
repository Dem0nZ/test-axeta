import React, { useState } from 'react'

const trimYears = (str) => {
    const match = str.match(/^(\d+)/)
    if (match && match.length > 0) {
        return match[0]
    } else {
        return ""
    }
}

const SkillLine = ( { id, skill, usageTime, updateUsageTime }) => {
    const [isEditing, setIsEditing] = useState(false)
    return (
        <>
            <p>
                { skill }
            </p>
            <span contentEditable
                  onFocus={ (e)=> { setIsEditing(true) } }
                  onBlur={e => {
                      setIsEditing(false)
                      updateUsageTime({ usageTime: trimYears(e.target.innerText), id: id })
                  }}>
                { isEditing ? usageTime : `${ usageTime } years` }
            </span>
        </>
    )
}

export default SkillLine;