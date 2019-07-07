1:使用方式二：
如果webpack.config.js中不用  
externals: {
'data': 'data'
 }
 就不能在main.jsx中//  var data = require('data');的方式引入全局变量data。
 直接在index.html中，在bundle.js之前手动引入data.js，main.jsx中直接使用全局变量data

 2：如果webpack.config.js中不用  
externals: {
'data': 'data'
 }，
 又在main.jsx中//  var data = require('data');的方式引入全局变量data。
webpack找不到data模块，会报错 : Cannot find module "data"