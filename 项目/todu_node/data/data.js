const ex = require('express');
let route = ex.Router();
rou .get('/',(req,res)=>{
    res.send({code:0,data:req.res})
});
