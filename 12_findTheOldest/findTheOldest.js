const findTheOldest = function(oldPeople) {
  let oldest = '';

  for (let i = 1; i < oldPeople.length; i++) {
    if ((oldPeople[i-1].yearOfDeath - oldPeople[i-1].yearOfBirth) < (oldPeople[i-1].yearOfDeath - oldPeople[i-1].yearOfBirth)) {
      oldest = oldPeople[i];
    } else {
      oldest = oldPeople[i-1];
    }
  }
  
  return oldest;
};

// Do not edit below this line
module.exports = findTheOldest;
