const router = require('express').Router();
const sequelize = require('../config/connection');
const { Entry, User} = require('../models');

router.get('/', (req, res) => {
  Entry.findAll({
    attributes: [
      'id',
      'date',
      "entry_text"     
    ]
  })
    .then(dbEntryData => {
      const entries = dbEntryData.map(entry => entry.get({ plain: true }));
      // pass a single post object into the homepage template
      res.render('homepage', { 
        entries,
        loggedIn: req.session.loggedIn 
      });
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});
router.get('/journal', (req, res) => {
  Entry.findAll({
    attributes: [
      'id',
      'date',
      "entry_text"     
    ]
  })
    .then(dbEntryData => {
      const entries = dbEntryData.map(entry => entry.get({ plain: true }));
      // pass a single post object into the homepage template
      if(req.session.loggedIn) {
      res.render('journal', { 
        entries,
        loggedIn: req.session.loggedIn 
      });} else {
        res.render('login')
      }
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
  
});
router.get('/register', (req, res)=> {
  res.render('register')
})
router.get('/login', (req, res) => {
  if (req.session.loggedIn) {
    res.redirect('/');
    return;
  }
  res.render('login');
});

router.get('/entry/:id', (req, res) => {
  Entry.findOne({
    where: {
      id: req.params.id
    },
    attributes: [
      'id',
      'date',
      'entry_text'
    ]
  })
  .then(dbEntryData => {
    if (!dbEntryData) {
      res.status(404).json({ message: 'No Entry found' });
      return;
    }
    //serialize the data
    const entry = dbEntryData.get({ plain: true });

    //pass data to the template
    res.render('single-entry', {
      entry, 
      loggedIn: req.session.loggedIn
    });
  })
  .catch(err => {
    console.log(err);
    res.status(500).json(err);
  });
});

module.exports = router;