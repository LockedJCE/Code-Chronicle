const router = require('express').Router();

const userRoutes = require('./userRoutes');
const bpostRoutes = require('./bpostRoutes');
const commentRoutes = require('./commentRoutes');

router.use('/users', userRoutes);
router.use('/bposts', bpostRoutes);
router.use('/comments', commentRoutes);

module.exports = router;