const router = require('express').Router();
const userRoutes = require('./userRoutes');
const bpostRoutes = require('./bpostRoutes');

router.use('/users', userRoutes);
router.use('/bposts', bpostRoutes);

module.exports = router;