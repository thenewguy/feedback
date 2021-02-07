const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.plugins = [
    new MiniCssExtractPlugin()
]

module.exports = [
    {
      entry: ['./index.ts'],
      module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/
            }
        ],
      },
      resolve: {
        extensions: ['.tsx', '.ts', '.js'],
      },
      output: {
        filename: 'feedback.js',
        path: path.resolve(__dirname, 'dist'),
      },
      optimization: {
        minimize: false
      }
    },
    {
      entry: ['./index.scss'],
      module: {
        rules: [
            {
                test: /\.s[ac]ss$/i,
                use: [
                    // Creates `style` nodes from JS strings
                    MiniCssExtractPlugin.loader,
                    // Translates CSS into CommonJS
                    "css-loader",
                    // Compiles Sass to CSS
                    "sass-loader",
                ],
            },
        ],
      },
      resolve: {
        extensions: ['.scss', '.css'],
      },
      output: {
        filename: 'feedback.css',
        path: path.resolve(__dirname, 'dist'),
      },
      optimization: {
        minimize: false
      }
    }
];