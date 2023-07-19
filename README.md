1. 主要技术栈为 Webpack , TypeScript , Less

2. tsconfig.json 对编译选项配置

   ```js
   “compilerOptions”:{ 
   ●	"target":"ES2023"; //ts编译为js的版本
   ●   "module":"commonjs";	//指定使用的模块化规范
   //"lib"指定库，一般不动
   ●   “noEmitOnError”:true;//有错不生成编译文件
   ●   "strict":true;//所有严格检查总开
   }
   ```

3.  可以通过 `@xxx`   来设置CSS变量

   比如这里的：`@bgColor: #b7d4a8;`

4. Ts 核心类 Class 分成4个ts部分：食物，游戏控制，分数板，蛇

5. 食物逻辑：获取页面元素，get获取offset食物的x,y轴，修改食物的位置，export暴露food

6. 蛇逻辑：获取蛇的元素；蛇内部的div，get获取蛇的x,y坐标；set设置蛇头坐标,判断蛇撞墙以及不能左右或上下掉头；增加蛇的身体；身体跟着位置移动覆盖前一个身体；检查蛇头不能与身体相撞

7. 得分面板：初始化分数以及等级；升级函数；每10分升1级；

8. 总控制面板：初始化所有板块，init初始化获取键盘事件，键盘响应获取方向，根据方向蛇移动，判断蛇吃到食物增加身体分数，游戏继续则定时调用，try...catch检查游戏异常



1. 贪吃蛇的webpack中 less配置

```js
npm i -D less less-loader css-loader style-loader  //css-loader解析css代码，style-loader 解析后的css代码插入DOM less-loader 将less转换成css
```

webpack.config.js中添加less的配置

```js
 {
​      // 处理less
​      test:/\.less$/,
​      use:[
                // 配置babel
                "style-loader",
                "css-loader",
                "less-loader",
            ]
​    },
```

要在index.ts中引入src中style的less样式

```js
import './style/index.less';
```

安装postcss 兼容旧版css

```js
npm i -D postcss postcss-loader postcss-preset-env
```

同样在webpack.config.js中添加配置

```js
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
```

注意类的模块化使用，用哪个调用哪个





逻辑：

添加身体跟着位置移动,后边身体覆盖之前的身体，从后往前改movebody模块

蛇头不可从蛇尾开始，向左移动不能向右移动，在蛇头坐标设置中进行判断

蛇头不可以碰到蛇身，不能吃到自己，checkHeadBody( )

