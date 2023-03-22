var fs=require('fs')
fs.readFile('data.json','utf8',function(err,data){
    if(err) throw err;
    console.log(data)
})
//1-sync
const sync = fs.readFileSync('data.json');
console.log(JSON.parse(sync));
//2-async
const async = fs.readFileSync('data.json');
console.log(JSON.parse(async));