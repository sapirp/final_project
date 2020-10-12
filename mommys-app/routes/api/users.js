const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const config = require('config');
const jwt = require('jsonwebtoken');

//User Model - we need that to make queries
const User = require('../../models/User');

//creat routes:

// @route POST api/users
// @desc Register new user
//@access Public

router.post('/', (req, res) => {
    const { name, email, birth_date, password } = req.body;

    //Simple validation
    if (!name || !email || !birth_date || !password) {
        return res.status(400).json({ msg: 'יש למלא את כל השדות' })
    }

    //Check for existing user
    User.findOne({ email })
        .then(user => {
            if (user) return res.status(400).json({ msg: "משתמש זה כבר קיים" });
            // if not exsist
            const newUser = new User({
                name,
                email,
                birth_date,
                password
            });

            //create salt & hash
            bcrypt.genSalt(10, (err, salt) => {
                bcrypt.hash(newUser.password, salt, (err, hash) => {
                    if (err) throw err;
                    newUser.password = hash;
                    newUser.save()
                        .then(user => {

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


                        });
                })
            })

        })
});



module.exports = router;