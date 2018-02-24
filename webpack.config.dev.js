import path from 'path';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import ExtractTextPlugin from 'extract-text-webpack-plugin';

export default {
  debug:true,
  devtool:'inline-source-map',
  noInfo: false,
  entry:[
    path.resolve(__dirname,'src/index')
  ],
  target:'web',
  output:{
    path:path.resolve(__dirname,'src'),
    publicPath:'/',
    filename:'bundle.js'
  },
  plugins:[

    new ExtractTextPlugin('bundle.css'),

    // Create HTML file that includes referece to bundled JS.
    new HtmlWebpackPlugin({
      template:'src/index.html',
      inject:true
    })
  ],
  module:{
    loaders:[
      {test:/\.js$/, exclude:/node_modules/, loaders:['babel']},
      {test:/\.css$/, loader: ExtractTextPlugin.extract('css?sourceMap')}
    ]
  }
}
