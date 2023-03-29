import React, { useState, useEffect } from 'react'

function TestArea() {
    const [img, setImg] = useState([])
    const [xPos, setXPos] = useState('')
    const [yPos, setYPos] = useState('')
    const [TorF, setTorF] = useState('')
    const [level, setLevel] = useState('RG')

    useEffect(() => {
        fetch("http://localhost:7000/api/v1/getAllImg")
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
    function change(id) {
        if (id <= 37 && id > 20) { setLevel('P') }
        if (id <= 19 && id > 2) { setLevel('D') }
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
                console.log(result.result)
                if (result.result == "correct") {
                    document.getElementById(id).style.display = "none"
                    document.getElementById(id - 2 - 2).style.display = "block"
                    setTorF('T')
                } else {
                    if (TorF == "F") {
                        if (level == 'RG') {
                            document.getElementById(id).style.display = "none"
                            document.getElementById(37).style.display = "block"
                        }
                        if (level == "P") {
                            document.getElementById(id).style.display = "none"
                            document.getElementById(19).style.display = "block"
                        }

                    } else {
                        document.getElementById(id).style.display = "none"
                        document.getElementById(id - 2 - 1).style.display = "block"
                        setTorF('F')
                    }

                }
            })
            .catch(error => window.alert(error))



        return (
            <>

            </>
        )
    }

    return (
        <div>
            {img.map((inner, index) => {
                if (inner.id == 64) return <img id={inner["id"]} src={inner.img_url} style={{ width: "200px" }} onClick={() => change(inner.id)}></img>
                if (inner.id != 64) return <img id={inner["id"]} src={inner.img_url} style={{ width: "200px", display: 'none' }} onClick={() => change(inner.id)}></img>
            }
            )}
        </div>
    )

}
export default TestArea