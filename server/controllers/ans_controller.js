require('dotenv').config();
const Ans = require('../models/ans_model');
const { TOKEN_SECRET, CLIENT_URL } = process.env;
// const jwt = require('jsonwebtoken');

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

module.exports = {
    checkUp
};