const { request, response } = require('express');
const express = require('express');

const app= express();

app.get('/home',(request,response)=>{
    response.sendFile(__dirname + '/index.html');
});

app.get('/data',(request,response)=>{
    response.send('用户数据');
});

app.listen(9000,()=>{
    console.log("服务器已经启动，9000端口正在监听中。。。。");
})