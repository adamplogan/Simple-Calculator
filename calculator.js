var calc = "";
function equals(){
    if(calc == "08/27/1999"){
        calc = "Fuck You";
        document.getElementById("calculation").innerHTML = calc;
    }
    else{
    calc = eval(calc);
    document.getElementById("calculation").innerHTML = calc;
    }
}
function one(){
    calc += "1";
    document.getElementById("calculation").innerHTML = calc;
}
function two(){
    calc += "2";
    document.getElementById("calculation").innerHTML = calc;
}
function three(){
    calc += "3";
    document.getElementById("calculation").innerHTML = calc;
}
function four(){
    calc += "4";
    document.getElementById("calculation").innerHTML = calc;
}
function five(){
    calc += "5";
    document.getElementById("calculation").innerHTML = calc;
}
function six(){
    calc += "6";
    document.getElementById("calculation").innerHTML = calc;
}
function seven(){
    calc += "7";
    document.getElementById("calculation").innerHTML = calc;
}
function eight(){
    calc += "8";
    document.getElementById("calculation").innerHTML = calc;
}
function nine(){
    calc += "9";
    document.getElementById("calculation").innerHTML = calc;
}
function zero(){
    calc += "0";
    document.getElementById("calculation").innerHTML = calc;
}
function dot(){
    calc += ".";
    document.getElementById("calculation").innerHTML = calc;
}
function divide(){
    calc += "/";
    document.getElementById("calculation").innerHTML = calc;
}
function multiply(){
    calc += "*";
    document.getElementById("calculation").innerHTML = calc;
}
function minus(){
    calc += "-";
    document.getElementById("calculation").innerHTML = calc;
}
function plus(){
    calc += "+";
    document.getElementById("calculation").innerHTML = calc;
}
function clears(){
    calc = "";
    document.getElementById("calculation").innerHTML = calc;
}