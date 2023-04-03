function Add(x,y){
    if(typeof x=='number'&&typeof y=='number')
        console.log("Add: ",x+y);
    else
        console.log("Please enter numbers only!");
}  
module.exports=Add;


