var num1 = prompt("Digite o primeiro número:");
var num2 = prompt("Digite o segundo número:");
var num3 = prompt("Digite o terceiro número:");

var comp = prompt("Digite o número para retorno:")

const idades = [num1, num2, num3];

document.getElementById("demo").innerHTML = idades.find(checkIdade);

function checkIdade(idades) {
  return idades > comp;
}