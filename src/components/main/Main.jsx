import React from 'react'
import classes from './main.module.scss'
import GMap from '../GMap/GMap';

const Main = () => {
    return (
        <div className='container'>
            <div className={ classes.content }>
                <div className={ classes.portfolio }>
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
                <div className={ classes.experience }>
                    <h2>
                        Experience
                    </h2>
                    <ul>
                        <li>
                            <p>JS</p>
                            <span contentEditable>6 years</span>
                        </li>
                        <li>
                            <p>HTML</p>
                            <span contentEditable>2 years</span>
                        </li>
                        <li>
                            <p>CSS</p>
                            <span contentEditable>4,5 years</span>
                        </li>
                    </ul>
                </div>
                <div className={ classes.sampleCode }>
                    <h2>
                        Sample Code
                    </h2>
                    <div className={ classes.code }>
                        <span>&lt;div className='golden-grid'&gt;
                            &lt;div style='grid-area:
                            11 / 1 / span 10 / span 12;'
                            &gt;&lt;/div&gt;&lt;/div&gt;
                        </span>
                    </div>
                </div>
                <div className={ classes.availability }>
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
                <div className={ classes.quote }>
                    <h2>
                        The Most Amaizing...
                    </h2>
                    <div className={ classes.quoteBlock }>
                        <span>
                            The only true wisdom is in knowing you know nothing...
                        </span>
                    </div>
                </div>
                <div className={ classes.quote }>
                    <h2>
                        In clients I look for...
                    </h2>
                    <div className={ classes.quoteBlock }>
                        <span>
                            There is only one good, knowledge, and one evil, ignorance.
                        </span>
                    </div>

                </div>
                <div className={ classes.gMap }>
                    <GMap isMarkerShown={ false }
                          googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places"
                          loadingElement={<div style={{ height: `100%` }} />}
                          containerElement={<div style={{ height: `200px` }} />}
                          mapElement={<div style={{ height: `100%`, borderRadius: '6px' }} />}
                    />
                </div>
            </div>

        </div>
    )
}

export default Main