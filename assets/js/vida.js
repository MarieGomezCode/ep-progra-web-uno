alert("Bienvenido al Siguiente Menu");

var contadorEjercicios = 0;

function ejecutarMenu() {
  var respuesta;

  respuesta = Number(prompt(

    "|| Menú principal ||\n" +
    "1. Contador de números pares e impares\n" +
    "2. Calculadora de factorial\n" +
    "3. Validación de contraseña\n" +
    "4. Generador de tablas de multiplicar\n" +
    "5. Adivinar el número\n" +
    "6. Suma de números primos\n" +
    "7. Secuencia de Fibonacci\n" +
    "8. Convertidor de temperatura\n" +
    "9. Calculadora de potencia\n" +
    "10. Juego de piedra, papel o tijeras\n" +
    "11. Salir"



  ))

  switch (respuesta) {
    case 1:

      var confirma = prompt("Ha seleccionado Contador de números pares e impares desea continuar? si/no Escriba en minuscula! ")


      if (confirma === "si") {
        contadorParesImpares();
        contadorEjercicios++;
        console.log("Usted ejecuto esto de veces: " + contadorEjercicios)

      } else if (confirma === "no") {
        alert("Ha seleccionado no continuar")
        alert("Seras Dirigido nuevamente al Menu")
      } else {
        alert("OPCION INCORRECTA")
        alert("Seras Dirigido nuevamente al Menu")
      }

      break;
    case 2:

      confirma = prompt("Ha seleccionado Calculadora de Factorial desea continuar? si/no Escriba en minuscula! ")

      if (confirma === "si") {
        calcularFactorial();
        contadorEjercicios++;
        console.log("Usted ejecuto esto de veces: " + contadorEjercicios)

      } else if (confirma === "no") {
        alert("Ha seleccionado no continuar")
        alert("Seras Dirigido nuevamente al Menu")
      } else {
        alert("OPCION INCORRECTA")
        alert("Seras Dirigido nuevamente al Menu")
      }

      break;
    case 3:
      // contadorEjercicios++;
      confirma = prompt("Ha seleccionado Validación de Contraseña, desea continuar? si/no Escriba en minuscula! ")

      if (confirma === "si") {
        validarContrasena();
        contadorEjercicios++;
        console.log("Usted ejecuto esto de veces: " + contadorEjercicios)
      } else if (confirma === "no") {
        alert("Ha seleccionado no continuar")
        alert("Seras Dirigido nuevamente al Menu")
      } else {
        alert("OPCION INCORRECTA")
        alert("Seras Dirigido nuevamente al Menu")
      }

      break;
    case 4:
      //contadorEjercicios++;
      confirma = prompt("Ha seleccionado Generador de Tablas de Multiplicar, desea continuar? si/no Escriba en minuscula! ")

      if (confirma === "si") {
        generadorTablasMultiplicar();
        contadorEjercicios++;
        console.log("Usted ejecuto esto de veces: " + contadorEjercicios)

      } else if (confirma === "no") {
        alert("Ha seleccionado no continuar")
        alert("Seras Dirigido nuevamente al Menu")
      } else {
        alert("OPCION INCORRECTA")
        alert("Seras Dirigido nuevamente al Menu")
      }

      break;
    case 5:

      confirma = prompt("Ha seleccionado Adivinar el Número desea continuar? si/no Escriba en minuscula! ")


      if (confirma === "si") {
        adivinarNumero();
        contadorEjercicios++;
        console.log("Usted ejecuto esto de veces: " + contadorEjercicios)

      } else if (confirma === "no") {
        alert("Ha seleccionado no continuar")
        alert("Seras Dirigido nuevamente al Menu")
      } else {
        alert("OPCION INCORRECTA")
        alert("Seras Dirigido nuevamente al Menu")
      }

      break;
    case 6:

      confirma = prompt("Ha seleccionado Suma de Números Primos, desea continuar? si/no Escriba en minuscula! ")


      if (confirma === "si") {
         alert("Este programa calcula la suma de los primeros N números primos, Donde N es ingresado por usted ")

        const N = parseInt(prompt("Ingrese el valor de N:"));


        const suma = calcularSumaPrimos(N);
        contadorEjercicios++;
        console.log("Usted ejecuto esto de veces: " + contadorEjercicios)


        console.log("La suma de los primeros " + N + " números primos es: " + suma);


      } else if (confirma === "no") {
        alert("Ha seleccionado no continuar")
        alert("Seras Dirigido nuevamente al Menu")
      } else {
        alert("OPCION INCORRECTA")
        alert("Seras Dirigido nuevamente al Menu")
      }

      break;
    case 7:

      confirma = prompt("Ha seleccionado Secuencia de Fibonacci, desea continuar? si/no Escriba en minuscula! ")


      if (confirma === "si") {
        secuenciaFibonacci();
        contadorEjercicios++;
        console.log("Usted ejecuto esto de veces: " + contadorEjercicios)

      } else if (confirma === "no") {
        alert("Ha seleccionado no continuar")
        alert("Seras Dirigido nuevamente al Menu")
      } else {
        alert("OPCION INCORRECTA")
        alert("Seras Dirigido nuevamente al Menu")
      }

      break;
    case 8:
      //contadorEjercicios++;
      confirma = prompt("Ha seleccionado Convertidor de Temperatura desea continuar? si/no Escriba en minuscula! ")


      if (confirma === "si") {
        convertirTemperatura();
        contadorEjercicios++;
        console.log("Usted ejecuto esto de veces: " + contadorEjercicios)

      } else if (confirma === "no") {
        alert("Ha seleccionado no continuar")
        alert("Seras Dirigido nuevamente al Menu")
      } else {
        alert("OPCION INCORRECTA")
        alert("Seras Dirigido nuevamente al Menu")
      }

      break;
    case 9:
      //contadorEjercicios++;
      confirma = prompt("Ha seleccionado Calculadora de Potencia desea continuar? si/no Escriba en minuscula! ")

      if (confirma === "si") {
        calcularPotencia();
        contadorEjercicios++;
        console.log("Usted ejecuto esto de veces: " + contadorEjercicios)

      } else if (confirma === "no") {
        alert("Ha seleccionado no continuar")
        alert("Seras Dirigido nuevamente al Menu")
      } else {
        alert("OPCION INCORRECTA")
        alert("Seras Dirigido nuevamente al Menu")
      }

      break;
    case 10:

      confirma = prompt("Ha seleccionado Juego de Piedra, Papel o Tijeras desea continuar? si/no Escriba en minuscula! ")


      if (confirma === "si") {

        juegoDePiedraPapelOTijeras();
        contadorEjercicios++;
        console.log("Usted ejecuto esto de veces: " + contadorEjercicios);

      } else if (confirma === "no") {
        alert("Ha seleccionado no continuar")
        alert("Seras Dirigido nuevamente al Menu")
      } else {
        alert("OPCION INCORRECTA")
        alert("Seras Dirigido nuevamente al Menu")
      }

      break;
    case 11:

      ejecucion = false
      alert("Haz salido del programa 'Happy Code'")
      break;

  }
}

