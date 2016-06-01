var webpack = require('webpack'),
       path = require('path'),
       commonsPlugin = new webpack.optimize.CommonsChunkPlugin("vendor", "vendor.bundle.js");

// console.log(__dirname);
// console.log(". = %s", path.resolve("."));

module.exports = {
    context: __dirname + '/app',
    entry: {
        app: './app.js',
        vendor: ['angular']  
    },
    output: {
        path: __dirname + '/public/scripts',
        filename: 'data.bundle.js'
    },
    module: {
    	loaders: [
    		{
    			test: /\.css$/,
    			loader: "style-loader!css-loader"
    		},
            {
                test: /\.html$/,
                loader: "html-loader"
            }
    	]
    },
    plugins: [
        commonsPlugin// new webpack.optimize.CommonsChunkPlugin( chunkName= "vendor", /* filename= */"vendor.bundle.js")
    ]
};