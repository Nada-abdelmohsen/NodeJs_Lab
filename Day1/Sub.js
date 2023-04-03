function Sub(x,y){
    if(typeof x=='number'&& typeof y=='number')
        console.log("Sub: "+(x-y));
   else
        console.log("Please enter numbers only!");
}
module.exports=Sub;