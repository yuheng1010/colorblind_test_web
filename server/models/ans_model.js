const pool = require('../../db');
require('dotenv').config();
const fs = require('fs');
const testFolder = './public/';

const getImg = async () => {
    const [result] = await pool.query('SELECT * FROM testImg');
    return result;
}
const insertImgUrl = async() => {
    fs.readdir(testFolder, async (err, files) => {
        files.forEach(async file => {
            let name = file.split('.')[0]
            let url = "http://localhost:7000/"+file
            console.log(name)
            console.log(url)
            // const [result] = await pool.query('INSERT INTO testImg(level_name,img_url) VALUES (?,?)',[name,url])
        });
      });
}
const insertData = async(id,x,y) => {
   console.log(id,x,y)
   await pool.query(`UPDATE testImg SET correct_pointX= ?, correct_pointY= ? WHERE id=?`,[x,y,id])
   
}


module.exports = {
    insertData,
    insertImgUrl,
    getImg
}