const router = require('express').Router();

const {
    wrapAsync,
} = require('../../util/util');

const {
    checkUp
} = require('../controllers/ans_controller');

router.route("/ans/checkup")
    .post(wrapAsync(checkUp))

module.exports = router;