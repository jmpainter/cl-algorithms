function chooseMovies(movieTimes, flightTime) {
  const diffMap = {};
  for (let time of movieTimes) {
    const diff = flightTime - time;
    if (diffMap[diff]) {
      return [time, diff];
    } else {
      diffMap[time] = 1;
    }
  }
  return null;
}

// const movieTimes = [40, 30, 60, 20];
const movieTimes = [30];

console.log(chooseMovies(movieTimes, 60));
