const path = require('path');

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
        filename: '[name].js',
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
                    "style-loader",
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
        filename: '[name].css',
        path: path.resolve(__dirname, 'dist'),
      },
      optimization: {
        minimize: false
      }
    }
];