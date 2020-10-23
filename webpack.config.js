const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const path = require('path');

module.exports = {
    mode: 'development',
    entry: ['@babel/polyfill', './src/index.js'],
    devServer: {
        contentBase: path.resolve(__dirname, 'dist'),
    },
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader',],
            },
            {
                test: /\.(png|svg|jpg|gif)$/,
                use: ['file-loader'],
            },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Home',
            template: './src/pages/index.html',
            filename: 'index.html',
        }),
        new HtmlWebpackPlugin({
            title: 'About',
            template: './src/pages/about.html',
            filename: 'about.html',
        }),
        new HtmlWebpackPlugin({
            title: 'Contact Us',
            template: './src/pages/contact.html',
            filename: 'contact.html',
        }),
        new CopyPlugin({
            patterns: [
                { from: './src/assets/images', to: './assets/images'}
            ]
        }),
    ]
};