const Ans = require('../models/ans_model');
const pool = require('../../db');
require('dotenv').config();
const { TOKEN_SECRET, CLIENT_URL } = process.env;

const checkUp = async(req,res) => {
    const data = req.body;
    console.log(data)
    try {
        var checkUpResult = await Ans.checkAns(data.pointX , data.pointY);
        return res.send(checkUpResult);
    } catch (error) {
        res.status(400).send({ error });
        return;
    }

}


const insertData = async (req, res) => {
    const id = req.body.id
    const x = req.body.x
    const y = req.body.y
    Ans.insertData(id,x,y)
}
const insertImgUrl = async (req, res) => {
    Ans.insertImgUrl()
    res.status(200).json({})
}
const getImg = async (req, res) => {
    const results = await Ans.getImg();
    if (!results) {
        res.status(400).send({ error: 'Wrong' });
        return;
    }
    res.status(200).json(results);
}
module.exports = {
    insertData,
    insertImgUrl,
    getImg,
    checkUp
};