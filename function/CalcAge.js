var CalcAge=function (name,birthday)
{
    var date=new Date();
    var age=date.getFullYear()-birthday.getFullYear();
    if(age<0)
        throw new error("Invalid year");
    return("Hello "+name+" ,Your age Now is: "+age);
}

try{
    var age=CalcAge("Nada",new Date(2000,21,02));
    console.log(age);
}catch(error)
{
    console.log("Invalid Year")
}

module.experts=CalcAge;