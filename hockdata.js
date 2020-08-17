// - 1：引入express对象第三方对象
const express = require('express');// 自动逐级向上查找node_modules

// - 2：创建一个服务器对象
// let server = http.createServer();
let server = express();


// - 3:开启服务器监听端口
server.listen(8000,()=>{
  console.log('服务器启动了');
});


server.use('/sucai',(req,res,next)=>{
     res.end('5555555');
     next();
});

server.use('/baicai',(req,res,next)=>{
    res.end('666666666');
    next();
});

server.use(()=>{

});


// - 4:处理响应
server.use((req,res) => {   //
   res.end("hello world");
});