const multiplicationTable = function(maxValue) {

let result = ""

  for(let i = 1; i <= maxValue; i++) {
    
    
    for(let j = 1; j <= maxValue; j++){

      if(j <= maxValue){
        //let result = ""
        let hold = i * j
        result = result + hold + " "
        
      }
    }
    result = result + "\n"
    j = 1

  }
  return result
};

console.log(multiplicationTable(1));
console.log(multiplicationTable(5));
console.log(multiplicationTable(10));