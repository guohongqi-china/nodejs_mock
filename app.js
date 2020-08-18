// 1:引入核心对象http
const http = require('http')

// 2: 用这个东西创建服务器
let sercer = http.createServer();

// 3:基于事件， 很多的on('xxxx')
sercer.on('request',(req,res) => {
    // req 只读对象，拿属性
    // res 只写对象，调用函数
    console.log(req.headers + 'dddddddd'); // 头
    console.log(req.url + '333333');   // 行
    console.log(req.method + '32');  // 行

    // 体 
    req.on('data',(data)=>{
        console.log(data.toString() + '-000000');
    })


    res.setHeader('a','a');
    res.setHeader('b','b');

    res.writeHead(200, {'content-type':'text/html;charset=utf-8'});


    res.write('3333333333');
    res.write('4444444444');

     // 不管什么请求，都返回统一数据
     res.end('ddddd');
});


// ip 找计算机， 端口找程序
sercer.listen(8888,()=>{
  console.log('服务器启动在8888')
})
                        
