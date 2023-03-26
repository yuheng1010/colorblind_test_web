import React, { useState, useEffect } from 'react'

function TestArea(){
    const [img, setImg] = useState([])
    useEffect(() => {
        fetch("http://localhost:7000/api/v1/getImg")
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setImg(data)
            })
    }, [])
    useEffect (()=>{
            function mousedown(event) {
            console.log("pageX: ", event.pageX,
                "pageY: ", event.pageY,
                "offsetX: ", event.offsetX,
                "offsetY:", event.offsetY,
                )
        }
        window.addEventListener('mousedown', mousedown);
    },[])
    function change(id) {
        // if (document.getElementById("p1").style.display != "none") {
        //     document.getElementById("p1").style.display = "none"
        //     document.getElementById("p2").style.display = "block"
        // }
    }
return (
    <div>
        {img.map((inner,index)=>
        <img id={index} src={inner.img_url} style={{width:"200px"}} onClick={()=>change(inner.id)}></img>
        )}
    </div>
)

}
export default TestArea