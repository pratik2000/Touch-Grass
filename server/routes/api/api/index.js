const router = require('express').Router();
const login = require('./login-routes');
const home = require('./home-routes');
const map = require('./map-routes');
const signUp = require('./signUp-routes');
const user = require('./user-routes');

router.use('/login', login);
router.use('/home', home);
router.use('/map', map);
router.use('/signUp', signUp);
router.use('/map',map);


module.exports = router;
