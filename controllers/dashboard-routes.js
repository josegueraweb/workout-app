const router = require('express').Router();
const { User, Entry } = require('../models');
const withAuth = require('../utils/auth');

// get all posts
router.get('/', withAuth, (req, res) => {
  Entry.findAll({
    where: {
      user_id: req.session.user_id
    },
    attributes: ['id', 'title', 'entry_text'],
    include: [
      {
        model: User,
        attributes: ['username']
      }
    ]
  })
  .then(dbEntryData => {
    //serialize the data before passing to the template
    const entries = dbEntryData.map(entry => entry.get({ plain: true }));
    res.render('dashboard', { entries, loggedIn: true });
  })
  .catch(err => {
    console.log(err);
    res.status(500).json(err);
  });
});

//get a single post
router.get('/edit/:id', withAuth, (req, res) => {
  Entry.findOne({
    where: {
      id: req.params.id
    },
    attributes: ['id', 'title', 'entry_text'],
    include: [
      {
        model: User,
        attributes: ['username']
      }
    ]
  })
    .then(dbEntryData => {
      if (!dbEntryData) {
        res.status(404).json({ message: 'No entry found with this id' });
        return;
      }
      //serialize the data
      const entry = dbEntryData.get({ plain: true });
      // pass to the template
      res.render('edit-entry', {
        entry,
        loggedIn: req.session.loggedIn
      });
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.get('/new', (req, res) => {
  res.render('new-entry');
});


module.exports = router;