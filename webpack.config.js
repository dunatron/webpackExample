const path = require('path');
const webpack = require('webpack');
const jquery = require('jquery');

module.exports = {

    context: path.resolve(__dirname, './src'),

    entry: {
        //app: './app.js'
        app: ['./app.js', './home.js'],
        events: ['./events.js'],
        vendor: ['jquery']
    },

    output: {
        path: path.resolve(__dirname, './dist'),
        filename: '[name].bundle.js',
        library: 'jquery'
    },


    plugins: [

        new webpack.optimize.CommonsChunkPlugin({
            name: 'commons',
            filename: 'commons.js',
            minChunks: 2,
        }),

    ],


    module: {

            rules: [
                {
                    test: /\.js$/,
                    exclude: [/node_modules/],
                    use: [{
                        loader: 'babel-loader',
                        options: { presets: ['es2015'] },
                    }],
                },

                {
                    test: /\.css$/,
                    use: ['style-loader', 'css-loader'], //Loaders are processed in reverse array order. That means css-loader will run before style-loader.
                },
                {
                    test: /\.(sass|scss)$/,
                    use: [
                        'style-loader',
                        'css-loader',
                        'sass-loader',
                    ]
                },
                {
                    test: /\.vue$/,
                    use: [
                        'vue-loader',
                    ]
                }

                // Loaders for other file types go here

            ]

    }

};