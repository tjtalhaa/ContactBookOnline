const jwt = require('jsonwebtoken');
const config = require('config');


module.exports = function (req, res, next){

//Get the token fronm header
const token = req.header('x-auth-token');

//checkk if the token is there
if(!token){
    return res.status(401).json( {msg: "no tokenn, Authorization denied"});
}

try {
    const decoded = jwt.verify(token, config.get('jwtSecret'));
    req.user = decoded.user;
    next()
} catch (err) {
    console.error(err.message);
    res.status(401).json({ msg: "Token is not valid"});
}
}