const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');


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
      entry: ['./style.js'],
      module: {
        rules: [
            {
                test: /\.s[ac]ss$/i,
                use: [
                    // Creates `style` nodes from JS strings
                    MiniCssExtractPlugin.loader,
                    // Translates CSS into CommonJS
                    'css-loader',
                    // Compiles Sass to CSS
                    {
                        loader: 'sass-loader',
                        options: {
                            sourceMap: true,
                            sassOptions: {
                                // https://github.com/sass/node-sass#outputstyle
                                outputStyle: 'expanded',
                                minimize: false,
                            }
                        }
                    }
                ],
            },
        ],
      },
      plugins: [
        new MiniCssExtractPlugin({
            filename: "feedback.css"
        })
      ],
      resolve: {
        extensions: ['.css', '.scss'],
      },
      output: {
        path: path.resolve(__dirname, 'dist'),
      },
      optimization: {
        minimize: false
      }
    }
];