var ejecucion = true
while (ejecucion) {
  ejecutarMenu();
}


function contadorParesImpares() {


  alert("Este juego se basa en que usted ingrese un numero y este programa le imprima los numeros pares e impares del 1 hasta el numero ingresado")
  alert("Se puede intentar con cualquier numero pero se recomienda ingresar un numero menor a 20 para que que visualice por consola sin scrolliar")


  let numero = Number(prompt("Ingrese un número: "));


  console.log("---------------NUMEROS PARES-------------------------")
  for (let contaPares = 0; contaPares <= numero; contaPares++) {
    if (contaPares % 2 === 0) {
      console.log("Este es numero Par: " + contaPares + " De:  " + numero)
    }
  }
  console.log("---------------NUMEROS IMPARES-------------------------")
  for (let contaImpares = 0; contaImpares <= numero; contaImpares++) {
    if (contaImpares % 2 === 1) {
      console.log("Este es numero Impar: " + contaImpares + " De:  " + numero)
    }
  }
  alert("Por lo general el juego  imprime de una vez pero si el programa no imprime en su consola intente salir apretando 11")



}

function calcularFactorial() {
  alert("Este juego se basa en que usted ingrese un numero y luego se calcula el factorial de ese numero ")


  let numero = Number(prompt("Ingrese un número: "));
  let factorial = 1;


  for (let i = 1; i <= numero; i++) {

    factorial = factorial * i;
  }

  console.log("El factorial de " + numero + " es: " + factorial);
  alert("Por lo general el juego  imprime de una vez pero si el programa no imprime en su consola intente salir apretando 11")

}



function validarContrasena() {
  alert(" Se te pedira una contraseña , si la contraseña es igual a 'secreto123', tendras acceso concedido ")

  let contraseña = prompt("Ingrese su contraseña: ");


  if (contraseña === "secreto123") {

    console.log("Acceso concedido");
  } else {

    console.log("Acceso denegado");
  }
  alert("Por lo general el juego  imprime de una vez pero si el programa no imprime en su consola intente salir apretando 11")

}

