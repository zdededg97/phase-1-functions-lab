function distanceFromHqInBlocks(someValue) {
 if (someValue > 42){
    return someValue - 42
 } else if(someValue<=42){
    return 42 - someValue
 }
  }
  

  function distanceFromHqInFeet(someValue) {
    return distanceFromHqInBlocks(someValue) * 264;
    // call the distanceFromHqInBlocks function from inside the distanceFromHqInFeet function,
    // passing the argument from distanceFromHqInFeet into distanceFromHqInBlocks
  
    // the return value of distanceFromHqInBlocks can then be used to calculate feet
  }

function distanceTravelledInFeet(start, destination) {
    if (start > destination){
        return (start - destination) * 264
    } else if (start<=destination){
        return (destination - start) * 264
    }
  }
  console.log (distanceTravelledInFeet(50, 49))
  console.log (distanceTravelledInFeet(30, 49))

  function calculatesFarePrice(start, destination) {
    const distance = distanceTravelledInFeet(start, destination);
    let fare = 0;
    if (distance <= 400) {
        fare = 0
    }
    else if (distance > 400 && distance <= 2000) {
        fare = (distance - 400) * 0.02; 
    }
    else if (distance > 2000 && distance <= 2500) {
        fare = 25;
    }
    else if (distance > 2500) {
        fare = 'cannot travel that far'
    }
    return fare;
  }
   
  
  