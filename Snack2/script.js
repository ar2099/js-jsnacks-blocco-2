let nomi = ["Bob", "Andrea", "Maria", "Chiara", "Beppe", "Gestaldo"];

let cognomi = ["Boseghin", "Actis", "Borghezio", "Camino", "Trentalance", "Drello"];




let bottone = document.getElementById("bottone");
let numero = 0;
numero = Number(numero)
bottone.addEventListener("click",

function(){
    let c = Math.floor(Math.random() * 6);
    let d = Math.floor(Math.random() * 6);
    c = Number(c);
    d = Number(d);
    numero = numero +1;
    document.getElementById("lista-invitati").innerHTML += `<div class="riga"><div class="numero-part"><p>${numero}</p></div><div class="nome-part"><p>${cognomi[c]} ${nomi[d]}</p></div></div>`
}

)

