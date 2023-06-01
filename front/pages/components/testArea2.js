import React, { useState, useEffect } from 'react'

function TestArea2() {
    const [img, setImg] = useState([])
    const [xPos, setXPos] = useState('')
    const [yPos, setYPos] = useState('')
    const [TorF, setTorF] = useState('')
    // const [level, setLevel] = useState('RG')

    useEffect(() => {
        fetch("http://localhost:7000/api/v1/getBYImg")
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setImg(data)
            })
    }, [])

    useEffect(() => {
        function mousedown(event) {
            console.log("pageX: ", event.pageX,
                "pageY: ", event.pageY,
                "offsetX: ", event.offsetX,
                "offsetY:", event.offsetY,
            )
            setXPos(event.offsetX)
            setYPos(event.offsetY)
        }
        window.addEventListener('mousedown', mousedown);
    }, [])

    // function genresult() {
    //     var RGresult = localStorage.getItem("RGresult")
    //     var Presult = localStorage.getItem("Presult")
    //     var Dresult = localStorage.getItem("Dresult")
    //     var RG = RGresult.substring(2, RGresult.indexOf("_", 0))
    //     var P = Presult.substring(1, Presult.indexOf("_", 0))
    //     var D = Dresult.substring(1, Dresult.indexOf("_", 0))
    //     var deg = ""
    //     var type = ""

    //     if (RG == 40 || RG == 60) {
    //         //normal
    //         deg = "A"
    //     } else if (RG >= 220 && RG <= 300) {
    //         //severe
    //         deg = "1"
    //     } else if (RG >= 120 && RG <= 200) {
    //         //moderate
    //         deg = "2"
    //     } else if (RG >= 80 && RG <= 100) {
    //         //mild
    //         deg = "3"
    //     }

    //     if (RG != 40 && RG != 60 && P > D) {
    //         //protan
    //         type = "B"
    //     } else if (RG != 40 && RG != 60 && D >= P) {
    //         //deutan
    //         type = "C"
    //     }

    //     location.assign("http://localhost:3000/qrcord/" + type + deg)

    // }


    function change(id) {

        fetch("http://localhost:7000/api/v1/ans/checkup", {
            body: JSON.stringify({
                id: id,
                xPos: xPos,
                yPos: yPos
            }),
            headers: new Headers({
                'Content-Type': 'application/json',
            }),
            method: "POST"
        })
            .then((json) => json.json())
            .then((result) => {
                document.getElementById(id).style.display = "none"
                document.getElementById("btn" + id).style.display = "none"
                console.log(result.result)
                if (result.result == "correct") {

                        document.getElementById(id + 1).style.display = "block" 
                        document.getElementById("btn" + (id + 1)).style.display = "block"
 
                    if (id == 75) {

                        localStorage.setItem('BYresult', img[id -66 -1]["level_name"])
                        alert("The colorblind test is finished ! Thank you !")
                        // genresult();
                    }
                } else {
                    if (TorF == "F") { //這個等級已經錯過一次，現在再錯一次。所以這個level gameover了，跳下個level

                        alert("The colorblind test is finished ! Thank you !")
                        localStorage.setItem('BYresult', img[id - 66 ]["level_name"])
                        // genresult();
                    
                    } else {
                        if (id == 66){
                            alert("The colorblind test is finished ! Thank you !")
                            localStorage.setItem('BYresult', img[0]["level_name"])
                        }else{
                            document.getElementById(id).style.display = "none"
                            document.getElementById("btn" + id).style.display = "none"
                            document.getElementById(id - 1).style.display = "block" 
                            document.getElementById("btn" + (id - 1)).style.display = "block"
                        setTorF('F')
                        }
                    }

                }
            })
            .catch(error => window.alert(error))
    }


    return (
        <div className='testArea'>
            <div className='title'>Color blind test</div>
            {img.map((inner, index) => {
                if (inner.id == 66) return (
                    <div className='testImg'>
                        <img id={inner["id"]} src={inner.img_url} style={{ width: "350px" }} onClick={() => change(inner.id)}></img>
                        <button id={"btn" + inner["id"]} className='passbtn' onClick={() => change(inner.id)}>i cannot see the gap</button>
                    </div>
                )
                if (inner.id != 66) return (
                    <div className='testImg'>
                        <img id={inner["id"]} src={inner.img_url} style={{ width: "350px", display: 'none' }} onClick={() => change(inner.id)}></img>
                        <button id={"btn" + inner["id"]} className='passbtn' style={{ display: 'none' }} onClick={() => change(inner.id)}>i cannot see the gap</button>
                    </div>
                )
            }
            )}
        </div>
    )

}
export default TestArea2;