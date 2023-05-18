/*Polya's
  Goal: Build a function that utilize helper function to solve some math problems!
  * Understand the problem!
  - Input: a string(operation) and two numbers => addition 2 and 8    functionName('addition', 12, 12)
  - Output: the result of calling the operation using the two numbers => 10
  * will likely use if statements
  * upon meeting a condition, invoke the proper helper functions according to the operation
  * Valid operations
  *   - addition
  *   - subtraction
  *   - multiplication
  *   - division
  */


let addition = function(num1, num2,){
    //  if(typeof num1 !== "number" || typeof num2 !== "number" ) return "invalid datatype"
     let sum = num1 + num2
     return  sum
}

let subtraction = function(num1, num2,){
    // if(typeof num1 !== "number" || typeof num2 !== "number" ) return "invalid datatype"
    let sub = num1 - num2
    return  sub
}

let multiplication = function(num1, num2,){
    // if(typeof num1 !== "number" || typeof num2 !== "number" ) return "invalid datatype"
    let mult = num1 * num2
    return  mult
}

let division = function(num1, num2,){
    // if(typeof num1 !== "number" || typeof num2 !== "number" ) return "invalid datatype"
    let divi = num1 / num2
    return  divi
}


  function calculator(operation, num1,num2){
    if(operation === '+'){
        return addition(num1,num2)
    }
    else if(operation === '-'){
        return subtraction(num1,num2)
    }else if(operation === '*'){
        return multiplication(num1,num2)
    }else if(operation === '/'){
        return division(num1,num2)
    }else{
        return "this is not a valid calculator"
    }
}  


  console.log(calculator('division',1,2))