var colors =[];
var pickedcolor;
var button = document.getElementById('button');
var body = document.querySelector('body');


function clickme(){
    pickedcolor = choosecolor();
    colors = genRandomColors();
    body.style.backgroundColor = colors;
   
}
function choosecolor(){
    var random = Math.floor(Math.random() * colors.length);
    return colors[random]
}
function genRandomColors(){
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



