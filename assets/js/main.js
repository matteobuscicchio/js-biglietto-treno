// nome utente
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



// va applicato uno sconto del 20% per i minorenni; del 40% per gli over 65
// function myFunction() {
//   var finalPrice;
// }

if (userAge < 18) {
  var lowPriceDiscount = (fullPrice * 80) /100;
  var finalPrice = lowPriceDiscount;
} else if (userAge > 65) {
  var highPriceDiscount = (fullPrice * 60) /100;
  var finalPrice = highPriceDiscount;
}
else {
  var standardPrice = fullPrice;
  var finalPrice = fullPrice;
}

console.log(lowPriceDiscount);
console.log(highPriceDiscount);
console.log(standardPrice);
console.log("€" + finalPrice);



// document.getElementById('price').innerHTML = "£ " + finalPrice;
