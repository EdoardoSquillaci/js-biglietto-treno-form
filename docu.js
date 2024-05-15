'use strict'




//Form
const calcolatorePrezzo = document.getElementById('formBiglietto')

//input utente

const etaUtente = document.getElementById ('age');
const kmUtente = document.getElementById ('km');

//calcoli

const prezzo = 0.21
constMinorenni = 18
constOver = 65
const scontoMinorenni = 20
const scontoOver = 40


//Form Submit aggiungo l'evento click


document.getElementById('formBiglietto').addEventListener('submit' , function(event){

event.preventDefault();

const etaUtenteValue = Number (etaUtente.value);
const kmUtenteValue = Number (kmUtente.value)


//logica di calcolo


 





})