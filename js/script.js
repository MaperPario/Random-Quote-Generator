/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

/*** 
 * Created an array called 'quotes' and stored 5 famous quotes in the individual objects.
***/
let quotes = [
  {quote: 'The greatest glory in living lies not in never falling, but in rising every time we fall.',
  source: 'Nelson Mandela', tags: ['historic', 'leadership', 'idolism']},
  {quote: 'If at first you don\'t succeed, try, try again.', source: 'William Edward Hickson'},
  {quote: 'The object of life is not to be on the side of the majority, but to escape finding oneself in the ranks of the insane.', 
  source: 'Marcus Aurelius', tags: ['philosophy', 'stoicism', 'mindfulness']},
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
 * Created a function that displays the random quote and source, along with a citation, year and tags if it contains any as a property.
***/
function printQuote() {
  changeBackgroundColor();

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

  if (quoteToPrint.tags) {
    html += `<p class="tags">${quoteToPrint.tags.join(', ')}</p>`;  
  }

  html += '</p>';

  document.getElementById('quote-box').innerHTML = html;
}

/***
 * Created a function that changes the background color anytime a new quote is generated from printQuote().
***/
function changeBackgroundColor() {
  const red = getRandomColorValue();
  const green = getRandomColorValue();
  const blue = getRandomColorValue();
  document.body.style.background = (`rgb(${red}, ${green}, ${blue})`);
}

/***
 * Created a function that obtains a random RGB value. The changeBackgroundColor function uses this.
***/
function getRandomColorValue() {
  let randomColor = Math.floor(Math.random() * 256);
  return randomColor;
}

/***
 * Used the setInterval method to call the printQuote function every ten seconds, or 10000 milliseconds.
***/
setInterval(printQuote, 10000);

document.getElementById('load-quote').addEventListener("click", printQuote, false);
