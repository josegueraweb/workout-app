const router = require('express').Router();
const User = require('../../models/User');
// const withAuth = require('../../utils/auth');  ... not sure if needed.

// Logic for Login Form 
router.post('/', async (req, res) => {
  try {
    const userData = await User.create(req.body);
    req.session.save(() => {
      req.session.user_id = userData.id;
      req.session.loggedIn = true;
      res.status(200).json(userData);
    })

  } catch (err) {
    res.status(400).json(err);
  }
});

// Logic for Login Form 
router.post('/login', async (req, res) => {
  try {
    const userData = await User.findOne({
      where: {
        email: req.body.email
      }
    });
    console.log(req.body);
    if (!userData) {
      res
        .status(400)
        .json({
          message: 'Cannot find user.'
        });
      return;
    }

    const validPassword = await userData.checkPassword(req.body.password);
    console.log(userData, validPassword);
    if (!validPassword) {
      res
        .status(400)
        .json({
          message: 'Incorrect email or password, please try again'
        });
      return;
    }

    req.session.save(() => {
      req.session.user_id = userData.id;
      req.session.logged_in = true;

      res.json({
        user: userData,
        message: 'You are now logged in!'
      });
    });

  } catch (err) {
    console.error(err);
    res.status(400).json(err);
  }
});


// Logic for Register Form (ver.1/2)
router.post('/register', async (req, res) => {
  try {
    const userData = await User.create(req.body);

    req.session.save(() => {
      req.session.user_id = userData.id;
      req.session.logged_in = true;

      res.status(200).json(userData);
    });
  } catch (err) {
    console.error(err);
    res.status(400).json(err);
  }
});


// Logic for Logout Button
router.post('/logout', (req, res) => {
  if (req.session.logged_in) {
    req.session.destroy(() => {
      res.status(204).end();
    })
  } else {
    res.status(404).end();
  }
});

module.exports = router;





// Not sure if needed at the moment





// // Logic for Register Form (ver.2/2) ... maybe use. 
// router.post('/register', (req, res) => {
//   User.create({
//       email: req.body.email,
//       firstName: req.body.firstName,
//       lastName: req.body.lastName,
//       phoneNumber: req.body.phoneNumber,
//       password: req.body.password,
//     })
//     .then(dbUserData => {
//       req.session.save(() => {
//         req.session.user_id = dbUserData.id;
//         req.session.loggedIn = true;

//         res.json(dbUserData)
//       })
//     })
//     .catch(err => {
//       console.log(err);
//       res.status(500).json(err);
//     });
// });





// // Get All users
// router.get('/', (req, res) => {
//   User.findAll({
//     attributes: { exclude: ['password'] }
//   })
//   .then(dbUserData => res.json(dbUserData))
//   .catch(err => {
//     console.log(err);
//     res.status(500).json(err);
//   });
// });





// // Get a single user by id number
// router.get('/:id', (req, res) => {
//   User.findOne({
//     attributes: { exclude: ['password'] },
//     where: {
//       id: req.params.id
//     },
//     include: [
//       {
//         model: Post,
//         attributes: ['id', 'title', 'entry_text']
//       }
//     ]
//   })
//   .then(dbUserData => {
//     if (!dbUserData) {
//       res.status(404).json({ message: 'No User found with this id' });
//       return;
//     }
//   })
//   .catch(err => {
//     console.log(err);
//     res.status(500).json(err);
//   });
// });





// //update a user by id number
// router.put('/:id', (req, res) => {
//   User.update(req.body, {
//     individualHooks: true,
//     where: {
//       id: req.params.id
//     }
//   })
//   .then(dbUserData => {
//     if (!dbUserData[0]) {
//       res.status(404).json({ message: 'No User found with this id' });
//       return;
//     }
//     res.json(dbUserData);
//   })
//   .catch(err => {
//     res.status(500).json(err);
//   });
// });





// //Delete a user by id number
// router.delete('/:id', (req, res) => {
//   User.destroy({
//     where: {
//       id: req.params.id
//     }
//   })
//   .then(dbUserData => {
//     if (!dbUserData) {
//       res.status(404).json({ message: 'No User found with this id' });
//       return;
//     }
//     res.json(dbUserData);
//   })
//   .catch(err => {
//     console.log(err);
//     res.status(500).json(err);
//   });
// });




// //login route
// router.post('/login', (req, res) => {
//   User.findOne({
//     where: {
//       email: req.body.email 
//     }
//   })
//   .then(dbUserData => {
//     //verify user
//     if(!dbUserData) {
//       res.status(400).json({ message: 'Username not Found' });
//       return;
//     }
//     const validPassword = dbUserData.checkPassword(req.body.password);
//     if (!validPassword) {
//       res.status(400).json({ message: 'Incorrect Password' });
//       return;
//     }
//     req.session.save(() => {
//       req.session.user_id = dbUserData.id;
//       req.session.loggedIn = true;
//       res.json({user: dbUserData, message: 'You are now logged in!' });
//     });
//   });
// });