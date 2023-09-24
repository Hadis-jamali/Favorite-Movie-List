let movies = [
  {
    title: "Blade Runner 2049",
    director: "Denis Villeneuve",
    year: 2017,
    genre: "Action",
    description: "",
  },
  {
    title: "Wonder Woman",
    director: "Patty Jenkins",
    year: 2017,
    genre: "Action",
    description: "",
  },
  {
    title: "Note Book",
    director: "Nick Cassavetes",
    year: 2004,
    genre: "Drama",
    description: "",
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
      element.director;
    let app = document.getElementById("app");
    app.appendChild(movieTitle);
    console.log(element);
  });
}
displayMovie(movies);
