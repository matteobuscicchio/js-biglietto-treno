// Nome utente
var userName = prompt("Salve, qual è il suo nome?");
console.log(userName);

// età del passeggero
var yearOfBirth = parseInt(prompt("Gentilissim* " + userName + " In che anno è nato?"));
console.log(yearOfBirth);
var currentYear = 2020;
var userAge = currentYear - yearOfBirth;
console.log(userAge);

// numero di chilometri che vuole percorrere
var userKm = parseInt(prompt(userName + " quanti Km intende coprire?"));
console.log(userKm);

// prezzo senza sconto
var ticketPrice = 0.21;
var fullPrice = ticketPrice * userKm;
console.log(fullPrice);



// va applicato uno sconto del 20% per i minorenni


// va applicato uno sconto del 40% per gli over 65









// Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
//  il prezzo del biglietto è definito in base ai km (0.21 € al km)
