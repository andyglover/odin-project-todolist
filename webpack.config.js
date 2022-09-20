const path = require('path');

module.exports = {
    mode: 'development',
    entry: './src/index.js',
    devtool: 'inline-source-map',
    devServer: {
        static:  './dist',
    },
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist'),
    },
    optimization: {
        runtimeChunk: 'single'
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Document',
            filename: 'index.html',
            template: 'src/template.html',
        })
    ]
};