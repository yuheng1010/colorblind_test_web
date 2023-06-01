require('dotenv').config();
const bcrypt = require('bcrypt');
const pool = require('../../util/db.js');
const salt = parseInt(process.env.BCRYPT_SALT);
const {TOKEN_EXPIRE, TOKEN_SECRET} = process.env;
const jwt = require('jsonwebtoken');
const fs = require('fs');
// const testFolder = './public/';
const testFolder = "C:/Users/heng/Desktop/misproject/colorblindTestImg/tri"

const checkAns = async (id) => {

    const ansQuery = 'SELECT * FROM testImg WHERE id = ?';
    const ansBindings = id
    ans = await pool.query(ansQuery, ansBindings);
    if(ans[0]!=undefined){
        return ans;
    }else{
        return {error: 'Wrong'};
    }

}

const getAllImg = async () => {
    const [result] = await pool.query('SELECT * FROM testImg');
    return result;
}

const getRGImg = async () => {
    const [result] = await pool.query('SELECT * FROM  testImg WHERE id <66')
    return result
}

const getBYImg = async () => {
    const [result] = await pool.query('SELECT * FROM  testImg WHERE id >65')
    return result
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
    getAllImg,
    checkAns,
    getBYImg,
    getRGImg
}

