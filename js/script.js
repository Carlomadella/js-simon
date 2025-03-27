// SCALETTA:

// riprendere dal dom la lista con la formula const numbers = document.getElementById("numbers-list");

// Creo una funzione per:
//     generare 5 numeri casuali da 1 a 50
//     memorizzare la lista di numeri in un array
//     stampare i numeri dell'array come elementi HTML (li) nella lista (ul)

// Genero il timer con setTimeout:
//     il timer deve durare 30 secondi

// Creo una funzione che:
//     passato il tempo prestabilito fa sparire i numeri dalla lista dandole display-none
//     faccia comparire i 5 input a cui bisogna cambiare display-none con display-block
    

// NOTA: l'ordine in cui i numeri sono inseriti dall'utente non importa

// il programma deve rispondere quanti e quali numeri sono stati indovinati:

// Creo un addEventListener al click del bottone:
//     riceva l'input dei numeri scelti riprendendo il suo valore (.value()) su javascript
//     conservi il valore in un array
//     Creo un ciclo for:
//     confronto ogni singolo elemento dell'array creato all'inizio con ogni singolo elemento dell'array appena creato
//     stampo il risultato nel p con id="message"

// INIZIO ESERCIZIO

// create variabile per riprendere gli elementi HTML utili
const lista = document.getElementById("numbers-list");
const displayNum = document.getElementById("countdown")
const istruzioni = document.getElementById("instructions")
const form = document.getElementById("answers-form")
const button = document.querySelector("button");
const paragraph = document.getElementById("message")

// creo l'array dove verranno inseriti i numeri generati randomicamente
let arrayRandom = [];
// creo ciclo for per popolare l'array e creare gli elementi HTML li all'interno della ul
for (let i = 0; i < 5; i++) {
    let generateNum = Math.floor(Math.random() * 50) +1;
    arrayRandom.push(generateNum)
    let listElement = document.createElement("li");
    listElement.textContent = arrayRandom[i];
    lista.appendChild(listElement);
}

console.log(arrayRandom);

// scandisco di quanti secondi deve essere il countdown
let secondi = 30;

displayNum.innerText = secondi

// creo la funzione per il countdown
const trentaZero = setInterval(function () {
    if (secondi != 0){
        secondi--
        displayNum.innerText = secondi;
    }
    else{
        displayNum.innerText = "Inserisci i numeri";
        istruzioni.classList.add("d-none")
        lista.classList.add("d-none")
        form.classList.remove("d-none")
        // stoppa l'intervallo
        clearInterval(trentaZero)
    }

},1000)

// creo l'eventListener che si attiva quando si preme il bottone
button.addEventListener('click', function (event) {
    // per far si che la pagina non si refreshi dopo aver schiacciato il bottone
    event.preventDefault(); 
    // creo l'array che contiene i valori di input dell'utente
    const arrayBis = [];
// creo ciclo for per pushare i valori nell'array appena creato
for(let i = 0; i < 5; i++) {
    arrayBis.push(document.querySelector(`input:nth-child(${i+1})`).value);
}

console.log(arrayBis);

// creo l'array che contiene i valori uguali tra l'array creato all'inizio e quello nuovo
let commonNum = [];
// creo la funzione che mi permette di confrontare i valori dei due array 
function compareAnswers(arrayBis, arrayRandom){
    for (let i = 0; i < arrayBis.length; i++){
        for (let index = 0; index < arrayRandom.length; index++){
            if (arrayBis[i] == arrayRandom[index]){
                // pusho i valori comuni nel terzo array creato
                commonNum.push(arrayBis[i]);
                // non permette ripetizioni nel primo array
                arrayRandom.splice(index, 1);
            }
        }
    }
    // la funzione deve dare come risultato il terzo array creato
    return commonNum;
}

console.log(commonNum);
    // richiamo la funzione 
    const arrayDiff = compareAnswers(arrayBis, arrayRandom);
    // stampo a video i risultati della funzione
    if (commonNum.length === 5){
        message.innerText = 'Tutti i numeri inseriti sono corretti';
    } 
    else if (commonNum.length > 0){
        message.innerText = `Hai inserito ${commonNum.length} numeri corretti: ${commonNum}`;
    } 
    else {
        message.innerText = 'Nessun numero inserito correttamente';
    }
});








 
