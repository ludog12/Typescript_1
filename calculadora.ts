import * as readline from 'readline';

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function calculator() {
  rl.question('Ingrese el primer número: ', (num1) => {
    rl.question('Ingrese el segundo número: ', (num2) => {
      rl.question('Ingrese la operación (+, -, *, /): ', (operator) => {
        let result;
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
        console.log(`El resultado es: ${result}`);
        rl.close();
      });
    });
  });
}

function countEvenAndOdd() {
  rl.question('Ingrese el valor mínimo: ', (min) => {
    rl.question('Ingrese el valor máximo: ', (max) => {
      let evenCount = 0;
      let oddCount = 0;
      for (let i = parseInt(min); i <= parseInt(max); i++) {
        if (i % 2 === 0) {
          evenCount++;
        } else {
          oddCount++;
        }
      }
      console.log(`Cantidad de números pares: ${evenCount}`);
      console.log(`Cantidad de números impares: ${oddCount}`);
      rl.close();
    });
  });
}

// ...

function multiplicationTable() {
  rl.question('Ingrese un número para generar su tabla de multiplicar: ', (num) => {
    rl.question('Ingrese el valor máximo para la tabla: ', (max) => {
      const baseNumber = parseFloat(num); // Convertir a número
      console.log(`Tabla de multiplicar del ${baseNumber} hasta ${max}:`);
      for (let i = 1; i <= parseInt(max); i++) {
        console.log(`${baseNumber} x ${i} = ${baseNumber * i}`);
      }
      rl.close();
    });
  });
}

// ...


function fibonacci() {
  rl.question('Ingrese la cantidad de números de la secuencia Fibonacci que desea generar: ', (count) => {
    const fibSequence = [0, 1];
    for (let i = 2; i < parseInt(count); i++) {
      fibSequence[i] = fibSequence[i - 1] + fibSequence[i - 2];
    }
    console.log(`Secuencia de Fibonacci: ${fibSequence.join(', ')}`);
    rl.close();
  });
}

function temperatureConverter() {
  rl.question('Seleccione una opción:\n1. Celsius a Fahrenheit\n2. Fahrenheit a Celsius\n', (option) => {
    rl.question('Ingrese la temperatura: ', (temperature) => {
      let convertedTemperature;
      if (option === '1') {
        convertedTemperature = (parseFloat(temperature) * 9/5) + 32;
        console.log(`${temperature}°C equivale a ${convertedTemperature.toFixed(2)}°F`);
      } else if (option === '2') {
        convertedTemperature = (parseFloat(temperature) - 32) * 5/9;
        console.log(`${temperature}°F equivale a ${convertedTemperature.toFixed(2)}°C`);
      } else {
        console.log('Opción no válida');
      }
      rl.close();
    });
  });
}

function wordCounter() {
  rl.question('Ingrese una oración: ', (sentence) => {
    const words = sentence.split(' ');
    console.log(`Cantidad de palabras: ${words.length}`);
    rl.close();
  });
}

rl.question('Seleccione una opción:\n1. Calculadora\n2. Contador de Números Pares e Impares\n3. Tabla de Multiplicar\n4. Fibonacci\n5. Convertidor de Temperatura\n6. Contador de Palabras\n', (option) => {
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
