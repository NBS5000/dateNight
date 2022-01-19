var jokeEl = document.querySelector(".jokeOfTheDay");
var quoteEl = document.querySelector(".quotsToday");
var authorEl = document.querySelector(".author");

//function to fetch jokes URL
function getJoke () {
    var requestUrl = 'https://api.jokes.one/jod';
    fetch(requestUrl)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      var joke = data.contents.jokes[0].joke.text;
      jokeEl.textContent = joke;
      // update localstorage
      var storage = JSON.parse(localStorage.getItem("dateNight"));
      // sets the different values of the date
      storage[0].joke = joke;
      // sets the updated array to localstorage
      localStorage.setItem('dateNight', JSON.stringify(storage));


    })
}

getJoke();

//function to fetch quotable URL
function getQuote () {
  var requestUrl = 'https://api.quotable.io/random';
  fetch(requestUrl)
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    var quote = data.content;
    var author = data.author
    quoteEl.textContent = quote;
    authorEl.textContent = author;
    // update localstorage
    var storage = JSON.parse(localStorage.getItem("dateNight"));
    // sets the different values of the date
    storage[0].quote = quote;
    storage[0].author = author;
    // sets the updated array to localstorage
    localStorage.setItem('dateNight', JSON.stringify(storage));
  })
}

getQuote();