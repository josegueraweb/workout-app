const router = require('express').Router();
const { Entry, User } = require('../../models');
const withAuth = require('../../utils/auth');
router.get('/', (req, res) => {
  Entry.findAll({
    attributes: ['id', 'title', 'entry_text'],
    include: [
      {
        model: User,
        attributes: ['username']
      }
    ]
  })
  .then(dbEntryData => res.json(dbEntryData))
  .catch(err => {
    console.log(err);
    res.status(500).json(err);
  });
});

router.get('/:id', (req, res) => {
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
      res.json(dbEntryData);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.post('/', withAuth, (req, res) => {  
  Entry.create({
    title: req.body.title,
    entry_text: req.body.entry_text,
    user_id: req.session.user_id
  })
    .then(dbEntryData => res.json(dbEntryData))
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.put('/:id', withAuth, (req, res) => {
  Entry.update(
    {
      title: req.body.title,
      entry_text: req.body.entry_text
    },
    {
      where: {
        id: req.params.id
      }
    }
  )
    .then(dbEntryData => {
      if (!dbEntryData) {
        res.status(404).json({ message: 'No entry found with this id' });
        return;
      }
      res.json(dbEntryData);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.delete('/:id', withAuth, (req, res) => {
  Entry.destroy({
    where: {
      id: req.params.id
    }
  })
    .then(dbEntryData => {
      if (!dbEntryData) {
        res.status(404).json({ message: 'No entry found with this id' });
        return;
      }
      res.json(dbEntryData);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

module.exports = router;