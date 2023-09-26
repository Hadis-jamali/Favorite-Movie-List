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
  {
    title: "Money Heist",
    director: "Alex Pina",
    year: 2018,
    genre: "crime",
    description:
      "An unusual group of robbers attempt to carry out the most perfect robbery in Spanish history - stealing 2.4 billion euros from the Royal Mint of Spain.",
  },
  {
    title: "Suits",
    director: "Aaron Korsh",
    year: 2011,
    genre: "Drama - Comedy",
    description:
      "On the run from a drug deal gone bad, brilliant college dropout Mike Ross finds himself working with Harvey Specter, one of New York City's best lawyers.",
  },
];
function displayMovie(movieArray) {
  let movieList = document.getElementById("app");
  movieList.innerHTML = "";
  movieArray.forEach((element) => {
    let movieItem = document.createElement("h4");
    movieItem.innerHTML = element.title + " - " + element.genre + " ( " + element.year + " ) ";
    movieItem.onclick = () => showMovieDetails(element);

    movieList.appendChild(movieItem);
    console.log(element);
  });
}
displayMovie(movies);

function addMovie() {
  let newMovie = {
    title: document.getElementById("title").value,
    director: document.getElementById("director").value,
    year: document.getElementById("releaseYear").value,
    genre: document.getElementById("genre").value,
    description: document.getElementById("description").value,
  };

  movies.push(newMovie);
  displayMovie(movies);
}

function showMovieDetails(movie) {
  alert(
    `Name: ${movie.title}\nGenre: ${movie.genre}\nRelease Year: ${movie.year}\nDirector: ${movie.director}\nDescription: ${movie.description}`
  );
}

function sortMovies() {
  const sortedMovies = movies.slice().sort((a, b) => a.releaseYear - b.releaseYear);
  displayMovie(sortedMovies);
}

document.getElementById("filter-button").addEventListener("click", () => {
  const genreFilter = document.getElementById("genre-filter").value;
  filterMovies(genreFilter);
});

function filterMovies(genre) {
  const filteredMovies = movies.filter((movie) =>
    movie.genre.toLowerCase().includes(genre.toLowerCase())
  );
  displayMovie(filteredMovies);
}
