function chooseMovies(movieTimes, total) {
  const map = {};

  for (let time of movieTimes) {
    if (map[time]) {
      return true;
    } else {
      const complementTime = total - time;
      map[complementTime] = 1;
    }
  }
  return false;
}

let movieTimes = [40, 30, 60, 20];
console.log(chooseMovies(movieTimes, 60));
movieTimes = [30];
console.log(chooseMovies(movieTimes, 60));
