import React, { useState, useEffect } from 'react'

function insertData(){
    const [img, setImg] = useState([])
    const [x, setX] = useState('')
    const [y, setY] = useState('')
    useEffect(() => {
        fetch("http://localhost:7000/api/v1/getAllImg")
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setImg(data)
            })
    }, [])

    useEffect (()=>{
            function mousedown(event) {
                setX(event.offsetX)
                setY(event.offsetY)
        }
        window.addEventListener('mousedown', mousedown);
    },[])

    function change(id) {
        console.log(id)
        console.log(x)
        console.log(y)
        fetch('http://localhost:7000/api/v1/insertData', {
        body: JSON.stringify({ 
            id: id ,
            x: x,
            y: y
        }),
        headers: new Headers({
          'Content-Type': 'application/json',
        }),
        method: 'POST',
      })
    }
  
return (
    <div>
        {img.map((inner,index)=>
        <img id={index} src={inner.img_url} style={{width:"200px"}} onClick={()=>change(inner.id)}></img>
        )}
    </div>
)

}
export default insertData