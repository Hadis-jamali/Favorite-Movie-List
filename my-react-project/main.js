let movies = [
  {
    title: "game of thrones",
    director: "Frank Darabont",
    year: 1994,
    genre: "Drama",
    description: "jkjj",
  },
  {
    title: "sindrella",
    director: "Frank Darabont",
    year: 1994,
    genre: "Drama",
    description: "jkjj",
  },
  {
    title: "friends",
    director: "Frank Darabont",
    year: 1994,
    genre: "Drama",
    description: "jkjj",
  },
];
function displayMovie(movieArray) {
  movieArray.forEach((element) => {
    let movieTitle = document.createElement("h4");
    movieTitle.innerHTML = element.title + " - " + element.genre + " ( " + element.year + " ) " + " - Director: " + element.director + " description: " + element.description;
    let app = document.getElementById("app");
    app.appendChild(movieTitle);
    console.log(element);
  });
}
displayMovie(movies);
