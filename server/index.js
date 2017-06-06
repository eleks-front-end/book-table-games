const app = require('./app'),
    ENV = process.env.NODE_ENV,
    path = require('path'),
    historyApiFallback = require('connect-history-api-fallback');

if (ENV === 'development') {
    const webpack = require('webpack'),
        webpackDevMiddleware = require('webpack-dev-middleware'),
        webpackHotMiddleware = require('webpack-hot-middleware'),
        webpackConfig = require('../webpack.dev'),
        compiler = webpack(webpackConfig);

    app.use(historyApiFallback({
        verbose: false
    }));

    app.use(webpackDevMiddleware(compiler, {
        noInfo: true,
        publicPath: webpackConfig.output.publicPath,
        contentBase: webpackConfig.output.path,
        hot: true
    }));

    app.use(webpackHotMiddleware(compiler));
}

const config = require('./config'),
    port = process.env.PORT || config.get('port'),
    ip = process.env.IP || config.get('ip');

if (ENV === 'production') {
    app.use((req, res) => {
        res.sendFile(path.resolve(__dirname, '..', 'dist', 'index.html'));
    });
}

app.listen(port, ip, () => {
    console.log('Server running on http://%s:%s', ip, port);
});
