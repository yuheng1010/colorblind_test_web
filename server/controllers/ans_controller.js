const Ans = require('../models/ans_model');
require('dotenv').config();
const { TOKEN_SECRET, CLIENT_URL } = process.env;

const checkUp = async(req,res) => {
    const data = req.body;
    // console.log(data)
    try {
        var [checkUpResult] = await Ans.checkAns(data.id);
        // console.log("thisis checkoutRes")
        console.log(checkUpResult[0])
        // console.log(checkUpResult[0].correct_pointX)
        if(checkUpResult[0].correct_pointX-35 <= data.xPos && data.xPos<= checkUpResult[0].correct_pointX+35 
            && checkUpResult[0].correct_pointY-35 <= data.yPos && data.yPos <= checkUpResult[0].correct_pointY+35){
            return res.send({result:"correct"})
        }
        return res.send({result:"wrong"});
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

const getAllImg = async (req, res) => {
    const results = await Ans.getAllImg();
    if (!results) {
        res.status(400).send({ error: 'Wrong' });
        return;
    }
    res.status(200).json(results);
}

module.exports = {
    checkUp,
    insertData,
    insertImgUrl,
    getAllImg,
};