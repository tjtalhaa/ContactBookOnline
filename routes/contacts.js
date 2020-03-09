const express = require('express');
const router = express.Router();


// @route Get api/contact
// @desc  Get all user Contacts
// @acess Private

router.get('/', (req, res ) => {
    res.send('Get all the contacts');
});


// @route Post api/contact
// @desc  Add new Contacts
// @acess Private

router.post('/', (req, res ) => {
    res.send('Add new contact');
});


// @route PUT api/contact/:id
// @desc  Update Contact
// @acess Private

router.put('/:id', (req, res ) => {
    res.send('Update contact');
});

// @route PUT api/contact/:id
// @desc  Delete Contact
// @acess Private

router.delete('/:id', (req, res ) => {
    res.send('Delete contact');
});

module.exports = router;