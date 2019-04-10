function getOverlapArea(rect1, rect2) {
  const xOverLap = getLinearOverlap(
    rect1.leftX,
    rect1.width,
    rect2.leftX,
    rect2.width
  );
  const yOverLap = getLinearOverlap(
    rect1.bottomY,
    rect1.height,
    rect2.bottomY,
    rect2.height
  );

  if (xOverLap.startPoint === null || yOverLap.startPoint === null) {
    return null;
  }

  return {
    leftX: xOverLap.startPoint,
    bottomY: yOverLap.startPoint,
    width: xOverLap.overlapLength,
    height: yOverLap.overlapLength
  };
}

function getLinearOverlap(point1, length1, point2, length2) {
  const highestStartPoint = Math.max(point1, point2);
  const lowestEndPoint = Math.min(point1 + length1, point2 + length2);

  if (highestStartPoint >= lowestEndPoint) {
    return { startPoint: null, overlapLength: null };
  }

  const overlapLength = lowestEndPoint - highestStartPoint;

  return { startPoint: highestStartPoint, overlapLength };
}

const rect1 = {
  leftX: 1,
  bottomY: 1,
  width: 6,
  height: 3
};
const rect2 = {
  leftX: 2,
  bottomY: 2,
  width: 6,
  height: 3
};

console.log(getOverlapArea(rect1, rect2));
