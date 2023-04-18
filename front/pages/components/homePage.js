import React, { useState, useEffect } from 'react'

function HomePage() {

    return (
        <div className='bigArea'>
                <div className='title'>Color blind test</div>
                <div className='bgarea'>
                    <img className='bgimg' src={'http://localhost:7000/RG300_710_1.jpg'}></img>
                    <div className='area'>
                        <div className='word' style={{fontWeight: '700', fontSize: '20px', lineHeight: '24px', marginTop: '20px'}}>Before you start</div>
                        <div className='word' style={{fontWeight: '500', fontSize: '16px', marginTop: '10px'}}>This is a red-green colorblind test.</div>
                        <div className='word' style={{fontWeight: '500', fontSize: '16px', marginTop: '3px'}}>Please click on the gap in the ring.</div>
                        <div className='word' style={{fontWeight: '500', fontSize: '16px', marginTop: '3px'}}>If you didn't see one, just click</div>
                        <div className='word' style={{fontWeight: '500', fontSize: '16px', marginTop: '3px'}}>”i cannot see the gap” button below.</div>
                        <img src={'http://localhost:7000/instruction.jpg'} style={{marginTop: '30px', marginBottom: '30px', width: '38%'}}></img>
                        <button className='startbtn' onClick={() => {location.assign("http://localhost:3000/components/testArea")}}>Got it!</button>
                    </div>
                </div>
        </div>
    )

}
export default HomePage;