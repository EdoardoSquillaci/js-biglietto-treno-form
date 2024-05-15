'use strict'




//Form
const calcolatorePrezzo = document.getElementById('formBiglietto')

//input utente

const etaUtente = document.getElementById ('age');
const kmUtente = document.getElementById ('km');

//calcoli

const prezzokm = 0.21
const minorenni = 18
const over = 65
const scontoMinorenni = 20
const scontoOver = 40


//Form Submit aggiungo l'evento click


document.getElementById('formBiglietto').addEventListener('submit' , function(event){

event.preventDefault();

const etaUtenteValue = Number (etaUtente.value);
const kmUtenteValue = Number (kmUtente.value);
let prezzo = Number(prezzokm * kmUtenteValue)


//logica di calcolo

if (etaUtenteValue < minorenni){
    prezzo = prezzo - [(prezzo * scontoMinorenni) / 100]}
 
 else if ( etaUtenteValue >= over){

    prezzo =  prezzo - [(prezzo * scontoOver) / 100];
 }  
 
 prezzo = prezzo.toFixed(2)


 document.getElementById('ageholderdesc').classList.remove('d-none')

 document.getElementById('kmholderdesc').classList.remove('d-none')


 document.getElementById('priceholderdesc').classList.remove('d-none')


 document.getElementById('ageholder').innerHTML = kmUtenteValue

 document.getElementById ('kmholder').innerHTML = etaUtenteValue
 
 document.getElementById ('priceholder').innerHTML = prezzo


})

//pulsante reset

document.getElementById('reset').addEventListener('click' , function(){

    document.getElementById('ageholderdesc').classList.add('d-none')

    document.getElementById('kmholderdesc').classList.add('d-none')
   
    document.getElementById('priceholderdesc').classList.add('d-none')


    document.getElementById('ageholder').classList.add('d-none')

    document.getElementById('kmholder').classList.add('d-none')
   
    document.getElementById('priceholder').classList.add('d-none')

})








