// nodeJs_authenticator\auth-backend\routes\auth.js
const express = require('express');
const router = express.Router();
const { body } = require('express-validator');
const User = require('./models/user');

router.post(
    '/signup', 
    [
        body('name')
        .trim()
        .not()
        .isEmpty(),

        body('email')
        .isEmail()
        .withMessage('please enter a valid email.')
        .custom(async (email) => {
            const user = await User.find(email);
            if (user[0].length > 0) {
                return Promise.reject('Email address already exist!')
            }
        })
        .normalizeEmail(),
        body('password').trim().isLength({ min: 7})
    ], authContoller.signup
);

module.exports = router;
