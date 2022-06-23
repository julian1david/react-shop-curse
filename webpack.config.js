//aca agregamos la configuracion de webpack

//Nos permite donde vamos a trabajar (path):
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const path = require('path');


//anadimos cada configuracion necesaria para nuestro proyecto:
module.exports = {
    //donde esta el punto de entrada de nuestra aplicacion:
    entry: './src/index.js',
    //donde vive el proyecto una vez preparado:
    output: {
        path: path.resolve(__dirname, 'dist'),
        //ponemos el nombre al empaquetado:
        filename: 'bundle.js',
        publicPath: '/',
    },
    //agregamos la configuracion de desarrollo:
    mode: 'development',
    //extensiones y como vamos a trabajar en nuestro proyecto (app):
    resolve: {
        extensions: ['.js', '.jsx'],
        alias: {
            '@components': path.resolve(__dirname, 'src/components'),
            '@containers': path.resolve(__dirname, 'src/containers'),
            '@pages': path.resolve(__dirname, 'src/pages'),
            '@styles': path.resolve(__dirname, 'src/styles'),
            '@icons': path.resolve(__dirname, 'src/assets/icons'),
            '@logos': path.resolve(__dirname, 'src/assets/logos'),
        }
    },
    //agregamos las reglas que vamos a trabajar:
    module: {
        rules: [
            {
                //regla con un request que nos permiten probar cuales elementols vamos a estar trabajando:
                test: /\.(js|jsx)$/,
                //excluimos lo que no quiero que lea en este proyecto:
                exclude: /node_modules/,
                //usamos el loader:
                use: {
                    loader: 'babel-loader',
                }
            },
            //otra regla (para trabajar con html):
            {
                test: /\.html$/,
                use: [
                    {
                        loader: 'html-loader',
                    }
                ]
            },
            {
                test: /\.(css|scss)$/,
                use: [
                    "style-loader",
                    "css-loader",
                    "sass-loader",
                ]
            },
            {
                //la expresion regular para procesar los diferentes tipos de imagenes
                test: /\.(png|jpg|svg|jpeg|webp|gif)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: 'images/[hash]-[name].[ext]',
                        },
                    },
                ],
            },
        ]
    },
    //seccion de plugins:
    plugins: [
        new HtmlWebpackPlugin({
            template: './public/index.html',
            filename: './index.html'
        }),
        new MiniCssExtractPlugin({
            filename: '[name].css'
        }),
    ],
    //configuracion adicinal:
    //revisar update de webpack (https://webpack.js.org/configuration/dev-server/)
    devServer: {
        historyApiFallback: true,
        static: {
          directory: path.join(__dirname, 'public'),
        },
        compress: true,
        port: 3005,
      },
}