let _ = require ('lodash');

let warning= (()=> "help")
var colors= document.getElementsByTagName("input")
let color1= colors [0];
let color2= colors [1];
let body= document.querySelector("body");
let colorCodes= document.querySelector ("h3");
let bton= document.getElementById("random");

updateColor ();

function createHEX() {
    var code;
        code= Math.floor(Math.random()*15);
        if(code>9)
            code= String.fromCharCode(code+55);

        return code;
}

function random ()
{
    var col1="#";
    var col2="#"

    for(var i=0; i<6;i++){
        col1+=createHEX();
        col2+=createHEX();
    }
    color1.value= col1;
    color2.value= col2;
    updateColor();
}

function updateColor(){
    body.style.background= "linear-gradient("+ color1.value+ ", "+ color2.value + ")";    
    colorCodes.textContent= "Left button: " + color1.value + " Right button: " + color2.value;
}

color1.addEventListener("input", updateColor);
color2.addEventListener("input", updateColor);
bton.addEventListener("click", random);
