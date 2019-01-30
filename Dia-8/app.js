/*
 * Aquí podéis hacer los ejercicios y
 * practicar Javascript!
 */

// let num;

// if (0 <= 100 && 0) {
//   alert("hola");
// }

//holamundo

// Ejercicio 1 Strings

// function ucFirst(str) {
//   if (!str) return str;

//   return str[0].toUpperCase() + str.slice(1);
// }

// alert(ucFirst("john"));

// Ejercicio 2 Strings

// function checkSpam(str) {
//   str.toUpperCase();

//   if (str.includes("VIAGRA") || str.includes("XXX")) {
//     return true;
//   } else {
//     return false;
//   }
// }
// console.log(checkSpam("buy ViAgRA now"));

// Ejercicio 3 Strings

// function truncate(str, maxlength) {
//   if (str.length > maxlength) {
//     return str.slice(0, maxlength - 1) + "...";
//   } else {
//     return str;
//   }
// }
// console.log(truncate("What I`d like to tell on this topic is:", 20));

// Ejercicio 4 Strings

// function extractCurrencyValue(str) {
//   return Number(str.slice(1));
// }
// console.log(extractCurrencyValue("$120"));

// Ejercicio 1 Arrays

// Devuelve 4

// Ejercicio 2 Arrays

// let styles = ["Jazz", "Blues"];
// styles.push("Rock-n-Roll");
// alert((styles[Math.floor((styles.length - 1) / 2)] = "Classics"));
// alert(styles.shift());
// styles.unshift("Rap", "Reggae");
// console.log(styles);

//Ejercicio 3 Arrays

// let arr = ["a", "b"];

// arr.push(function() {
//   alert(this);
// });

// arr[2]();

//El array está definido con dos elementos, así que el elemento arr[2] no existe o no está definido.
