'use strict';

/*
1. Palidroma
Chiedere all’utente di inserire una parola

1) creare una variabile con un prompt, dove l'utente inserira una parola

2) creare una funzione per capire se la parola inserita dall'utente e palindroma o no, quindi creando una variabile per rovesciare la parola inserita, per capire se effetivamente e palindroma 

Creare una funzione per  rovesciare le parole, e creare un condizione che mi dica se la parola inserita è palindroma. Quindi true o false

*/

//1) creare una variabile con un prompt, dove l'utente inserira una parola
const userInput = prompt('inserisci una parola');

//2) creare una funzione per capire se la parola inserita dall'utente e palindroma o no, quindi creando una variabile per rovesciare la parola inserita, per capire se effetivamente e palindroma

function ePalindroma(parola) {
  const lowercaseParola = parola.toLowerCase();

  const rovesciaParola = lowercaseParola.split('').reverse().join('');

  return lowercaseParola === rovesciaParola;
}

if (ePalindroma(userInput)) {
  console.log(`${userInput} è una parola palindroma`);
} else {
  console.log(`${userInput} non e una parola palidroma`);
}
