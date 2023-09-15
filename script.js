function ButtonClick(val)
{
    document.getElementById("screen").value+=val;
}

function ClearDisplay(){
    document.getElementById("screen").value=""
}
function BackSpace(){
    var str=document.getElementById("screen").value;
    str=str.substr(0,str.length-1);
    document.getElementById("screen").value=str;
}
function EqualClick()
{
    var text=document.getElementById("screen").value
    var resullt=eval(text)
    document.getElementById("screen").value=resullt;
}