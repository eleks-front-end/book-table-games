module.exports = (app) => {

    app.get('/api/games', require('./games').get);
};
