const router = require('express').Router();
const sequelize = require('../config/connection');
const { Entry, User} = require('../models');
const withAuth = require('../utils/auth');

router.get('/', (req, res) => {
  Entry.findAll({
    attributes: [
      'id',
      'title',
      "entry_text"     
    ],
    include: [
      {
        model: User,
        attributes: ['email']
      }
    ]
  })
    .then(dbEntryData => {
      const entries = dbEntryData.map(entry => entry.get({ plain: true }));
      // pass a single post object into the homepage template
      res.render('home', { 
        stylesheet: "style.css",
        entries,
        loggedIn: req.session.loggedIn 
      });
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.get("/profile", withAuth, (req,res) => {
  res.render('profile', { 
    stylesheet: "profile.css",
    loggedIn: req.session.loggedIn 
  });
})

router.get("/signup", (req,res) => {
  res.render('signup', { 
    stylesheet: "signup.css",
    loggedIn: req.session.loggedIn 
  });
})

// router.get('/login', (req, res) => {
//   if (req.session.loggedIn) {
//     res.redirect('/');
//     return;
//   }
//   res.render('login');
// });

router.get('/entry/:id', (req, res) => {
  Entry.findOne({
    where: {
      id: req.params.id
    },
    attributes: [
      'id',
      'title',
      'entry_text'
    ],
    include: [
      {
        model: User,
        attributes: ['email']
      }
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