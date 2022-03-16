let numeroNome = Math.floor(Math.random() * 4) +1;


let numeroCognome = Math.floor(Math.random() * 4) +1;

console.log(numeroNome)
console.log(numeroCognome)

let nome1 = "Andrea";

let nome2 = "Beppe";

let nome3 = "Viola";

let nome4 = "Grisù";

let cognome1 = "Boseghin";

let cognome2 = "Lamarmora";

let cognome3 = "DioSardo";

let cognome4 = "Peppone";

let nomescritto ;
let cognomescritto;

if (numeroNome == 1) {
    nomescritto = nome1;
} else if (numeroNome == 2) {
    nomescritto = nome2;
} else if (numeroNome == 3) {
    nomescritto = nome3;
} else {
    nomescritto = nome4;
}

if (numeroCognome == 1) {
    cognomescritto = cognome1;
} else if (numeroCognome == 2) {
    cognomescritto = cognome2;
} else if (numeroCognome == 3) {
    cognomescritto = cognome3;
} else {
    cognomescritto = cognome4;
}



document.getElementById("vFrase").innerHTML = nomescritto ;

document.getElementById("vFrase2").innerHTML = cognomescritto ;