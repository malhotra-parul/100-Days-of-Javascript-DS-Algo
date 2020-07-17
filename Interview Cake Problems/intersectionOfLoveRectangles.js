const myRectangle = {
  leftX: 1,
  bottomY: 1,
  width: 3,
  height: 3,
};

const loverRectangle = {
  leftX: 2,
  bottomY: 2,
  width: 2,
  height: 5,
};

const computeCoordinates = (rectangle) => {
  const { leftX, bottomY, width, height } = rectangle;
  const rightX = leftX + width;
  const topY = bottomY + height;

  return {
    leftX: rectangle.leftX,
    rightX,
    topY,
    bottomY: rectangle.bottomY,
  };
};

const myCoordinates = computeCoordinates(myRectangle);
const loverCoordinates = computeCoordinates(loverRectangle);

const findXOverlap = (myCoordinates, loverCoordinates) => {
  const myLeftX = myCoordinates.leftX;
  const myRightX = myCoordinates.rightX;
  const loverLeftX = loverCoordinates.leftX;
  const loverRightX = loverCoordinates.rightX;

  const highestStartX = myLeftX >= loverLeftX ? myLeftX : loverLeftX;
  const lowestEndX = myRightX >= loverRightX ? loverRightX : myRightX;

  if (lowestEndX <= highestStartX) {
    return "No overlap found!";
  }
  return { highestStartX, lowestEndX };
};

const findYOverlap = (myCoordinates, loverCoordinates) => {
    const myTop = myCoordinates.topY;
    const myBottom = myCoordinates.bottomY;
    const loversTop = loverCoordinates.topY;
    const loversBottom = loverCoordinates.bottomY;
  
    const lowestTop = myTop >= loversTop ? loversTop : myTop;
    const highestBottom = loversBottom >= myBottom ? loversBottom : myBottom;
  
    if (lowestTop <= highestBottom) {
      return "No overlap found!";
    }
    return { lowestTop, highestBottom };
  };

  const calculateIntersection = () => {
      const overlapXAxis = findXOverlap(myCoordinates, loverCoordinates);
      const overlapYAxis = findYOverlap(myCoordinates, loverCoordinates);

      if(!overlapXAxis || !overlapYAxis){
          return  "No overlap found!";
      }

      return {
          overlapXAxis, overlapYAxis
      }
  }
console.log(calculateIntersection());