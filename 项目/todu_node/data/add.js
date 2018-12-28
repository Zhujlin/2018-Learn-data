let ex = require('express');

//路由 router
let route = ex.Router();

/*
localhost/add/

req有很多属性：
    req.url{...}
    req.query
    req.params
    req.headers
*/
route.get('/',()=>{  //接收一个/add   '/'是固定写法
    //console.log("进来");
    let {name,age} = req.query;
    if(name & age){
        req.sql.push({
            name,
            age,
            id:Date.now()
        });
        res.send({code:0,data:req.sql});//发送给前端
    }
    //console.log(req.sql);
});
//route.use('/oo',require('./addoo'));//第二层，
module.exports = route; //导出去
//route.get('/oo',)    继续分发