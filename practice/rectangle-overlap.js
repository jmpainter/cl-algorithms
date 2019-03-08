function rectangleOverlap(rect1, rect2) {
  const overlapX = getOverlap(
    { a: rect1.leftX, b: rect1.leftX + rect1.width },
    { a: rect2.leftX, b: rect2.leftX + rect2.width }
  );
  const overlapY = getOverlap(
    { a: rect1.bottomY, b: rect1.bottomY + rect1.height },
    { a: rect2.bottomY, b: rect2.bottomY + rect2.height }
  );
  return overlapX * overlapY;
}

function getOverlap(range1, range2) {
  const max = Math.max(range1.b, range2.b);
  const arr = new Array(max).fill(0);
  for (let i = range1.a; i <= range1.b; i++) {
    arr[i]++;
  }
  for (let i = range2.a; i <= range2.b; i++) {
    arr[i]++;
  }
  return arr.filter(element => element === 2).length;
}

const myRectangle = {
  // Coordinates of bottom-left corner
  leftX: 1,
  bottomY: 1,

  // Width and height
  width: 6,
  height: 3
};

const myRectangle2 = {
  // Coordinates of bottom-left corner
  leftX: 5,
  bottomY: 2,

  // Width and height
  width: 3,
  height: 6
};

console.log(rectangleOverlap(myRectangle, myRectangle2));
