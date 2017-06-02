module.exports = (app) => {

    app.get('/games', require('./games').get);
};
