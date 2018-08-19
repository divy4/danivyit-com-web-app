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
                test: /\.(jpe?g|gif|png)$/,
                loader: "url-loader",
                options: {
                    fallback: 'file-loader',
                    limit: 10000,
                    outputPath: 'images/',
                },
            },
            {
                test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
                loader: 'url-loader',
                options: {
                    fallback: 'file-loader',
                    limit: 10000,
                    mimetype: 'image/svg+xml',
                    outputPath: 'images',
                },
            },
            {
                test: /\.(woff|woff2)(\?v=\d+\.\d+\.\d+)?$/,
                loader: 'url-loader',
                options: {
                    fallback: 'file-loader',
                    limit: 10000,
                    mimetype: 'application/font-woff',
                    outputPath: 'fonts/',
                },
            },
            {
                test: /\.ttf$/,
                loader: 'ttf-loader',
                options: {
                    name: './fonts/[hash].[ext]',
                },
            },
            {
                test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
                loader: 'url-loader',
                options: {
                    fallback: 'file-loader',
                    limit: 10000,
                    mimetype: 'application/vnd.ms-fontobject',
                    outputPath: 'fonts/',
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