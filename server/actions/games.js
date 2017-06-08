const Game = require('../models/game').Game;

exports.get = (req, res) => {
    Game.find((err, games) => {
        if (err) {
            res.send(err);
        }

        res.json(games);
    });
};
