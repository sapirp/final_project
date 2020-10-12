const express = require('express');
const router = express.Router();
const auth = require('../../middleware/auth')

//Feeding Model - we need that to make queries
const Feeding = require('../../models/Feeding');

//creat routes:

// @route GET api/feedingTrack
// @desc Get All feedingTracks
//@access Public

router.get('/:uid', (req, res) => {
    Feeding.find({ userId: req.params.uid })
        .sort({ date: -1 })
        .then(feedingTrack => res.json(feedingTrack))
});

// @route POST api/feedingTrack
// @desc Create a feedingTrack
//@access Private

router.post('/', (req, res) => {
    const newFeeding = new Feeding({
        breast_feeding: req.body.breast_feeding,
        bottle: req.body.bottle,
        amount: req.body.amount,
        left_side: req.body.left_side,
        right_side: req.body.right_side,
        notes: req.body.notes,
        time: req.body.time,
        duration: req.body.duration,
        userId: req.body.userId
    });

    newFeeding.save().then(feedingTrack => res.json(feedingTrack));
});


// @route DELETE api/feedingTrack/:id
// @desc Delete an feedingTrack
//@access Private

router.delete('/:id', (req, res) => {
    WellCare.findById(req.params.id)
        .then(feedingTrack => feedingTrack.remove().then(() => res.json({ success: true })))
        .catch(err => res.status(404).json({ success: false }));
});



module.exports = router;