const path = require('path');
const MyWebpackPlugin = require('./plugins/my-webpack-plugin');

module.exports = {
    entry: './src/index',
    target: 'node', // 我们编译为Node.js环境下的JS，等下直接使用Node.js执行编译完成的文件
    output:{
        path: path.resolve(__dirname, 'build'),
        filename: '[name].js'
    },
    module:{
        rules:[
            {
                test:/\.js$/,
                use: [
                    {
                        loader: "replace-loader",
                        options: {
                            text: 'Webpack456'
                        }
                    },
                    {
                        loader: 'i18n-loader',
                        options: { // 传递选项
                            locale: 'zh'
                        }
                    }
                ],
            }
        ]
    },
    resolveLoader: {
        modules: ['./node_modules', './test-loader'] // 配置loader的查找目录
    },
    plugins:[
        new MyWebpackPlugin()
    ]
};
