/*var idade = prompt("qual sua idade?");
if(idade >=18) {
    alert("adulto")
}
else if (idade<=10){
    alert("criança");
}
else{
    alert("adolescente")
} */

/*var notas = prompt("Qual sua nota?");
var notas2 = prompt("Qual sua nota?");
var media = (+notas + +notas2) /2

alert(media);
if(media >=8) {
    alert("Passou, parabéns!")
}
else if (media==6){
    alert("Quase, se esforce um pouco mais!");
}
else {
    alert("Infelizmente não!")
}*/


var peso = prompt("Digite seu peso:");
var altura = prompt("Digite sua altura:");
var imc = (+peso / (altura*altura))

alert(imc);
if(imc < 18.5){
    alert("Seu IMC é menor que 18,5 e sua classificação é MAGREZA");
}

else if(imc > 18.5 && imc<= 24.9){
    alert("Seu IMC é menor que 24,9 e sua classificação é NORMAL");
}

else if(imc >24.9 && imc<= 29.9){
    alert("Seu IMC é menor que 29,9 e sua classificação é SOBREPESO")
}

else if (imc >29.9 && imc<= 39.9){
    alert("Seu IMC é menor que 39,9 e sua classificação é OBESIDADE")
}

else {
    alert("Seu IMC é maior que 40 e sua classificação é OBESIDADE GRAVE")
}