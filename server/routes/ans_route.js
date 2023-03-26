const router = require('express').Router();

const {
<<<<<<< HEAD
    wrapAsync,
} = require('../../util/util');

const {
    checkUp
} = require('../controllers/ans_controller');

router.route("/ans/checkup")
    .post(wrapAsync(checkUp))
=======
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
>>>>>>> heng

module.exports = router;