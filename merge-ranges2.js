function mergeRanges(ranges) {
  let rangesCopy = ranges.slice(0);

  rangesCopy = ranges.sort((a, b) => a.startTime - b.startTime);
  const newRanges = [ranges[0]];
  rangesCopy.forEach((range, index) => {
    if (index > 0) {
      // ranges overlap
      const lastRange = newRanges[newRanges.length - 1];
      if (
        range.startTime <= lastRange.endTime &&
        range.endTime > lastRange.endTime
      ) {
        lastRange.endTime = range.endTime;
      } else if (range.startTime > lastRange.endTime) {
        newRanges.push(range);
      }
    }
  });
  return newRanges;
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
