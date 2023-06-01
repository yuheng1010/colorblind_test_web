import React, { useState, useEffect } from 'react'
import { useQRCode } from 'next-qrcode';
import { useRouter } from 'next/router'
import QRCode from "qrcode.react";
import { Helmet } from 'react-helmet';
import { saveAs } from 'file-saver';
function QRCORD() {
    // const { QRCORD } = useQRCode();
    const router = useRouter()
    const qrcodeId = router.query.qrcordId

    let level = ""
    let type = ""
    if (qrcodeId) {
        if (qrcodeId[0] == "B") {
            type = "protanomalous"
        } else if (qrcodeId[0] == "C") {
            type = "deuteranomalous"
        } else if (qrcodeId[0] == 'D') {
            type = "tritanomalous"
        } else if (qrcodeId[0] == 'A') {
            type = "normal"
            level = "normal"
        }

        if (qrcodeId[1] == 1) {
            level = "severe"
        } else if (qrcodeId[1] == 2) {
            level = "moderate"
        } else if (qrcodeId[1] == 3) {
            level = "mild"
        }
    }
    function Download() {
        const img = document.getElementById('qr');
        img.toBlob((blob) => {
            saveAs(blob, 'qrcode.png');
        });
    }
    return (

        <div className='resultPage'>
            <Helmet>
                <script src="https://cdnjs.cloudflare.com/ajax/libs/FileSaver.js/2.0.0/FileSaver.min.js"></script>
            </Helmet>
            <div className='resTitle'>Colorblind Test Results</div>
            <div className='textArea'>
                <div className='resType'>Type : {type} </div>
                <div className='resLev'>Level : {level} </div>
            </div>

            {/* <div>{qrcodeId}</div> */}

            <QRCode id="qr" className="qr" value={qrcodeId}
                options={{
                    level: 'M',
                    margin: 3,
                    scale: 4,
                    width: 200,
                    color: {
                        dark: '#000000',
                        light: '#ffffff',
                    },
                }} />
            <div className='ins'>Now scan this QRcode on the Hololens.</div>
            <br />
            <button className='dLBtn' onClick={Download}>Download QRcode</button>
            <button className='dLBtn' onClick={() => {location.assign("/")}} style={{backgroundColor:'#000000', color:'#ffffff'}}>Try the other test!</button>
        </div>
    )

}

export default QRCORD