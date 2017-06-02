const mongoose = require('./libs/mongoose'),
    async = require('async'),
    Game = require('./models/game').Game;

const open = callback => {
    mongoose.connection.on('open', callback);
}

const dropDatabase = callback => {
    const db = mongoose.connection.db;
    db.dropDatabase(callback);
}

const createGames = callback => {
    const games = [
        {
            timeFrom: new Date(2017, 2, 6, 11, 0, 0, 0),
            timeTo: new Date(2017, 2, 6, 11, 10, 0, 0),
            game: 'tennis'
        },
        {
            timeFrom: new Date(2017, 2, 6, 11, 30, 0, 0),
            timeTo: new Date(2017, 2, 6, 11, 50, 0, 0),
            game: 'tennis'
        },
        {
            timeFrom: new Date(2017, 2, 6, 10, 0, 0, 0),
            timeTo: new Date(2017, 2, 6, 10, 40, 0, 0),
            game: 'tennis'
        }
    ];
    async.each(games, (gameData, callback) => {
        const game = new Game(gameData);
        game.save(callback);
    }, callback);
}

async.series([
    open,
    dropDatabase,
    createGames
], (err, results) => {
    console.log(arguments);
    mongoose.disconnect();
    process.exit(Error ? 255 : 0);
});
