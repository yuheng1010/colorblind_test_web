const router = require('express').Router();

const {
    wrapAsync
} = require('../../util/util');

const {
    checkUp,
    insertData,
    insertImgUrl,
    getAllImg,
} = require('../controllers/ans_controller');

router.route("/ans/checkup")
    .post(wrapAsync(checkUp))
    
router.route('/insertData')
    .post(insertData)

router.route('/insertImgUrl')
    .get(insertImgUrl)

router.route('/getAllImg')
    .get(getAllImg)



module.exports = router;