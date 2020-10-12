const config = require('config');
const jwt = require('jsonwebtoken');

//the porpes of this function is to get the token thet sent from the frontend and send it along
function auth(req, res, next) {
    const token = req.header('x-auth-token');

    //Check for token
    if (!token) return res.status(401).json({ msg: 'יש להתחבר מחדש' });

    try {
        //Verify token
        const decoded = jwt.verify(token, config.get('jwtSecret'));
        //Add user from payload
        req.user = decoded;
        next();

    } catch (e) {
        res.status(400).json({ msg: 'Token is not valid' })
    }
}

module.exports = auth;