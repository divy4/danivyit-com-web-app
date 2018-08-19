const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
module.exports = {
    entry: './src/index.tsx',
    output: {
        filename: "[name].bundle.js",
        path: path.resolve(__dirname, 'dist'),
    },
    devtool: 'source-map', 
    resolve: {
        extensions: ['.js', '.json', '.ts', '.tsx'],
    },
    module: {
        rules: [
            {
                test: /\.(ts|tsx)$/,
                loader: "awesome-typescript-loader",
            },
            {
                test: /\.css$/,
                exclude: path.resolve(__dirname, "src"),
                use: [
                    {
                        loader: 'style-loader',
                    },
                    {
                        loader: 'css-loader',
                    },
                ],
            },
            {
                test: /\.css$/,
                exclude: path.resolve(__dirname, "node_modules"),
                use: [
                    {
                        loader: 'style-loader',
                    },
                    {
                        loader: 'typings-for-css-modules-loader',
                        options: {
                            camelCase: true,
                            modules: true,
                            namedExport: true,
                        },
                    },
                ],
            },
            {
                test: /\.(jpe?g|gif|png|svg|woff|ttf|wav|mp3)$/,
                loader: "file-loader",
            },
            {
                test: /\.(woff|woff2)(\?v=\d+\.\d+\.\d+)?$/,
                loader: 'url-loader',
                options: {
                    limit: 10000,
                    mimetype: 'application/font-woff',
                },
            },
            {
                test: /\.ttf$/,
                loader: 'ttf-loader',
                options: {
                    name: './font/[hash].[ext]',
                },
            },
            {
                test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
                loader: 'file-loader',
            },
            {
                test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
                loader: 'url-loader',
                options: {
                    limit: 10000,
                    mimetype: 'image/svg+xml',
                },
            },
        ],
    },
    plugins: [
        new CopyWebpackPlugin([
            {
                from: 'static',
                to: 'static',
            }
        ]),
        new HtmlWebpackPlugin({
            template: 'src/index.html',
        }),
    ],
};