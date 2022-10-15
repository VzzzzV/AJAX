
//npm install -g nodemon
//nodemon server.js  改了服务器代码自动重启服务器
//引入express
// const { request, response } = require('express');
const { json } = require('express');
const express = require('express');

// 创建应用对象
const app = express();

//创建路由规则
app.get('/server',(request,response)=>{
    //设置响应头
    response.setHeader('Access-Control-Allow-Origin','*');
    //设置响应
    response.send("Hello express");
});
//针对IE缓存
app.get('/ie',(request,response)=>{
    //设置响应头
    response.setHeader('Access-Control-Allow-Origin','*');
    //设置响应
    response.send("Hello IE");
});
//延时响应
app.get('/delay',(request,response)=>{
    //设置响应头
    response.setHeader('Access-Control-Allow-Origin','*');
    setTimeout(()=>{
        response.send('延时响应');
    },3000)
});
//JQuary
app.all('/JQuary',(request,response)=>{
    response.setHeader('Access-Control-Allow-Origin','*');
    const data = {name:'zhan'};
    // response.send('Hello JQuary');
    // response.send(JSON.stringify(data));
    setTimeout(()=>{
        response.send('延时响应');
    },3000)
});
//Axios
app.all('/Axios',(request,response)=>{
    response.setHeader('Access-Control-Allow-Origin','*');
    const data = {name:'zhan'};
    //自定义响应头
    response.setHeader('Access-Control-Allow-Headers','*');
    response.send('Hello Axios');
    // response.send(JSON.stringify(data));
});

//fetch
app.all('/fetch',(request,response)=>{
    response.setHeader('Access-Control-Allow-Origin','*');
    const data = {name:'zhan'};
    //自定义响应头
    response.setHeader('Access-Control-Allow-Headers','*');
    response.send('Hello fetch');
    // response.send(JSON.stringify(data));
});

//jsonp
app.all('/jsonp',(request,response)=>{
    response.send('console.log("hello json")'); 
});

//jsonp example
app.all('/chech_name',(request,response)=>{
    // response.send('console.log("hello json")'); 
    const data ={
        exist: 1,
        msg: 'username has been used'
    };
    let str = JSON.stringify(data);
    response.send(`handle(${str});`);
});

// app.post('/server',(request,response)=>{
app.all('/JSON',(request,response)=>{
    //设置响应头
    response.setHeader('Access-Control-Allow-Origin','*');
    //自定义响应头
    response.setHeader('Access-Control-Allow-Headers','*');
    //设置响应
    const data = {name:'zhan'};
    // response.send("Hello express JSON");
    let str = JSON.stringify(data);
    response.send(str);
});
//监听端口启动服务
app.listen(8000,()=>{
    console.log("服务器已经启动，8000端口正在监听中。。。。");
})