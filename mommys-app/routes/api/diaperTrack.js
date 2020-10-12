const express = require('express');
const router = express.Router();
const auth = require('../../middleware/auth')

//Diapers Model - we need that to make queries
const Diapers = require('../../models/Diapers');

//creat routes:

// @route GET api/diaperTrack/:uid
// @desc Get All diaperTrack
//@access Public

router.get('/:uid', (req, res) => {
    Diapers.find({ userId: req.params.uid })
        .sort({ date: -1 })
        .then(diaperTrack => res.json(diaperTrack))
});

// @route POST api/diaperTrack
// @desc Create a diaperTrack
//@access Private

router.post('/', (req, res) => {
    const newDiapers = new Diapers({
        pee: req.body.pee,
        poop: req.body.poop,
        changing_time: req.body.changing_time,
        notes: req.body.notes,
        userId: req.body.userId
    });

    newDiapers.save().then(diaperTrack => res.json(diaperTrack));
});


// @route DELETE api/diaperTrack/:id
// @desc Delete an diaperTrack
//@access Private

router.delete('/:id', (req, res) => {
    Diapers.findById(req.params.id)
        .then(diaperTrack => diaperTrack.remove().then(() => res.json({ success: true })))
        .catch(err => res.status(404).json({ success: false }));
});



module.exports = router;