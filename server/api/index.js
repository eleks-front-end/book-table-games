const basePath = url => `/api/${url}`;

module.exports = app => {
    app.get(basePath('games'), require('./games').get);
    app.get(basePath('users'), require('./scim/users').get);
};
