let numero = prompt("inserisci un numero e osserva che succede!");

numero = Number(numero);

let numero2 = numero + 1;

if (numero % 2 == 0) {

    document.getElementById("vFrase").innerHTML = numero; 

} else {

    document.getElementById("vFrase").innerHTML = numero2;
    
}