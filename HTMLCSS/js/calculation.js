function getadd(x,y)
{
   var r=x+y;
    return r;
}
function getsub(x,y)
{
    var r=x-y;
   return r;
}
function getmul(x,y)
{
   var r=x*y;
    return r;
}
function getdiv(x,y)
{
    if(y==0)
    {
       var r=" INVALID";
       return r;
    }
    else
    {
        var r=x/y;
       return r;
    }
}
function getrslt()
{
var a=document.getElementById("number1").value;
var b=document.getElementById("number2").value;
var p=parseInt(a);
var q=parseInt(b);
var z=document.getElementById("operation").value;
var result;
if(z=="Addition")
{
    result=getadd(p,q);
}
else if(z=="Subtraction")
{
    result=getsub(p,q);

}
else if(z=="Multiplication")
{
    result=getmul(p,q);
}
else if(z=="Division")
{
    result=getdiv(p,q);
    
}
//console.log(result+"");

document.getElementById("result").innerHTML=result+"Answer";
}