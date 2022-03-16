let numeroNome = Math.floor(Math.random() * 8) +1;


let numeroCognome = Math.floor(Math.random() * 8) +1;

console.log(numeroNome)
console.log(numeroCognome)

let nome1 = "Andrea";

let nome2 = "Beppe";

let nome3 = "Viola";

let nome4 = "Grisù";

let nome5 = "Bud";

let nome6 = "Terence";

let nome7 = "Ubaldo";

let nome8 = "Bimbo";

let cognome1 = "Boseghin";

let cognome2 = "Lamarmora";

let cognome3 = "DioSardo";

let cognome4 = "Peppone";

let cognome5 = "Brillante";

let cognome6 = "Muchacha";

let cognome7 = "Billo-Ballo";

let cognome8 = "Gleyzer";

let nomescritto ;
let cognomescritto;

if (numeroNome == 1) {
    nomescritto = nome1;
} else if (numeroNome == 2) {
    nomescritto = nome2;
} else if (numeroNome == 3) {
    nomescritto = nome3;
} 
else if (numeroNome == 5) {
    nomescritto = nome5;
}

else if (numeroNome == 6) {
    nomescritto = nome6;
}

else if (numeroNome == 7) {
    nomescritto = nome7;
}

else if (numeroNome == 8) {
    nomescritto = nome8;
}

else {
    nomescritto = nome4;
}

if (numeroCognome == 1) {
    cognomescritto = cognome1;
} else if (numeroCognome == 2) {
    cognomescritto = cognome2;
} else if (numeroCognome == 3) {
    cognomescritto = cognome3;
} 
else if (numeroCognome == 5) {
    cognomescritto = cognome5;
}

else if (numeroCognome == 6) {
    cognomescritto = cognome7;
}

else if (numeroCognome == 7) {
    cognomescritto = cognome7;
}

else if (numeroCognome == 8) {
    cognomescritto = cognome8;
}

else {
    cognomescritto = cognome4;
}



document.getElementById("vFrase").innerHTML = nomescritto ;

document.getElementById("vFrase2").innerHTML = cognomescritto ;