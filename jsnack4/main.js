// Crea due array che hanno un numero di elementi diversi.  Aggiungi elementi all’array che ha meno elementi fino a quando ne avrà tanti quanti l’altro.

let arr1 = [1, 2, 3, 4, 5]
let arr2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

for (i = 0; arr1.length < arr2.length; i++){
  arr1.push(Math.floor(Math.random() * 100 + 1));
}

for (i = 0; arr2.length < arr1.length; i++){
  arr2.push(Math.floor(Math.random() * 100 + 1));
}

document.getElementById("result").innerHTML = "Prima lista" + JSON.stringify(arr1);
document.getElementById("result1").innerHTML = "Seconda lista" + JSON.stringify(arr2);