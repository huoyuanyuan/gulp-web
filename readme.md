## 本地开发环境配置，可用于web端简单开发（gulp）

## 启动本地服务
gulp web

#### 新建less文件需要运行 gulp less 用来生成 css 文件 （第一次需要）
#### 新建asset/js/page/*.js 文件需要运行 gulp es6 ，用来生成 build/js/page/*.js文件 (第一次需要)
#### 默认端口号：9999

## 本地开发环境实现功能

asset/ 为开发文件夹，其中 less 会编译到 build下的css文件夹下，js会编译到 build 下的js文件夹下。

* 对 less 文件实现实时编译
* 对 js asset/page/js 下的js文件进行实时的 es6-es5 的编译。
* 合成公用脚本js文件 vendor.min.js，包括（jquery,art-template）
	* 如需新增或删除公用js文件，在 gulpfile.js 文件 concat 任务下添加或删除文件。 然后 运行 gulp concat
* 自动添加兼容性前缀