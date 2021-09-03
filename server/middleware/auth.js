const jwt = require('jsonwebtoken');

// create a middleware
const auth = (req, res, next) => {
    const token = req.headers['authorization']

    if(!token){
        return res.status(406).send({err: "No authentication token, authentication denied"})
    }
    const verified = jwt.verify(token, process.env.JWT_SECRET)

    if(!verified){
        return res.status(406).send({err:"Token verificatin failed, aithorization denied"});
    }

    req.user_id = verified.id;
    next();
}

module.exports = auth;
