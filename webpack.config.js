// Generated using webpack-cli https://github.com/webpack/webpack-cli

const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const isProduction = process.env.NODE_ENV == 'production';


const stylesHandler = isProduction ? MiniCssExtractPlugin.loader : 'style-loader';

const { htmlPluginEntryArray, entryFilesMap } = require('./config/entry.js')

const config = {
    // 多页面时，通过页面的Html名称进行访问
    entry: {
        ...entryFilesMap
    },
    output: {
        // fix: clean 配置为true会导致开发模式下热更新HTML中的图片加载报错
        clean:isProduction,
        path: path.resolve(__dirname, 'dist'),
        filename:'js/[name].[contenthash:8].bundle.js', // 指定JS文件输出
        assetModuleFilename: 'images/[hash][ext]' // 指定图片输出
    },
    devServer: {
        // open: true,
        host: 'localhost',
        watchFiles:["src/**"]
    },
    plugins: [
        ...htmlPluginEntryArray
        // Add your plugins here
        // Learn more about plugins from https://webpack.js.org/configuration/plugins/
    ],
    optimization: {
        // runtimeChunk: true
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/i,
                loader: 'babel-loader',
            },
            {
                test: /\.s[ac]ss$/i,
                use: [stylesHandler, 'css-loader', 'postcss-loader', 'sass-loader'],
            },
            {
                test: /\.css$/i,
                use: [stylesHandler, 'css-loader', 'postcss-loader'],
            },
            {
                test: /\.(eot|svg|ttf|woff|woff2|png|jpg|gif)$/i,
                type: 'asset',
            },
            {
                test: /\.html$/i,
                loader: 'html-loader',
                generator: {
                    filename: "[name][ext]",
                },
            }

            // Add your rules for custom modules here
            // Learn more about loaders from https://webpack.js.org/loaders/
        ],
    },
    resolve:{
        alias:{
            '@': path.resolve(__dirname,'./')
        }
    }
};

module.exports = () => {
    if (isProduction) {
        config.mode = 'production';

        config.plugins.push(new MiniCssExtractPlugin());


    } else {
        config.mode = 'development';
    }
    return config;
};
