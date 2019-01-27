const { promisify } = require('util');
const passport = require('passport');
const Ad = require('../models/Ad');
/**
 * POST /ad
 * Add a study buddy Ad for display on the map.
 */
exports.postAd = (req, res, next) => {
    req.assert('location', 'Need location paramter').notEmpty();

    const errors = req.validationErrors();
    const user = req.user;

    console.log('User posting is:');
    console.log(req.user);

    const Ad = new Ad({
        user: req.user,
        time: req.user
    });

    if (errors) {
        req.flash('errors', errors);
        return res.redirect('/map');
    }
};

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
    req.assert('location', 'Need location paramter').notEmpty();

    const errors = req.validationErrors();
    const user = req.user;

    console.log('User posting is:');
    console.log(req.user);

    const Ad = new Ad({
        user: req.user,
        time: req.user
    });

    if (errors) {
        req.flash('errors', errors);
        return res.redirect('/map');
    }

})
