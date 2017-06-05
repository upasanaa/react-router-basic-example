
module.exports = {
    entry: ['./src/index.js'],
    output: {
        path: __dirname + '/build',
        filename: 'bundle.js'

    },
    devtool: 'source-map',

    module: {
        loaders: [
            {
                loader: 'babel-loader',
                test: /\.js$/,
                exclude: /node_modules/
            }
        ]
    },

    stats: {
        errorDetails: true
    },

    devServer: {
    historyApiFallback: true,
  }
};
