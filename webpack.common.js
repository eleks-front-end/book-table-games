var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var path = require('path');

var baseHref = process.env.WP_BASE_HREF ? process.env.WP_BASE_HREF : '/';

module.exports = {

    entry: {
        'vendor': './app/Vendor.jsx',
        'app': './app/App.jsx'
    },

    resolve: {
        modules: [
            path.join(__dirname, ''), 'node_modules'
        ],
        extensions: ['.js', '.jsx']
    },

    module: {
        rules: [{
            test: /\.js/,
            use: {
                loader: 'babel-loader',
                options: {
                    presets: ['es2015']
                }
            }
        }, {
            test: /\.jsx$/,
            use: [{
                loader: 'react-hot-loader'
            }, {
                loader: 'babel-loader',
                options: {
                    presets: ['es2015', 'react'],
                    compact: false
                }
            }],
            exclude: /node_modules/
        }, {
            test: /\.css$/,
            exclude: path.join(process.cwd(), '/app'),
            use: ExtractTextPlugin.extract({
                fallback: 'style-loader',
                use: {
                    loader: 'css-loader',
                    options: {
                        sourceMap: true
                    }
                }
            })
        }, {
            test: /\.css$/,
            include: path.join(process.cwd(), '/app'),
            loader: 'raw'
        }, {
            test: /\.woff|\.woff2|\.svg|.eot|\.ttf/,
            use: {
                loader: 'url-loader',
                options: {
                    prefix: 'font/',
                    limit: 10000
                }
            }
        }, {
            test: /\.(png|jpg|gif)$/,
            use: {
                loader: 'url-loader',
                options: {
                    limit: 10000
                }
            }
        }, {
            test: /\.scss$/,
            use: [{
                loader: 'style-loader'
            }, {
                loader: 'css-loader'
            }, {
                loader: 'sass-loader',
                options: {
                    outputStyle: 'expanded'
                }
            }]
        }]
    },

    plugins: [
        new webpack.optimize.CommonsChunkPlugin({
            name: 'vendor',
            filename: 'vendor[hash:6].js'
        }),
        new HtmlWebpackPlugin({
            template: 'app/index.html',
            baseUrl: baseHref
        }),
        new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery',
            'window.jQuery': 'jquery'
        }),
        // https://github.com/moment/moment/issues/2979#issuecomment-189899510
        new webpack.DefinePlugin({
            WP_BASE_HREF: JSON.stringify(baseHref)
        })
    ]
};
