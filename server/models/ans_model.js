<<<<<<< HEAD
require('dotenv').config();
const bcrypt = require('bcrypt');
const {pool} = require('../../util/db.js');
const salt = parseInt(process.env.BCRYPT_SALT);
const {TOKEN_EXPIRE, TOKEN_SECRET} = process.env;
const jwt = require('jsonwebtoken');

const checkAns = async (pointX , pointY) => {
    
    const ansQuery = 'SELECT * FROM testImg WHERE correct_pointX = ? AND correct_pointY = ?';
    const ansBindings = [pointX, pointY];
    ans = await pool.query(ansQuery, ansBindings);

    if(ans[0]!=undefined){
        return ans;
    }else{
        return {error: 'Wrong pos'};
    }

    // try {
    //     ans = await pool.query(ansQuery, ansBindings);
    //     return ans;
    // } catch (error) {
    //     await conn.query('ROLLBACK');
    //     return false;
    // } finally {
    //     conn.release();
    // }

};

module.exports = {
    checkAns
};
=======
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
>>>>>>> heng
