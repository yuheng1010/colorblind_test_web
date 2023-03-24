import Image from "next/image"
import React, { useState, useEffect } from 'react'
import p1 from "../colorblindTestImg/D80_710_2.jpg"
import p2 from "../colorblindTestImg/D60_710_2.jpg"

function TestArea(){
    useEffect (()=>{
        function mousemove(event) {
            console.log("pageX: ", event.pageX,
                "pageY: ", event.pageY,
                "clientX: ", event.clientX,
                "clientY:", event.clientY)
        }
        window.addEventListener('mousemove', mousemove);
    },[])
    function change() {
        if (document.getElementById("p1").style.display != "none") {
            document.getElementById("p1").style.display = "none"
            document.getElementById("p2").style.display = "block"
        }
        else{
            function mousemove(event) {
                console.log("pageX: ", event.pageX,
                    "pageY: ", event.pageY,
                    "clientX: ", event.clientX,
                    "clientY:", event.clientY)
            }
            
            window.addEventListener('mousemove', mousemove);
        }
        
    }


   


return (
    <div>
        <Image id="p1" src={p1} alt="p1" onClick={change}></Image>
        {}
        <Image id="p2" src={p2} ale="p2" style={{ display: 'none' }}></Image>
    </div>
)

}
export default TestArea