// Creates an instance of the "Router" object that is available through Express.js
const router = require('express').Router();
const bcrypt = require('bcrypt');

const User = require('');

router.post('/register', async (req, res) => {

});

router.post('/login', async (req, res) => {
    try {
        const { username, password } = req.body;
        
    }
});

module.exports = router; 