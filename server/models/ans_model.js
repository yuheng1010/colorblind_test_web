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