function generadorTablasMultiplicar() {
  alert("El programa te pedira un número y luego genera la tabla de multiplicar correspondiente a ese número y de los todos productos de ese número con los números del 1 al 10.")


  let numero = Number(prompt("Ingrese un número: "));

  for (let i = 1; i <= 10; i++) {
    let multiplicacion = numero * i;
    console.log(numero + " * " + i + " = " + multiplicacion);
  }
  alert("Por lo general el juego  imprime de una vez pero si el programa no imprime en su consola intente salir apretando 11")

}

function adivinarNumero() {
  
alert("Este juego crea un numero aleatorio entre el 1 y 100 usted sebe adivinar que numero es se le dara uns pista si el numero es bajo o alto|Tendra 5 Intentos ")

  let numeroAle = Math.floor(Math.random() * 100) + 1;
  let numeroAdivi = 0;
  let intentos = 0;


  while (numeroAdivi !== numeroAle && intentos <= 5) {
    numeroAdivi = Number(prompt("Ingrese un número: "));


    if (numeroAdivi > numeroAle) {
      console.log("Demasiado alto.");
    } else if (numeroAdivi < numeroAle) {
      console.log("Demasiado bajo.");
    }


    intentos++;
  }

  if (numeroAdivi === numeroAle) {
    console.log("¡Felicidades! Adivinaste el número en " + intentos + " intentos.");
  } else if (numeroAdivi !== numeroAle) {
    console.log("Erda cole no acertaste ")
    console.log("El numero era: "+numeroAle)
  } else {
    console.log("Error")
  }
}

//AQUI ESTA UNA FUNCION CON PARAMETROS Y RETORNO
function calcularSumaPrimos(N) {
 


  function esPrimo(numero) {
    if (numero <= 1) {
      return false;
    }


    for (let i = 2; i <= Math.sqrt(numero); i++) {
      if (numero % i === 0) {
        return false;
      }
    }

    return true;
  }

  let suma = 0;
  let contador = 0;
  let numeroActual = 2;

  while (contador < N) {
    if (esPrimo(numeroActual)) {
      suma += numeroActual;
      contador++;
    }
    numeroActual++;
  }

  return suma;
}

function secuenciaFibonacci() {
   alert("Este programa genera la secuecia Fibonacci hasta un termino, el cual Usted lo establece ")



  let a = 0;
  let b = 1;
  let i = 0;
  let n = Number(prompt("Ingrese el numero hasta donde se desea generar la secuencia : "));

  while (i <= n) {

    console.log(a);


    let c = a + b;
    a = b;
    b = c;


    i++;
  }
}

function convertirTemperatura() {
   alert("Este programa convierte la temperaturas entregrados Celsius y Fahrenheit, permitiendo al usuario elegir la dirección de la conversión (deCelsius a Fahrenheit o de Fahrenheit a Celsius). ")

  let opcion = "";
  let temperatura = 0;
  let resultado = 0;

  opcion = prompt("¿Desea convertir de Celsius a Fahrenheit (c) o de Fahrenheit a Celsius (f)?");

  if (opcion === "c") {
    temperatura = Number(prompt("Ingrese la temperatura en grados Celsius: "));
    resultado = temperatura * 9 / 5 + 32;
  } else if (opcion === "f") {
    temperatura = Number(prompt("Ingrese la temperatura en grados Fahrenheit: "));
    resultado = (temperatura - 32) * 5 / 9;
  } else {
    console.log("Opción no válida.");
  }

  console.log("La temperatura convertida es de " + resultado + " grados.");
}

function calcularPotencia() {
  alert("Este programa calcula el resultado de elevar un número a una potencia dada por Usted.");

  let base = 0;
  let exponente = 0;
  let resultado = 1;


  base = Number(prompt("Ingrese el número: "));
  exponente = Number(prompt("Ingrese la potencia: "));


  for (let i = 0; i < exponente; i++) {
    resultado *= base;
  }

  console.log("El resultado es: " + resultado);
}

function juegoDePiedraPapelOTijeras() {
   alert("Este programa Crea un juego en el que el usuario juega contra lacomputadora eligiendo entre piedra, papel o tijeras, y el programa determine al ganador según las reglas del juego");

  let opcionUsuario = "";
  let opcionMaquina = "";
  let ganador = "";


  opcionUsuario = prompt("¿Qué eliges? (piedra, papel o tijeras): ");


  opcionMaquina = Math.floor(Math.random() * 3);


  if (opcionUsuario === "piedra" && opcionMaquina === 2) {
    ganador = "Usuario";
  } else if (opcionUsuario === "papel" && opcionMaquina === 0) {
    ganador = "Usuario";
  } else if (opcionUsuario === "tijeras" && opcionMaquina === 1) {
    ganador = "Usuario";
  } else if (opcionUsuario === opcionMaquina) {
    ganador = "Empate";
  } else {
    ganador = "Computadora";
  }

  console.log("El ganador es: " + ganador + "La computadora saco: " + opcionMaquina);

}