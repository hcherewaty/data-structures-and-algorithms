'use strict';

function multiBracketValidation(string) {
  let counters = [0,0,0,0,0,0];
  let [openP,closeP,openC,closeC,openB,closeB] = counters;
  for(let i = 0; i < string.length; i++) {
    if(openC < closeC || openP < closeP || openB < closeB){
      break;
    }
    let charCheck = string.charAt(i);
    switch(charCheck) {
    case '{':
      openC++;
      break;
 
    case '}':
      closeC++;
      break;
 
    case '(':
      openP;
      break;
 
    case ')':
      closeP++;
      break;
 
    case '[':
      openB++;
      break;
 
    case ']':
      closeB++;
      break;
    default:
      break;
 
    }
  }
  if(openC === closeC && openP === closeP && openB === closeB){
    return true;
  }else {
    return false;
  }
}

// console.log(multiBracketValidation('[]'));

module.exports = {multiBracketValidation};