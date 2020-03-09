const express = require('express');
const router = express.Router();


// @route POST api/users 
// @desc reguster a user
// @acess Public

router.post('/', (req, res ) => {
    res.send('REgister a user');
});

module.exports = router;