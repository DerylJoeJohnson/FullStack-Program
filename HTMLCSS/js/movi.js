var i=0;
var moviearray=Array();

function getname()
{
    ///////////////////
    var moviename=document.getElementById("name").value;
    moviearray[i] =moviename;
    i++;

    /////////////////////

    var res="";
    for(var j=0;j<moviearray.length;j++)
    {
        res+=moviearray[j]+"<br>";
    }

    document.getElementById("result").innerHTML=res;

}