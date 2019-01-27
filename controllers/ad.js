const { promisify } = require('util');
const passport = require('passport');
const Ad = require('../models/Ad');
const User = require('../models/User');

exports.getFindabuddy = (req, res) => {
    res.render('findabuddy', {
        title: 'findabuddy'
    });
};

/**
 * POST /ad
 * Add a study buddy Ad for display on the map.
 */
exports.postAd = (req, res, next) => {
    const errors = req.validationErrors();
    const user = req.user;

    console.log('User posting is:');
    console.log(user);
    console.log(user.profile.name);

    const ad = new Ad({
        userId: req.user,
        message: req.user
    });

    ad.save((err) => {
        if (err) { return next(err); }
        req.logIn(Ad, (err) => {
            if (err) {
                return next(err);
            }
            res.redirect('map');
        });
    });

    if (errors) {
        req.flash('errors', errors);
        return res.redirect('/findabuddy');
    }

    else {
        return res.redirect('/map');
    }
};
