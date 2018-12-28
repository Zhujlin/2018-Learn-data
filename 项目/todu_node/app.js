const ex = require('express');//引express包
const app = ex();//app就是创建服务的对象

//get请求  url
//app.get(路径，回调函数(req，res，next))  next：一件事情做完再做下一个  比如：app.use()执行完不会执行下一个app.use()，需要手动去next()

//express.atatic()  专门管理静态文件的中间件

/*
通过localhost才能访问app.js
req.url 找到客户端不但访问了服务器，还带了一些东西过来
只是一个localhost -> '/'
localhost/1.txt  ->'/1.txt'

localhost/add?name=xx&age=xxx -> /add?name=xx&age=xxx

/add ->add.js文件去管理
*/ 

let sql = [
    {id:0,name:'小强',age:'18'}
]

app.use(ex.static('www'));


app.use((req,res,next)=>{
    req.sql = aql;
    next();
})

//只要是localhost/add就引入add.js文件
app.use('/add',require('./data/add'))

// app.get('/',(req,res,next)=>{
//    console.log(req.url);
// })
app.use('/getdata',require('.data/data'));


app.listen(80);