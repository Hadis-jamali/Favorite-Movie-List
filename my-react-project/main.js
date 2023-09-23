let movies = [
  {
    title: "Blade Runner 2049",
    director: "Denis Villeneuve",
    year: 2017,
    genre: "Action",
    description:
      "Young Blade Runner K's discovery of a long-buried secret leads him to track down former Blade Runner Rick Deckard..",
  },
  {
    title: "Wonder Woman",
    director: "Patty Jenkins",
    year: 2017,
    genre: "Action",
    description:
      " Diana, an Amazonian warrior in training, leaves home to fight a war, discovering her full powers and true destiny..",
  },
  {
    title: "Note Book",
    director: "Nick Cassavetes",
    year: 2004,
    genre: "Drama",
    description: "A poor yet passionate young man falls in love with a rich young woman..",
  },
];
function displayMovie(movieArray) {
  movieArray.forEach((element) => {
    let movieTitle = document.createElement("h4");
    movieTitle.innerHTML =
      element.title +
      " - " +
      element.genre +
      " ( " +
      element.year +
      " ) " +
      " - Director: " +
      element.director +
      " description: " +
      element.description;
    let app = document.getElementById("app");
    app.appendChild(movieTitle);
    console.log(element);
  });
}
displayMovie(movies);
