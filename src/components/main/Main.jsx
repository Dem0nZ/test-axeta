import React from 'react'
import styles from './main.module.scss'
import GMap from '../gMap/GMap';
import { useDispatch, useSelector } from 'react-redux';
import { editUsageTime } from '../../store/infoSlice';
import SkillLine from './SkillLine';
import SyntaxHighlighter from 'react-syntax-highlighter'
import { a11yLight } from 'react-syntax-highlighter/dist/esm/styles/hljs'

const Main = () => {
    const dispatch = useDispatch()
    const skills = useSelector( ( state ) => state.info.skills )
    const skillsElements = skills?.map( skill => {
        return (
            <li key={ skill.id }>
                <SkillLine { ...skill } updateUsageTime={ ( payload ) => { dispatch( editUsageTime( payload ) ) } }/>
            </li>
        )
    } )
    const content = `<div className='golden-grid'>
    <div style='grid-area:
        11 /  1 / span 10 / span
        12;'>
    </div>
</div>`

    return (
        <div className='container'>
            <div className={ styles.content }>
                <div className={ styles.portfolio }>
                    <h2>
                        Portfolio
                    </h2>
                    <ul>
                        <li>
                            <a href='#'><span>Bootstrap 4 Material Design (Sample Link)</span></a>
                        </li>
                        <li>
                            <a href='#'><span>Modern JavaScript stack</span></a>
                        </li>
                        <li>
                            <a href='#'><span>Datepicker for twitter bootstrap</span></a>
                        </li>
                        <li>
                            <a href='#'><span>Fast and reliable Bootstrap widgets in Angular </span></a>
                        </li>
                    </ul>
                </div>
                <div className={ styles.experience }>
                    <h2>
                        Experience
                    </h2>
                    <ul>

                        { skillsElements }

                    </ul>
                </div>
                <div className={ styles.sampleCode }>
                    <h2>
                        Sample Code
                    </h2>
                    <div className={ styles.code }>
                        <SyntaxHighlighter language='htmlbars' style={ a11yLight }>
                            { content }
                        </SyntaxHighlighter>
                    </div>

                </div>
                <div className={ styles.availability }>
                    <h2>
                        Availability
                    </h2>
                    <span>
                        Full-time
                    </span>
                    <h3>
                        Preferred Environment
                    </h3>
                    <span>
                        GitHub, Mac OSX
                    </span>
                </div>
                <div className={ styles.quote }>
                    <h2>
                        The Most Amaizing...
                    </h2>
                    <div className={ styles.quoteBlock }>
                        <span>
                            The only true wisdom is in knowing you know nothing...
                        </span>
                    </div>
                </div>
                <div className={ styles.quote }>
                    <h2>
                        In clients I look for...
                    </h2>
                    <div className={ styles.quoteBlock }>
                        <span>
                            There is only one good, knowledge, and one evil, ignorance.
                        </span>
                    </div>

                </div>
                <div className={ styles.gMap }>
                    <GMap isMarkerShown={ true }
                          googleMapURL='https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places'
                          loadingElement={ <div style={ { height: `100%` } }/> }
                          containerElement={ <div style={ { height: `200px` } }/> }
                          mapElement={ <div style={ { height: `100%`, borderRadius: '6px' } }/> }
                    />
                </div>
            </div>

        </div>
    )
}

export default Main