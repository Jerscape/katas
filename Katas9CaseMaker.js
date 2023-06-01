const camelCase = function(input) {
  // Your code here
  let character = ""
  let result = ""
  let shift = -1
  let capital = ""


  //assess if has spaces


  for(let i = 0; i < input.length; i++) {
    character = input[i]

    if(character != " " && shift != i) {
    
      result = result + character
    }

    else if(character === " "){
      shift = i + 1
      character = input[shift]
      //capitalize it
      capital = character.toUpperCase()
      result = result + capital
      
    }
  }

return result

};

console.log(camelCase("this is a string"));
console.log(camelCase("loopy lighthouse"));
console.log(camelCase("supercalifragalisticexpialidocious"));