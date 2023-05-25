// add subtract
// Have the function AddSubtract(num) read the num parameter being passed which will be a combination of 1 or more single digits, and determine if it's possible to separate the digits with either a plus or minus sign to get the final expression to equal zero. For example: if num is 35132 then it's possible to separate the digits the following way, 3 - 5 + 1 + 3 - 2, and this expression equals zero. Your program should return a string of the signs you used, so for this example your program should return -++-. If it's not possible to get the digit expression to equal zero, return the string not possible.

// If there are multiple ways to get the final expression to equal zero, choose the one that contains more minus characters. For example: if num is 26712 your program should return -+-- and not +-+-.
let numberArray = [];

function AddSubtract(num) {
  if(num.isNaN || num.toString().length < 2) return "not possible";
  
  numberArray = [];
  numberArray = num.toString().split("").map(Number);
  
  let result = RecursiveCalculation(numberArray[0], 1, "-");
  if(result.includes("N")) 
    result = RecursiveCalculation(numberArray[0], 1, "+");
  if(result.includes("N"))
    result = "not possible";
  return result
}

function RecursiveCalculation(previousValue, index, operator){
  let addition = previousValue + numberArray[index];
  let subtraction = previousValue - numberArray[index];
  
  if(operator === "-"){
    if(index === numberArray.length -1 ){
      return subtraction === 0 ? operator : "N";
    }
    let result = operator + RecursiveCalculation(subtraction, index+1, "-");
    if(result.includes("N")) 
      result = operator + RecursiveCalculation(subtraction, index+1, "+");
    return result;
  }
  
  if(index === numberArray.length -1 ){
    return addition === 0 ? operator : "N";
  }
  let result = operator + RecursiveCalculation(addition, index+1, "-");
  if(result.includes("N")) 
    result = operator + RecursiveCalculation(addition, index+1, "+");
  return result;
}

// console.log(AddSubtract(26712)); //  -+--
// console.log(AddSubtract(199)); // not possible
// console.log(AddSubtract(26712)); // -+--
// console.log(AddSubtract(35132)); //  -++-
// console.log(AddSubtract(7)); //  not possible
// console.log(AddSubtract(22)); //  -
// console.log(AddSubtract(145)); //  +-
// console.log(PlusMinus(541)); //  --
// console.log(PlusMinus(4563)); //  +--
// console.log(PlusMinus(563594)); //  +-+--