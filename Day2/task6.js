var fs=require('fs')
var data='Hello ITI'
fs.writeFile('info.txt',data,function(err){
    if(err) throw err;
    else 
    console.log("done")
})