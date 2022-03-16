"use strict";
const calc = {marca:"Casio", modelo:"TI-84 Plus CE", color:"Gris"}
const todayDate = new Date();
const localDate = todayDate.toLocaleDateString();
const dateTime =todayDate.getMonth(); 
var input = document.getElementById('input'), 
  number = document.querySelectorAll('.numbers div'), 
  operator = document.querySelectorAll('.operators div'), 
  result = document.getElementById('result'), 
  clear = document.getElementById('clear'), 
  resultDisplayed = false; 


for (var i = 0; i < number.length; i++) {
  number[i].addEventListener("click", function(e) {

    var signoMientras = input.innerHTML;
    var signo = signoMientras[signoMientras.length - 1];

    if (resultDisplayed === false) {
      input.innerHTML += e.target.innerHTML;
    } else if (resultDisplayed === true && signo === "+" || signo === "-" || signo === "×" || signo === "÷") {
      resultDisplayed = false;
      input.innerHTML += e.target.innerHTML;
    } else {
      resultDisplayed = false;
      input.innerHTML = "";
      input.innerHTML += e.target.innerHTML;
    }

  });
}

for (var i = 0; i < operator.length; i++) {
  operator[i].addEventListener("click", function(e) {

    var signoMientras = input.innerHTML;
    var signo = signoMientras[signoMientras.length - 1];

    if (signo === "+" || signo === "-" || signo === "×" || signo === "÷") {
      var newString = signoMientras.substring(0, signoMientras.length - 1) + e.target.innerHTML;
      input.innerHTML = newString;
    } else {

      input.innerHTML += e.target.innerHTML;
    }

  });
}

result.addEventListener("click", function() {

  var inputString = input.innerHTML;

// Se reemplaza el * por ×
  var numbers = inputString.split(/\+|\-|\×|\÷/g);

  var operators = inputString.replace(/[0-9]|\./g, "").split("");
  console.log("Calculadora:" + calc.marca);
  console.log("Modelo:" + calc.modelo);
  console.log("----------------------------");
  console.log(localDate)
  var sum = dateTime + 1
  console.log("Mes: "+sum)
  console.log("-------Resultado-------------");
  console.log(inputString);
  console.log(operators);
  console.log(numbers);
  console.log("----------------------------");

  var division = operators.indexOf("÷");
  while (division != -1) {
    numbers.splice(division, 2, numbers[division] / numbers[division + 1]);
    operators.splice(division, 1);
    division = operators.indexOf("÷");
  }

  var multi = operators.indexOf("×");
  while (multi != -1) {
    numbers.splice(multi, 2, numbers[multi] * numbers[multi + 1]);
    operators.splice(multi, 1);
    multi = operators.indexOf("×");
  }

  var resta = operators.indexOf("-");
  while (resta != -1) {
    numbers.splice(resta, 2, numbers[resta] - numbers[resta + 1]);
    operators.splice(resta, 1);
    resta = operators.indexOf("-");
  }

  var suma = operators.indexOf("+");
  while (suma != -1) {
    
    numbers.splice(suma, 2, parseFloat(numbers[suma]) + parseFloat(numbers[suma + 1]));
    operators.splice(suma, 1);
    suma = operators.indexOf("+");
  }

  input.innerHTML = numbers[0]; 

  resultDisplayed = true; 
});

clear.addEventListener("click", function() {
  input.innerHTML = "";
})