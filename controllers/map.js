/**
 * GET /map
 * Map page.
 */
exports.getMap = (req, res) => {

    // if (req.user) {
    //     return res.redirect('/');
    // }

    res.render('map', {
        title: 'Map'
    });
};
