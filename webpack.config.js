
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin')
const TerserPlugin = require('terser-webpack-plugin')
const { CleanWebpackPlugin} = require('clean-webpack-plugin')
const Dotenv = require('dotenv-webpack')



module.exports = {
    entry:'./src/index.js',
    output:{
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
        assetModuleFilename : 'assets/fonts/[hash][ext][query]'
    },

    resolve:{
        extensions:['.js', '.jsx'],
        /* alias:{
            '@components':path.resolve(__dirname, 'src/components'),
            '@styles': path.resolve(__dirname,'src/styles')
        } */
    },
    mode:'production',
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
                MiniCssExtractPlugin.loader,
                'css-loader',
                'sass-loader'
            ]
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
        new CleanWebpackPlugin(),
        new Dotenv({
            systemvars:true
        })
    ],

    optimization:{
        minimize:true,
        minimizer:[
            new CssMinimizerPlugin(),
            new TerserPlugin(),
        ]
    } 
}