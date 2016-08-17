/**
 * Created by upsmart on 16-8-16.
 */
module.exports = {
    entry : ['./app.js','./global.js'],
    output : {filename : 'bundle.js'},
    // watch : true,
    module :{
        loaders: [{test:/\.es6$/,
        exclude: /node_modules$/,
        loader: 'babel-loader',
        query: {cacheDirectory: true,presets: ['react', 'es2015'] } } ]
    },
    resolve: { extensions: ['', '.js', '.es6'] }
};