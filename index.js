// Code your solution in this file!
  function distanceFromHqInBlocks(distance){
    if(distance > 42) {
        return distance -42
    }
    else{
        return 42- distance
    }
}     
function distanceFromHqInFeet(distance){
    if(distance > 42) {
        return (distance - 42) * 264
    }
    else{
        return (42 - distance) * 264
    }
}  
function distanceTravelledInFeet(start, destination){
    if(start > destination) {
        return (start - destination) * 264
    }
    else{
        return (destination - start) * 264
    }
} 
function calculatesFarePrice(start, destination) {
  const distanceInFeet = Math.abs(destination - start) * 264;

  if (distanceInFeet <= 400) {
    return 0;
  } else if (distanceInFeet > 400 && distanceInFeet <= 2000) {
    return (distanceInFeet - 400) * 0.02;
  } else if (distanceInFeet > 2000 && distanceInFeet <= 2500) {
    return 25;
  } else {
    return 'cannot travel that far';
  }
}
