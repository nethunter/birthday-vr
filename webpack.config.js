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
    resolve: {
        modules: ['node_modules']
    },
    devServer: {
        static: {
            directory: path.join(__dirname, 'public'),
        },
        server: 'https',
        host: '0.0.0.0',
        compress: true,
        port: 8086,
    }
};
