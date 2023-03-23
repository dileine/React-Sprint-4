// Exercise 1: Get the array of all directors.
function getAllDirectors(array) {
  let allDirectors = array.map((film) => film.director);
  return allDirectors;
}

// Exercise 2: Get the films of a certain director
function getMoviesFromDirector(array, director) {
  let moviesFromDirector = array.filter((film) => film.director == director);
  return moviesFromDirector;
}

// Exercise 3: Calculate the average of the films of a given director.
function moviesAverage(array) {
  let moviesAverage =
    array.reduce((score, film) => score + film.score, 0) / array.length;
  return parseFloat(moviesAverage.toFixed(2));
}

function moviesAverageOfDirector(array, director) {
  director = getMoviesFromDirector(array, director);
  let averageOfDirector = moviesAverage(director);
  q;
  return parseFloat(averageOfDirector.toFixed(2));
}

// Exercise 4:  Alphabetic order by title
function orderAlphabetically(array) {
  let filmTitle = array.map((film) => film.title);
  let sortedByTitle = filmTitle.sort((a, b) => a.localeCompare(b));
  let arraySorted = sortedByTitle.slice(0, 20);
  return arraySorted;
}

// Exercise 5: Order by year, ascending
function orderByYear(array) {}

// Exercise 6: Calculate the average of the movies in a category
function moviesAverageByCategory() {}

// Exercise 7: Modify the duration of movies to minutes
function hoursToMinutes() {}

// Exercise 8: Get the best film of a year
function bestFilmOfYear() {}

// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = {
    getAllDirectors,
    getMoviesFromDirector,
    moviesAverageOfDirector,
    orderAlphabetically,
    orderByYear,
    moviesAverageByCategory,
    hoursToMinutes,
    bestFilmOfYear
  };
}
