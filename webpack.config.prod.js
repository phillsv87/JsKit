import path from 'path';
import webpack from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import WebpackMd5Hash from 'webpack-md5-hash';
import ExtractTextPlugin from 'extract-text-webpack-plugin';

export default {
  debug:true,
  devtool:'source-map',
  noInfo: false,
  entry:{
    vendor:path.resolve(__dirname,'src/vendor'),
    main:path.resolve(__dirname,'src/index')
  },
  target:'web',
  output:{
    path:path.resolve(__dirname,'dist'),
    publicPath:'/',
    filename:'[name].[chunkhash].js'
  },
  plugins:[

    new ExtractTextPlugin('[name].[contenthash].css'),

    // Generate MD5 hashes for bundel names
    new WebpackMd5Hash(),

    // Tell webpack to not include vendor references in main bundle
    new webpack.optimize.CommonsChunkPlugin({
      name:'vendor'
    }),

    // Create HTML file that includes referece to bundled JS.
    new HtmlWebpackPlugin({
      template:'src/index.html',
      inject:true,
      minify:{
        removeComments:true,
        collapseWhitespace:true,
        removeRedundantAttributes:true,
        useShortDoctype:true,
        removeEmptyAttributes:true,
        removeStyleLinkTypeAttributes:true,
        keepClosingSlash:true,
        minifyJS:true,
        minifyCSS:true,
        minifyURLs:true
      },
      trackJSToken:'817b03e7a55e47e191ae36db003a97cc'
    }),

    // Remove duplicate packages
    new webpack.optimize.DedupePlugin(),

    // Minify JS
    new webpack.optimize.UglifyJsPlugin()
  ],
  module:{
    loaders:[
      {test:/\.js$/, exclude:/node_modules/, loaders:['babel']},
      {test:/\.css$/, loader: ExtractTextPlugin.extract('css?sourceMap')}
    ]
  }
}
