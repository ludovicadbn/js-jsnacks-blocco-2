const nomi = [
  "Robert",
  "Jennifer",
  "Rebecca",
  "Dennis",
  "Margaret",
  "Brian",
  "Julia",
  "Patrick",
  "Helen",
  "Brittany",
  "Ronald",
  "Kenneth",
  "Steven",
  "Stacy",
  "Jacob",
  "Daniel",
  "Cheryl",
  "Trevor",
  "Maria",
  "Seth"
]

const cognomi = [
  "Kim",
  "Bishop",
  "Brooks",
  "Brown",
  "Vang",
  "Owens",
  "Mendoza",
  "Weiss",
  "Bernard",
  "Johnson",
  "Martin",
  "Wells",
  "Fox",
  "Thompson",
  "Meyer",
  "Alvarez",
  "Stanley",
  "Williams",
  "Cantrell",
  "Davis"
]

let nomiFalsi = []
let num = Number(prompt("Inserisci il numero di nomi e cognomi falsi da generare"))

for (i = 0; i < num; i++){
  nomiFalsi.push(nomi[Math.floor(Math.random() * nomi.length + 1)] + " " + cognomi[Math.floor(Math.random() * cognomi.length + 1)]);
}

document.getElementById("result").innerHTML = JSON.stringify(nomiFalsi);
