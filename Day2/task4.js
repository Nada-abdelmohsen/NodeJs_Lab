fs.unlink('info.txt',function(err){
    if(err) throw err;
    console.log('file deleted');
});  