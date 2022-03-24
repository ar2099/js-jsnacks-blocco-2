// Creiamo array dei numeri inseriti
let numeriInseriti = [];


// Creiamo bottone per l'evento di aggiunta numeri alla lista generale ("numeriInseriti")
let bottoneInserisci = document.getElementById("bottone1") ;



// Iniziamo L'evento 1: aggiunta numeri alla lista
bottoneInserisci.addEventListener("click",

function(){
    

    // Estraiamo valore numero inserito
    let numeroInserito = Number(document.getElementById("i1").value);
    

    // Verifichiamo se i numeri vengono aggiunti all'array
    numeriInseriti.push(numeroInserito)
    
    
    // stampiamo a schermo i valori dell'array
    document.getElementById("numeri-inseriti").innerHTML += `<span>| ${numeroInserito} |</span>`

    // mettiamo il return su numeri inseriti per visualizzare fuori dalla funzione e dall'evento il risultato
    return numeriInseriti;
    

    
})

// Creiamo array dei numeri inseriti in posizione dispari dispari
let numeriPosDispari = []


// Creiamo bottone per la somma dei numeri in posizione dispari
let bottoneSomma = document.getElementById("bottone2");


// Iniziamo l'evento per la creazione della lista dei numeri in posizione dispari
bottoneSomma.addEventListener("click",
    function(){

        // facciamo in modo che ogni volta che si clicca somma la lista dei numeri dispari riparta da 0
        let numeriPosDispari = []

        // facciamo in modo che ogni volta che si clicca somma, la somma dei numeri dispari riparta da 0
        let somma = []

        // creiamo un ciclo per riempire la lista dei numeri in posizione dispari
        for(i = 0; i < numeriInseriti.length; i++){
           if(i == 0) {
              numeriPosDispari.push(numeriInseriti[i])
           } else if(i % 2 == 0){
              numeriPosDispari.push(numeriInseriti[i])
           } else {
           }
           
        }

        
        // creiamo un ciclo per sommare i numeri in posizione dispari
        for(i = 0; i < numeriPosDispari.length; i++) {
            somma = Number(somma) + Number(numeriPosDispari[i]);
        }
        
        // stampiamo il risultato a schermo
        document.getElementById("somma").innerHTML = `${somma}`
        
        

    }
)


