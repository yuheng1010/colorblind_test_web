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

    function genresult() {
        var RGresult = localStorage.getItem("RGresult")
        var Presult = localStorage.getItem("Presult")
        var Dresult = localStorage.getItem("Dresult")
        var RG = RGresult.substring(2,RGresult.indexOf("_",0))
        var P = Presult.substring(1,Presult.indexOf("_",0))
        var D = Dresult.substring(1,Dresult.indexOf("_",0))
        var deg = ""
        var type = ""

        if(RG==40 || RG==60){
            //normal
            deg = "A"
        }else if(RG>=220 && RG<=300){
            //severe
            deg = "1"
        }else if(RG>=120 && RG<=200){
            //moderate
            deg = "2"
        }else if(RG>=80 && RG<=100){
            //mild
            deg = "3"
        }

        if(RG!=40 && RG!=60 && P > D){
            //protan
            type = "B"
        }else if (RG!=40 && RG!=60 && D >= P){
            //deutan
            type = "C"
        }

        location.assign("http://localhost:3000/qrcord/"+type+deg)

    }

    
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
                document.getElementById(id).style.display = "none"
                console.log(result.result)
                if (result.result == "correct") {
                    if(id!=2 || id!=3){
                        document.getElementById(id - 2).style.display = "block" //同樣等級的圖會連兩張，所以要減二才會到下個等級
                    }
                    setTorF('T')
                    if(id==38 || id==39){
                        localStorage.setItem('RGresult',img[id-2]["level_name"]) //id-2是它的位置
                    }else if(id==20 || id==21){
                        localStorage.setItem('Presult',img[id-2]["level_name"])  
                    }else if(id==2 || id==3){
                        localStorage.setItem('Dresult',img[id-2]["level_name"]) 
                        alert("The colorblind test is finished ! Thank you !")
                        genresult();
                    }
                } else {
                    if (TorF == "F") { //這個等級已經錯過一次，現在再錯一次。所以這個level gameover了，跳下個level
                        
                        if (level == 'RG') {
                            document.getElementById(37).style.display = "block"
                            setTorF('T')
                            localStorage.setItem('RGresult',img[id-2]["level_name"]) 
                        }
                        if (level == "P") {
                            document.getElementById(19).style.display = "block"
                            setTorF('T')
                            localStorage.setItem('Presult',img[id-2]["level_name"]) 
                        }
                        if(level == "D"){
                            alert("The colorblind test is finished ! Thank you !")
                            localStorage.setItem('Dresult',img[id-2]["level_name"]) 
                            genresult();
                        }

                    } else {
                        document.getElementById(id).style.display = "none"
                            if(id%2==0){ 
                                document.getElementById(id + 1).style.display = "block" //如果id是偶數那都是一類的圖，所以要加一變成二類的圖(一二類圖都一樣只是缺口不一樣)
                            }else{
                                document.getElementById(id - 1).style.display = "block" //如果id是奇數那是二類的圖，所以要減一變成一類的圖
                            }
                        setTorF('F')
                    }

                }
            })
            .catch(error => window.alert(error))
    }

    return (
        <div className='testImg'>
            {img.map((inner, index) => {
                if (inner.id == 64) return <img id={inner["id"]} src={inner.img_url} style={{ width: "350px" }} onClick={() => change(inner.id)}></img>
                if (inner.id != 64) return <img id={inner["id"]} src={inner.img_url} style={{ width: "350px", display: 'none' }} onClick={() => change(inner.id)}></img>
            }
            )}
        </div>
    )

}
export default TestArea