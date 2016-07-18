module.exports = {
    entry: "./js/app.js",
    output: {
        path: __dirname,
        filename: "./static/bundle.js"
    },
    module: {
        loaders: [
            {
                test: /.js?$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                query: {
                    presets: ['es2015', 'react']
                }
            }
        ]
    }
};