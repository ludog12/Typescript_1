"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var readline = require("readline");
var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
function calculator() {
    rl.question('Ingrese el primer número: ', function (num1) {
        rl.question('Ingrese el segundo número: ', function (num2) {
            rl.question('Ingrese la operación (+, -, *, /): ', function (operator) {
                var result;
                switch (operator) {
                    case '+':
                        result = parseFloat(num1) + parseFloat(num2);
                        break;
                    case '-':
                        result = parseFloat(num1) - parseFloat(num2);
                        break;
                    case '*':
                        result = parseFloat(num1) * parseFloat(num2);
                        break;
                    case '/':
                        result = parseFloat(num1) / parseFloat(num2);
                        break;
                    default:
                        console.log('Operación no válida');
                        rl.close();
                        return;
                }
                console.log("El resultado es: ".concat(result));
                rl.close();
            });
        });
    });
}
function countEvenAndOdd() {
    rl.question('Ingrese el valor mínimo: ', function (min) {
        rl.question('Ingrese el valor máximo: ', function (max) {
            var evenCount = 0;
            var oddCount = 0;
            for (var i = parseInt(min); i <= parseInt(max); i++) {
                if (i % 2 === 0) {
                    evenCount++;
                }
                else {
                    oddCount++;
                }
            }
            console.log("Cantidad de n\u00FAmeros pares: ".concat(evenCount));
            console.log("Cantidad de n\u00FAmeros impares: ".concat(oddCount));
            rl.close();
        });
    });
}
// ...
function multiplicationTable() {
    rl.question('Ingrese un número para generar su tabla de multiplicar: ', function (num) {
        rl.question('Ingrese el valor máximo para la tabla: ', function (max) {
            var baseNumber = parseFloat(num); // Convertir a número
            console.log("Tabla de multiplicar del ".concat(baseNumber, " hasta ").concat(max, ":"));
            for (var i = 1; i <= parseInt(max); i++) {
                console.log("".concat(baseNumber, " x ").concat(i, " = ").concat(baseNumber * i));
            }
            rl.close();
        });
    });
}
// ...
function fibonacci() {
    rl.question('Ingrese la cantidad de números de la secuencia Fibonacci que desea generar: ', function (count) {
        var fibSequence = [0, 1];
        for (var i = 2; i < parseInt(count); i++) {
            fibSequence[i] = fibSequence[i - 1] + fibSequence[i - 2];
        }
        console.log("Secuencia de Fibonacci: ".concat(fibSequence.join(', ')));
        rl.close();
    });
}
function temperatureConverter() {
    rl.question('Seleccione una opción:\n1. Celsius a Fahrenheit\n2. Fahrenheit a Celsius\n', function (option) {
        rl.question('Ingrese la temperatura: ', function (temperature) {
            var convertedTemperature;
            if (option === '1') {
                convertedTemperature = (parseFloat(temperature) * 9 / 5) + 32;
                console.log("".concat(temperature, "\u00B0C equivale a ").concat(convertedTemperature.toFixed(2), "\u00B0F"));
            }
            else if (option === '2') {
                convertedTemperature = (parseFloat(temperature) - 32) * 5 / 9;
                console.log("".concat(temperature, "\u00B0F equivale a ").concat(convertedTemperature.toFixed(2), "\u00B0C"));
            }
            else {
                console.log('Opción no válida');
            }
            rl.close();
        });
    });
}
function wordCounter() {
    rl.question('Ingrese una oración: ', function (sentence) {
        var words = sentence.split(' ');
        console.log("Cantidad de palabras: ".concat(words.length));
        rl.close();
    });
}
rl.question('Seleccione una opción:\n1. Calculadora\n2. Contador de Números Pares e Impares\n3. Tabla de Multiplicar\n4. Fibonacci\n5. Convertidor de Temperatura\n6. Contador de Palabras\n', function (option) {
    switch (option) {
        case '1':
            calculator();
            break;
        case '2':
            countEvenAndOdd();
            break;
        case '3':
            multiplicationTable();
            break;
        case '4':
            fibonacci();
            break;
        case '5':
            temperatureConverter();
            break;
        case '6':
            wordCounter();
            break;
        default:
            console.log('Opción no válida');
            rl.close();
            break;
    }
});
