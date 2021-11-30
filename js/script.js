// Descrizione:
// Visualizzare con degli alert 5 numeri casuali. Da lì parte un timer di 30 secondi.
// Dopo 30 secondi l'utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().
// Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.


// Visualizzare con degli alert 5 numeri casuali.
// Da lì parte un timer di 30 secondi.
let i = 0;
const randomNumber = [];
while(i < 5) {
    let randomNum = getRndInteger(1, 100);
    alert(randomNum);
    randomNumber.push(randomNum);
    i++;
    // console.log(randomNum);
}
// console.log(randomNumber);


setTimeout(userInput, 3000);


const userNumber = [];
function userInput(number) {
    let i = 0;
    while(i < 5) {
        number = parseInt( prompt('Inserisci un numero') );
        // console.log(number);
        i++;
        userNumber.push(number);
    }

    return userNumber;
}

console.log(userNumber);


const rememberedNumbers = [];
for(let i = 0; i < userNumber.length; i++) {
    let thisItem = userNumber[i];
    if(randomNumber.includes(thisItem)) {
        rememberedNumbers.push(thisItem);
    }

    return rememberedNumbers;
}



// Funzione che genera i numeri casuali da 1 a 100
function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
  }