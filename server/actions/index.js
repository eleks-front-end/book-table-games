module.exports = (app) => {

    app.get('/api/games', require('./games').get);
    app.get('/api/users', require('./scim/users').get);
};
