var emitter=require('events')
var utils=required('util')

function func(){}

utils.inherits(func,emitter);
func.prototype.greet=function(data){
    this.emit('greet',data)
}
var grt=new func()
grt.on('greet',function(data){
    console.log('hello '+data)
})

grt.greet('Nada')