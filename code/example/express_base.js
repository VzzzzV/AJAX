//引入express
const { request, response } = require('express');
const express = require('express');

// 创建应用对象
const app = express();

//创建路由规则
app.get('/',(request,response)=>{
    //设置响应
    response.send("Hello express");
});
//监听端口启动服务
app.listen(8000,()=>{
    console.log("服务器已经启动，8000端口正在监听中。。。。")
})