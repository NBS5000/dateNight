var jokeEl = document.querySelector(".jokeOfTheDay");



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