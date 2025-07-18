// nodeJs_authenticator\auth-backend\models\user.js

const { validationResult } = require('express-validator');

const bcrypt = require('bcrypt.js');

exports.signup = async (req, res, next) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) return
    
    const name = req.body.name;
    const email = req.body.email;
    const password = req.body.password;

    try{
        const hashedPassword = await bcrypt.hash(password, 12);
        const userDetails = {
            name: name, 
            email: email, 
            password: hashedPassword
        };

        const result = await User.save(userDetails);

        res.status(201).json({ message: 'User registered!'})
    } catch (err) {
        if (!err.statusCode) {
             
        }

    }
}