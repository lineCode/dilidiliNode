/**
 * Created by liyulun on 16/8/23.
 */
"use strict";
const getList=require("../list/getList");

module.exports=function(req,res){
    let c = "http://m.dilidili.com/" + req.params[0];
    getList(c).then((data)=>{
        console.log(10,data);
        res.send(data);
    })

}