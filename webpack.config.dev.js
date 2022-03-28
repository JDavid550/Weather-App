
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const Dotenv = require('dotenv-webpack')

module.exports = {
    entry:'./src/index.js',
    output:{
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
        
    },

    resolve:{
        extensions:['.js', '.jsx']
    },
    mode:'development',

    module:{
        rules:[{
            test: /\.(js|jsx)$/,
            exclude: /node_modules/,
            use:{
                loader:'babel-loader',
            } 
        },
        {
            test:/\.html$/,
            use: [
                {loader: 'html-loader'}
            ]
        },
        {
            test:/\.s[ac]ss$/,
            use:[
                'style-loader',
                'css-loader',
                'sass-loader'
            ]
        },
        {
            test: /\.png/,
            type: "asset/resource"
        },
        {
            test: /\.(woff|woff2)$/,
            use: {
                loader : 'url-loader',
                options : {
                    limit: 10000,
                    mimetype: "application/font-woff",
                    name : "[name].[ext]",
                    outputPath: "./assets/fonts/",
                    publicPath: "./assets/fonts/",
                    esModule :false
                }
            }
        } 
        
        ]
    },
    plugins:[
        new HtmlWebpackPlugin({
            template:'./public/index.html',
            filename: './index.html'
        }),
        new MiniCssExtractPlugin({
            filename:'[name].css'
        }),
        new Dotenv()
    ],
    devServer:{
        contentBase: path.join(__dirname,'dist'),
        compress:true,
        port:3006
    }


}