

function calc(input){
  // return (34/50) * input - (input * .17) - (input * .15);
  return  input - (input * .17) - (input * .15);
}

console.log(calc(850000));
console.log(calc(600000));
/** 
 * 
 * 34/50 === x/100
 * 3400 = x/50
*/