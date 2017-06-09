const request = require('request'),
    config = require('../../config');

exports.get = (req, res) => {
    const options = Object.assign({
        url: '/Users',
        qs: {
            filter: `userName Eq *${req.query.q}*`
        }
    }, config.get('SCIMAPI'));

    request(options, (err, response, body) => {
        if (err) {
            res.send(err);
        }

        res.json(body);
    });
};
