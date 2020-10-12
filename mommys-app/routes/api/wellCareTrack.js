const express = require('express');
const router = express.Router();
const auth = require('../../middleware/auth')

//WellCare Model - we need that to make queries
const WellCare = require('../../models/WellCare');

//creat routes:

// @route GET api/wellCareTrack
// @desc Get All wellCareTracks
//@access Public

router.get('/:uid', (req, res) => {
    WellCare.find({ userId: req.params.uid })
        .sort({ date: -1 })
        .then(wellCareTrack => res.json(wellCareTrack))
});

// @route POST api/wellCareTrack
// @desc Create a wellCareTrack
//@access Private

router.post('/', (req, res) => {
    const newWellCare = new WellCare({
        date: req.body.date,
        height: req.body.height,
        weight: req.body.weight,
        notes: req.body.notes,
        document: req.body.document,
        userId: req.body.userId
    });

    newWellCare.save().then(wellCareTrack => res.json(wellCareTrack));
});


// @route DELETE api/wellCareTrack/:id
// @desc Delete an wellCareTrack
//@access Private

router.delete('/:id', (req, res) => {
    WellCare.findById(req.params.id)
        .then(wellCareTrack => wellCareTrack.remove().then(() => res.json({ success: true })))
        .catch(err => res.status(404).json({ success: false }));
});



module.exports = router;