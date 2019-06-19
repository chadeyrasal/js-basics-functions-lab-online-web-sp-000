function distanceFromHqInBlocks(pickup) {
  let distance = 0;

  if (pickup >= 42) {
    distance = pickup - 42;
  } else {
    distance = 42 - pickup;
  }

  return distance;
}

function distanceFromHqInFeet(pickup) {
  let distanceInFeet = distanceFromHqInBlocks(pickup) * 264;

  return distanceInFeet;
}

function distanceTravelledInFeet(start, finish) {
  let totalDistance = "0";

  if (start >= finish) {
    totalDistance = (start - finish) * 264;
  } else {
    totalDistance = (finish - start) * 264;
  }

  return totalDistance;
}

function calculatesFarePrice(start, finish) {
  let distance = distanceTravelledInFeet(start, finish);

  let price = 0;

  if (distance < 400) {
    price = 0;
  } else if (distance >= 400 && distance <= 2000) {
    price = (distance - 400) * 0.02;
  } else if (distance > 2000 && distance <= 2500) {
    price = 25;
  } else if (distance > 2500) {
    price = "cannot travel that far";
  }

  return price;
}
