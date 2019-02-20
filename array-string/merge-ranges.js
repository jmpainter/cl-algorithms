function mergeRanges(ranges) {
  // get highest end time

  let highestEnd = 0;
  ranges.forEach(range => {
    if (range.endTime > highestEnd) {
      highestEnd = range.endTime;
    }
  });

  // create array to hold all ranges
  const timeArr = new Array(highestEnd).fill(0);

  // mark ranges on array
  ranges.forEach(range => {
    for (let i = range.startTime; i <= range.endTime; i++) {
      if (i === range.startTime && timeArr[i] === 0) {
        timeArr[i] = 'S';
      } else {
        timeArr[i] = 1;
      }
    }
  });

  let tempRange = {};
  let start = 0;
  const returnRanges = [];
  for (let i = 0; i < timeArr.length; i++) {
    if (timeArr[i] === 'S') {
      start = i;
    } else if (
      timeArr[i] === 1 &&
      (i === timeArr.length - 1 ||
        timeArr[i + 1] === 0 ||
        timeArr[i + 1] === 'S')
    ) {
      tempRange = { startTime: start, endTime: i };
      returnRanges.push(tempRange);
    }
  }

  return returnRanges;
}

console.log(
  mergeRanges([
    { startTime: 0, endTime: 1 },
    { startTime: 3, endTime: 5 },
    { startTime: 4, endTime: 8 },
    { startTime: 10, endTime: 12 },
    { startTime: 9, endTime: 10 }
  ])
);
console.log(
  mergeRanges([{ startTime: 1, endTime: 2 }, { startTime: 2, endTime: 3 }])
);
console.log(
  mergeRanges([{ startTime: 1, endTime: 5 }, { startTime: 2, endTime: 3 }])
);
console.log(
  mergeRanges([
    { startTime: 1, endTime: 10 },
    { startTime: 2, endTime: 6 },
    { startTime: 3, endTime: 5 },
    { startTime: 7, endTime: 9 }
  ])
);
