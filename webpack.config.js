const path = require('path');
const HTMLWebpackPlugin=require("html-webpack-plugin");
// const { CleanWebpackPlugin } = require('clean-webpack-plugin')

// webapck配置信息
module.exports={
    entry:"./src/index.ts",
    mode:'development',
    // 指定打包文件目录
    output:{
        path:path.resolve(__dirname,'dist'),
        filename:"bundle.js",

        environment:{
            arrowFunction:false,  //不使用箭头函数
            const:false,
        },
    },

    // 模块化设置
    module:{
        rules:[
        {
            //处理 ts
            test: /\.ts$/ ,
            use:[
                //配置bable
                {
                loader:"babel-loader",  //指定加载器
                //  设置babel
                options:{
                    presets:[
                        [
                            "@babel/preset-env", //指定环境插件
                            {       //配置信息
                                // targets:{
                                //     "chrome":"88"       //兼容浏览器版本
                                // },
                                "corejs":"3",           //指定corejs版本
                                "useBuiltIns":"usage"   //使用corejs方式“usage”按需加载
                            }
                        ]
                    ]
                }
                },
                 'ts-loader' ,                
            ],
            exclude: /node-modules/ ,   
            // mode:'development'      
        },
        {
            // 处理less
            test:/\.less$/,
            use:[
                // 配置babel
                "style-loader",
                "css-loader",
                {
                    //postcss配置
                    loader:"postcss-loader",
                    options:{
                        postcssOptions:{
                            plugins:[
                                [
                                    "postcss-preset-env",
                                    {
                                        browsers:'last 2 versions',
                                    }
                                ]
                            ]
                        }
                    }
                },
                "less-loader",
            ]
        },
        ]
    },

    // 配置webpack插件
    plugins:[
        new HTMLWebpackPlugin({
            template:'./src/index.html',
        }),
        // new CleanWebpackPlugin(),
    ]
}