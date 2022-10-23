var body = document.querySelector('body');
var colors =[];
var hexdisplay = document.getElementById('hex');
var hexvalue = [0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F'];


function clickme(){
    texthex();
    choosecolor();
    colors = genrandomcolor();
    body.style.backgroundColor = colors;
}

function texthex(){
    var hex ="#"
    for (var i = 0; i < 6 ; i++) {
        var index = Math.floor(Math.random() * hexvalue.length);
        hex += hexvalue[index]
    }
    hexdisplay.textContent = hex;
}

function choosecolor(){
    var random = Math.floor(Math.random() * colors.length);
    return colors[random]
}

function genrandomcolor(){
    var arr = [];
    arr.push(makecolor());
    return arr;
}

function makecolor(){
    var r = Math.floor(Math.random() * 256);
    var g = Math.floor(Math.random() * 256);
    var b = Math.floor(Math.random() * 256);
    return "rgb(" + r + ", " + g + ", " + b + ")";
}
