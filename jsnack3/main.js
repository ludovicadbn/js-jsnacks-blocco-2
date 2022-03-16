let num = Number(prompt("Inserisci la quantità di numero da inserire nella lista"))
let numArr = []
let sum = 0

for (i = 0; i < num; i++) {
  numArr.push(Math.floor(Math.random() * 100 + 1));
} 

for (i = 0; i < numArr.length; i++) {
  if (i % 2 == 1) {
    sum += numArr[i];
  }
}

document.getElementById("result").innerHTML = `${sum} è la somma degli numeri in posizione dispari nella lista`;