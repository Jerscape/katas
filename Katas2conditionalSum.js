//function to take 2 arguments, an array, and a test condition (even or odd)

const conditionalSum = function(array, condition) {

let myArray = array
let sum = 0
let result = 0
let test = condition

  for(let num of myArray) {
    //if else statemetn to first assess if the test condition is even or odd, or should that be before the for loop?
    result = num % 2
  
    if(test === "even" && result === 0 ){
      sum = sum + num
    }

    else if (test === "odd" && result === 1){
      sum = sum + num
    }

  }

  return sum

}

//testing

console.log(conditionalSum([1, 2, 3, 4, 5], "even"));
console.log(conditionalSum([1, 2, 3, 4, 5], "odd"));
console.log(conditionalSum([13, 88, 12, 44, 99], "even"));
console.log(conditionalSum([], "odd"));