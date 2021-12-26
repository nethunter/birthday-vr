const path = require('path');
const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
    target: 'web',
    entry: './src/index.js',
    output: {
        filename: 'main.js',
    },
    plugins: [
        new CopyPlugin({
            patterns: [
                { from: "public" }
            ]
        }),
    ],
    devServer: {
        static: {
            directory: path.join(__dirname, 'public'),
        },
        server: 'https',
        compress: true,
        port: 8086,
    }
};
