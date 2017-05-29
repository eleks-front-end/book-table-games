const express = require('express'),
    app = express(),
    path = require('path'),
    port = process.env.PORT || process.env.OPENSHIFT_NODEJS_PORT || 8080,
    ip = process.env.IP || process.env.OPENSHIFT_NODEJS_IP || '0.0.0.0';

app.use(express.static('dist'));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname + '/dist/index.html'));
});

app.listen(port, ip, () => {
    console.log('Server running on http://%s:%s', ip, port);
});

module.exports = app;
