let ex = require('express');

//路由 router
let route = ex.Router();

/*
localhost/add/
*/
route.get('/',()=>{
    console.log("oo进来了");
});

module.exports = route; //导出去
//route.get('/oo',)    继续分发