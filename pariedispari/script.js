'use strict';

/*
2. Pari e Dispari
   1)L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.

    creare due prompt
    uno per chiedere all'utente di scegliere tra pari e dispari
    e uno per chiedere all'utente di inserire un numero tra 1 a 5 

   2)Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
   3)Sommiamo i due numeri
   4)Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
   Dichiariamo chi ha vinto.

*/

/*1)L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.

    creare due prompt
    uno per chiedere all'utente di scegliere tra pari e dispari
    e uno per chiedere all'utente di inserire un numero tra 1 a 5 
*/

//prompt pari e dispari
const sceltaUtente = prompt('Scegli pari o dispari ').toLowerCase();

//prompt numero da 1 a 5
const numeroUtente = Number(prompt('Inserisci un numero da 1 a 5'));
