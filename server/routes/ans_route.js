const router = require('express').Router();

const {
    wrapAsync
} = require('../../util/util');

const {
    checkUp,
    insertData,
    insertImgUrl,
    getAllImg,
    getRGImg,
    getBYImg
} = require('../controllers/ans_controller');

router.route("/ans/checkup")
    .post(wrapAsync(checkUp))
    
router.route('/insertData')
    .post(insertData)

router.route('/insertImgUrl')
    .get(insertImgUrl)

router.route('/getAllImg')
    .get(getAllImg)

router.route('/getBYImg')
    .get(getBYImg)

router.route('/getRGImg')
    .get(getRGImg)





module.exports = router;