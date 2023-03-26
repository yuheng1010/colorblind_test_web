const router = require('express').Router();

const {
    insertData,
    insertImgUrl,
    getImg
} = require('../controllers/ans_controller')

router.route('/insertData')
    .post(insertData)

router.route('/insertImgUrl')
    .get(insertImgUrl)

router.route('/getImg')
    .get(getImg)

module.exports = router;