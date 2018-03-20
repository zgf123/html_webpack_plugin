const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry:{
        common:'./src/public/js/common.js',
        index:'./src/components/index/index.js',
        news:'./src/components/news/news.js',
    },
    output:{
        filename:'js/[name].bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    module:{
        rules:[
            {
                test:/\.css$/,
                use:['style-loader','css-loader']
            },
            {
                test:/\.(jpg|png|gif|svg)$/,
                use:[
                    {
                        loader:'file-loader',
                        options:{
                            name:'img/[name].[ext]?[hash]'
                        }
                    },
                    {
                        loader:'image-webpack-loader',
                        options:{
                            bypassOnDebug:true
                        }
                    }
                ]
            },
            {
                test:/\.(woff|woff2|eot|otf|ttf)$/,
                use:['file-loader']
            }
        ]
    },
    plugins:[
        new CleanWebpackPlugin(['dist']),
        new HtmlWebpackPlugin({
            title:'主页',
            filename:'index.html',
            template:'./src/components/index/index.html',
            hash:true,
            chunks:['common','index']
        }),
        new HtmlWebpackPlugin({
            title:'新闻页',
            filename:'news.html',
            template:'./src/components/news/news.html',
            hash:true,
            chunks:['common','news']
        }),
    ]
}