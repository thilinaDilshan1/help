var decimal=parseInt(document.getElementById("decimal").value);
var binary=decimal.toString(2);
var octa=decimal.toString(8);
var hex=decimal.toString(16);
function setValues(){
	document.getElementById("binary").textContent=binary;
	document.getElementById("hex").textContent=hex;
	document.getElementById("octal").textContent=octa;
	}