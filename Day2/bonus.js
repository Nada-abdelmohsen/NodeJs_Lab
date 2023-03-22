var fs = require('fs');
var dir = './Dir';

if (!fs.existsSync(dir)){
    fs.mkdirSync(dir);
console.log("done")
}