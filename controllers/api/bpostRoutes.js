const router = require('express').Router();
const { Bpost } = require('../../models');
const withAuth = require('../../utils/auth');

router.post('/', withAuth, async (req, res) => {
    try {
      const newBpost = await Bpost.create({
        ...req.body,
        user_id: req.session.user_id,
      });
  
      res.status(200).json(newBpost);
    } catch (err) {
      res.status(400).json(err);
    }
  });
  
  router.delete('/:id', withAuth, async (req, res) => {
    try {
      const bpostData = await Bpost.destroy({
        where: {
          id: req.params.id,
          user_id: req.session.user_id,
        },
      });
  
      if (!bpostData) {
        res.status(404).json({ message: 'No post found with this id!' });
        return;
      }
  
      res.status(200).json(bpostData);
    } catch (err) {
      res.status(500).json(err);
    }
  });
  
  module.exports = router;