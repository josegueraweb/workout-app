const router = require('express').Router();
const User = require('../models/User');
const withAuth = require('../utils/auth');

router.get('/', (req, res) => {
  res.render('login', { 
    layout: 'main',
    logged_in: req.session.logged_in 
  });
});


router.get('/login', (req, res) => {
  if (req.session.logged_in) {
    res.redirect('/dashboard');
    return;
  }

  res.render('login');
});

router.get('/register', (req, res) => {
  if (req.session.logged_in) {
    res.redirect('/dashboard');
    return;
  }

  res.render('register');
});


router.get('/dashboard', withAuth, async (req, res) => {
  try {
    const userData = await User.findByPk(req.session.user_id, {
      attributes: { exclude: ['password'] },
    });

    const user = userData.get({ plain: true });

    res.render('dashboard', {
      ...user,
      logged_in: true
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;



// Not sure if needed at the moment


// // get all posts
// router.get('/', withAuth, (req, res) => {
//   Entry.findAll({
//     where: {
//       user_id: req.session.user_id
//     },
//     attributes: ['id', 'title', 'entry_text'],
//     include: [
//       {
//         model: User,
//         attributes: ['username']
//       }
//     ]
//   })
//   .then(dbEntryData => {
//     //serialize the data before passing to the template
//     const entries = dbEntryData.map(entry => entry.get({ plain: true }));
//     res.render('journal', { entries, loggedIn: true });
//   })
//   .catch(err => {
//     console.log(err);
//     res.status(500).json(err);
//   });
// });

// //get a single post
// router.get('/edit/:id', withAuth, (req, res) => {
//   Entry.findOne({
//     where: {
//       id: req.params.id
//     },
//     attributes: ['id', 'title', 'entry_text'],
//     include: [
//       {
//         model: User,
//         attributes: ['username']
//       }
//     ]
//   })
//     .then(dbEntryData => {
//       if (!dbEntryData) {
//         res.status(404).json({ message: 'No entry found with this id' });
//         return;
//       }
//       //serialize the data
//       const entry = dbEntryData.get({ plain: true });
//       // pass to the template
//       res.render('edit-entry', {
//         entry,
//         loggedIn: req.session.loggedIn
//       });
//     })
//     .catch(err => {
//       console.log(err);
//       res.status(500).json(err);
//     });
// });

// router.get('/new', (req, res) => {
//   res.render('new-entry');
// });


// module.exports = router;