const path = require('path');
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin");

module.exports = {
  mode: 'production',
  entry:  './src/style.css',
  devtool: 'inline-source-map',
  output: {
    path: path.resolve(__dirname, 'dist'),
    clean: true,
    filename: 'dummy.js',
  },
  module: {
    rules: [
      {
            test: /\.css$/,
            use: [{ loader: MiniCssExtractPlugin.loader,}, "css-loader"],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif|wav|mp3)$/i,
        type: 'asset/resource',
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
        template: './src/index.html',
        inject: false,
    }),
    new MiniCssExtractPlugin({
      filename: "main.css"
    }),
    new CopyPlugin({
      patterns: [
        { from: "src/img", to: "images" },
       
      ],
    }), 
  ],

  optimization: {
    minimizer: [
      new CssMinimizerPlugin(),
    ],
  },
 
};