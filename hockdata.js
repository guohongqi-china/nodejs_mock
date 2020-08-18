// - 1：引入express对象第三方对象
const express = require('express');// 自动逐级向上查找node_modules
var createError = require('http-errors');

// - 2：创建一个服务器对象
// let server = http.createServer();
let server = express();

var bodyParser = require('body-parser');
server.use(bodyParser.json());
server.use(bodyParser.urlencoded({ extended: false }));

/*express允许跨域*/
server.all('*', function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Content-Type,Content-Length, Authorization, Accept,X-Requested-With");
  res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
  res.header("X-Powered-By",' 3.2.1')
  if(req.method=="OPTIONS") res.send(200);
  else  next();
});




server.use('/sucai',(req,res,next)=>{
     res.end('5555555');
     next();
});

server.use('/baicai',(req,res,next)=>{
    res.end('666666666');
    next();
});


server.post('/listData/count',(req,res,next)=>{
  
  console.log(JSON.stringify(req.body) + '--99999999');
  console.log(JSON.stringify(req.headers) + '--9999999900000');

  res.writeHead(200, {'content-type':'text/html;charset=utf-8'});
  setTimeout(() => {
    res.end(JSON.stringify(
      {"data":{
            "name":"guohq",
            "age":19
       },
       "statusCode":"200"
      }));
  }, 5000);
});

// 当于所有路径都不匹配时,报404,自定义
server.use(function(req, res, next) {
  next(createError(404));
});

// error handler
server.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  console.log('出现错误');
  // render the error page
  res.status(err.status || 500);
  res.write(JSON.stringify(err));
  res.write(JSON.stringify(err.status));
  res.end(err.message);
});


// - 3:开启服务器监听端口
server.listen(8000,()=>{
  console.log('服务器启动了');
});