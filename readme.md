## 本地开发环境配置，可用于web端简单开发（gulp）

## 启动本地服务
gulp web

#### 新建less文件需要运行 gulp less 用来生成 css 文件 （第一次需要）
#### 默认端口号：9999

## 本地开发环境实现功能
* 对 less 文件实现实时编译
* 合成公用脚本js文件 vendor.min.js，包括（jquery,art-template）
	* 如需新增或删除公用js文件，在 gulpfile.js 文件 concat 任务下添加或删除文件。 然后 运行 gulp concat
* 自动添加兼容性前缀