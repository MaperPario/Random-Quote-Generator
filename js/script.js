/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

/*** 
 * Created an array called 'quotes' and stored 5 famous quotes in the individual objects.
***/
let quotes = [
  {quote: 'The greatest glory in living lies not in never falling, but in rising every time we fall.',
  source: 'Nelson Mandela',},
  {quote: 'If at first you don\'t succeed, try, try again.', source: 'William Edward Hickson',},
  {quote: 'The object of life is not to be on the side of the majority, but to escape finding oneself in the ranks of the insane.', 
  source: 'Marcus Aurelius'},
  {quote: 'Life is what happens when you\'re making other plans.', source: 'John Lennon', citation: 'Song: "Beautiful Boy(Darling Boy)"'},
  {quote: 'Stop breaking your own heart pretending people are something they\'re not.', source: 'Instagram: @werenotreallystrangers', year: '2020'}
];


/***
 *  Created a 'getRandomQuote' function that returns a random quote from the array 'quotes'.
***/
function getRandomQuote() {
  randomQuote = Math.floor(Math.random() * quotes.length);
  return(quotes[randomQuote]);
}


/***
 * Created a function that displays the random quote and source, along with a citation and year if it contains either as a property.
***/
function printQuote() {
  const quoteToPrint = getRandomQuote();
  let html = `
  <p class="quote">${quoteToPrint.quote}</p>
  <p class="source">${quoteToPrint.source}
  `;
  
  if (quoteToPrint.citation) {
    html += `<span class="citation">${quoteToPrint.citation}</span>`;  
  } 
  
  if (quoteToPrint.year) {
    html += `<span class="year">${quoteToPrint.year}</span>`;  
  }
  html += '</p>';

  document.getElementById('quote-box').innerHTML = html;
}

document.getElementById('load-quote').addEventListener("click", printQuote, false);
