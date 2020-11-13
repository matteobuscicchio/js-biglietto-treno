// nome utente
var userName = prompt("Salve, qual è il suo nome?");

// età del passeggero
var userAge = parseInt(prompt("Gentilissim* " + userName + " Quanti anni hai?"));
var currentYear = 2020;
var yearOfBirth = currentYear - userAge;
console.log(yearOfBirth);

// numero di chilometri che vuole percorrere
var userKm = parseInt(prompt(userName + " quanti Km intende coprire?"));

// prezzo senza sconto
var ticketPrice = 0.21;
var fullPrice = ticketPrice * userKm;

// va applicato uno sconto del 20% per i minorenni; del 40% per gli over 65
if (yearOfBirth > 2002) {
  var lowPriceDiscount = (fullPrice * 80) /100; //sconto 20%
  var finalPrice = lowPriceDiscount;
} else if (yearOfBirth < 1956) {
  var highPriceDiscount = (fullPrice * 60) /100; //sconto 40%
  var finalPrice = highPriceDiscount;
}
else {
  var standardPrice = (fullPrice * 100) / 100;
  var finalPrice = fullPrice;
}

// prezzo finale visibile nella pagina
document.getElementById('price').innerHTML = "Gentilissim* " + userName +" il prezzo del suo biglietto corrisponde ad un totale di €" + finalPrice;
