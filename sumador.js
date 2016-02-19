function sum(){
	var numeros = document.getElementById('op').innerHTML;
	numeros = numeros.split('+');
	var resultado = document.getElementById('res');
	parseInt(numeros[0]) + parseInt(numeros[1]);
	resultado.innerHTML = "= " + parseInt(numeros[0]) + parseInt(numeros[1]);
}
function rnd(){
	var op1 = Math.floor(Math.random()*100);
	var op2 = Math.floor(Math.random()*100);
	var suma = op1.toString() + '+' + op2.toString();
	document.getElementById('res').innerHTML = '';
	var operandos = document.getElementById('op');
	operandos.innerHTML = suma;
}