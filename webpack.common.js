var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var CopyWebpackPlugin = require('copy-webpack-plugin');
var path = require('path');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
require('dotenv').config({ silent: true });

var baseHref = process.env.WP_BASE_HREF ? process.env.WP_BASE_HREF : '/';
var context = path.join(process.cwd(), 'app');
var getClientEnvironment = require('./config/env');
var env = getClientEnvironment(baseHref);

module.exports = {
    entry: {
        'app': path.join(context, 'App.jsx'),
        'vendor': [
            'babel-polyfill',
            path.join(context, 'Vendor.jsx')
        ]
    },

    resolve: {
        modules: [
            context,
            'node_modules'
        ],
        extensions: ['.js', '.jsx']
    },

    module: {
        rules: [{
            test: /\.js/,
            use: {
                loader: 'babel-loader',
                options: {
                    presets: ['es2015'],
                    plugins: [
                        'transform-es2015-destructuring',
                        'transform-object-rest-spread'
                    ]
                }
            },
            exclude: /node_modules/
        }, {
            test: /\.jsx$/,
            use: [{
                loader: 'react-hot-loader'
            }, {
                loader: 'babel-loader',
                options: {
                    presets: ['es2015', 'react'],
                    plugins: [
                        'transform-react-jsx',
                        [
                            'react-css-modules',
                            {
                                generateScopedName: '[name]__[local]___[hash:base64:5]',
                                filetypes: {
                                    '.scss': 'postcss-scss'
                                }
                            }
                        ],
                        'transform-es2015-destructuring',
                        'transform-object-rest-spread'
                    ],
                    compact: false
                }
            }],
            exclude: /node_modules/
        }, {
            test: /\.css$/,
            exclude: path.join(process.cwd(), '/'),
            use: ExtractTextPlugin.extract({
                fallback: 'style-loader',
                use: {
                    loader: 'css-loader'
                }
            })
        }, {
            test: /\.css$/,
            include: path.join(process.cwd(), '/'),
            use: [{
                loader: 'style-loader'
            }, {
                loader: 'css-loader'
            }]
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
            include: path.join(context, 'components'),
            use: [{
                loader: 'style-loader'
            }, {
                loader: 'css-loader',
                options: {
                    modules: true,
                    localIdentName: '[name]__[local]___[hash:base64:5]',
                    sourceMap: true
                }
            }, {
                loader: 'resolve-url-loader'
            }, {
                loader: 'sass-loader',
                options: {
                    outputStyle: 'expanded'
                }
            }]
        }, {
            test: /\.scss$/,
            exclude: path.join(context, 'components'),
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
        new CopyWebpackPlugin([{
            from: 'img',
            to: 'img',
            context
        }]),
        new HtmlWebpackPlugin({
            template: path.join(context, 'index.html'),
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
        }),
        new webpack.DefinePlugin(env)
    ]
};
