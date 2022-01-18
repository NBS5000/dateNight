var jokeEl = document.querySelector(".jokeOfTheDay");
var quoteEl = document.querySelector(".quotsToday");
var authorEl = document.querySelector(".author");


function getJoke () {

    var requestUrl = 'https://api.jokes.one/jod';

    fetch(requestUrl)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data)

     var joke = data.contents.jokes[0].joke.text;

     jokeEl.textContent = joke;

    })
}

getJoke();

function getQuote () {

  var requestUrl = 'https://api.quotable.io/random';

  fetch(requestUrl)
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    console.log(data)

   var quote = data.content;
   var author = data.author

   quoteEl.textContent = quote;

   authorEl.textContent = author;

  })
}

getQuote();