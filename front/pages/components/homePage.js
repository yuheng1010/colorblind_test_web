import React, { useState, useEffect } from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faArrowRight,
    faArrowLeft
} from "@fortawesome/free-solid-svg-icons";

function HomePage() {
    const [status, setStatus] = useState(0)
    return (
        <div className='bigArea'>
                <div className='title'>Color blind test</div>
                <div className='bgarea'>
                    <img className='bgimg' src={'http://localhost:7000/RG300_710_1.jpg'}></img>
                    <div className='area'>
                        <div className='word' style={{fontWeight: '700', fontSize: '20px', lineHeight: '24px', marginTop: '20px'}}>Before you start</div>
                        <div className='word' style={{fontWeight: '500', fontSize: '16px', marginTop: '10px'}}>This is a colorblind test.</div>
                        <div className='word' style={{fontWeight: '500', fontSize: '16px', marginTop: '3px'}}>Please click on the gap in the ring.</div>
                        <div className='word' style={{fontWeight: '500', fontSize: '16px', marginTop: '3px'}}>If you didn't see one, just click</div>
                        <div className='word' style={{fontWeight: '500', fontSize: '16px', marginTop: '3px'}}>”i cannot see the gap” button below.</div>
                        <img src={'http://localhost:7000/instruction.jpg'} style={{marginTop: '30px', marginBottom: '30px', width: '38%'}}></img>
                        {status == 0 && <button className='startbtn' onClick={() => {setStatus(1)}}>Got it!</button>}
                        {status ==1 && 
                            <div className='colortest'>
                                <button className='colortestbtn' onClick={() => {location.assign("/components/testArea")}}><FontAwesomeIcon icon={faArrowLeft} style={{marginTop: '6px'}}/>  Red-green</button>
                                <button className='colortestbtn' onClick={() => {location.assign("/components/testArea")}}>Tritan(blue)  <FontAwesomeIcon icon={faArrowRight} style={{marginTop: '6px'}}/></button>
                            </div>
                        }
                    </div>
                </div>
        </div>
    )

}
export default HomePage;