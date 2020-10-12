const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const config = require('config');
const jwt = require('jsonwebtoken');
const auth = require('../../middleware/auth');

//User Model - we need that to make queries
const User = require('../../models/User');

//creat routes:

// @route POST api/auth
// @desc Auth user
//@access Public

router.post('/', (req, res) => {
    const { email, password } = req.body;

    //Simple validation
    if (!email || !password) {
        return res.status(400).json({ msg: 'יש למלא את כל השדות' })
    }

    //Check for existing user
    User.findOne({ email })
        .then(user => {
            if (!user) return res.status(400).json({ msg: "משתמש לא קיים" });

            //Validate password
            bcrypt.compare(password, user.password)
                .then(isMatch => {
                    if (!isMatch) return res.status(400).json({ msg: "אימייל או סיסמה שגויים" });

                    jwt.sign(
                        { id: user.id },
                        config.get('jwtSecret'),
                        { expiresIn: 10000 },
                        (err, token) => {
                            if (err) throw err;
                            res.json({
                                token,
                                user: {
                                    id: user.id,
                                    name: user.name,
                                    email: user.email,
                                    birth_date: user.birth_date
                                }
                            });
                        }
                    )
                })
        })
});


// @route Get api/auth/user
// @desc Get user 
//@access Private
router.get('/user', auth, (req, res) => {
    User.findById(req.user.id)
        .select('-password')
        .then(user => res.json(user));
})



module.exports = router;