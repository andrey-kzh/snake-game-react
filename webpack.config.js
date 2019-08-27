let path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
    mode: "development",
    entry: './src/index.js', //входящий файл
    output: {
        filename: 'bundle.js', //выходящий файл
        path: path.resolve(__dirname, 'dist') //папка в которую собираем проект
    },

    devServer: { //сервер
        contentBase: path.join(__dirname, 'dist'),
        compress: true,
        port: 9000
    },
    module: {
        rules: [{
                test: /\.css$/i, //ccs-loader позволяет инмпортировать css файл в js файл (import css from 'style.css')
                use: [
                    MiniCssExtractPlugin.loader, //собирает импортированные css в единый файл
                    { loader: 'css-loader', options: { importLoaders: 1 } }
                ],
            },
            {
                test: /\.js$/, //Babel
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ["@babel/preset-env", "@babel/preset-react"],
                        //plugins: ["@babel/plugin-syntax-dynamic-import"] //плагин динамического импорта
                    }
                }
            }
        ],
    },
    plugins: [ //создает html страницу при сборке и импортирует в нее бандл (и css?)
        new HtmlWebpackPlugin({
        	template: './src/index.html',
            filename: 'index.html'
        }),
        new MiniCssExtractPlugin({ //собирает импортированные css в единый файл
            filename: "styles.css"
        }),
        new CleanWebpackPlugin(), //очищает папку с билдом
    ]

};