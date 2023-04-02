import React, { useState, useEffect } from 'react'
import { useQRCode } from 'next-qrcode';
import { useRouter } from 'next/router'
import QRCode from "qrcode.react";

function QRCORD() {
    // const { QRCORD } = useQRCode();
    const router = useRouter()
    const qrcordId = router.query.qrcordId

    return (
        <>
            <div>{qrcordId}</div>
            
            <QRCode value={qrcordId}
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

            {/* <QRCORD
                text={'https://github.com/bunlong/next-qrcode'}
                options={{
                    level: 'M',
                    margin: 3,
                    scale: 4,
                    width: 200,
                    color: {
                        dark: '#000000',
                        light: '#ffffff',
                    },
                }}
            /> */}
        </>
    )


}

export default QRCORD