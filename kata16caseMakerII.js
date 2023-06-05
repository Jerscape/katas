//make each case type a function or method?

//camel case
const camelCase = function(input) {
  // Your code here
  let character = ""
  let result = ""
  let shift = -1
  let capital = ""

  for(let i = 0; i < input.length; i++) {
    character = input[i]

    if(character != " " && shift != i ) {

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


const pascalCase = function (input){

  let character = ""
  let result = ""
  let shift = -1
  let capital = ""

  for(let i = 0; i < input.length; i++) {
    character = input[i]

    if(character != " " && shift != i ) {

      if(i === 0){
        capital = character.toUpperCase()
        result = result + capital  

      }

      else{
        result = result + character
      }

    
    }//end pascal if

    else if(character === " "){
      shift = i + 1
      character = input[shift]
      //capitalize it
      capital = character.toUpperCase()
      result = result + capital
      
    }
  }

return result
}//end 

//snake case function
const snakeCase = function(input){
  let character = ""
  let result = ""

  for(let i = 0; i < input.length; i++) {
    character = input[i]

    if(character != " ") {

      result = result + character
    }

    else if(character === " "){
      
      character = "_"
      result = result + character
      
    }
  }

return result
}//end snakeCase

//kebabCase 
const kebadCase = function(input){
  let character = ""
  let result = ""

  for(let i = 0; i < input.length; i++) {
    character = input[i]

    if(character != " ") {

      result = result + character
    }

    else if(character === " "){
      
      character = "-"
      result = result + character
      
    }
  }

return result
}//end kebab case

const makeCase = function(input, caseType) {
  // Put your solution
  
  //call camel case method
  let result = ""
  if(caseType === "camel") {
    result = camelCase(input)
  }

  //pascal method
  else if (caseType === "pascal") {
    result = pascalCase(input)

  }

  else if(caseType === "snake"){
    result = snakeCase(input)
  }

  else if(caseType === "kebab"){
    result = kebadCase(input)
  }

  return result
  
}

console.log(makeCase("this is a string", "camel"));
console.log(makeCase("this is a string", "pascal"));
console.log(makeCase("this is a string", "snake"));
console.log(makeCase("this is a string", "kebab"));
//console.log(makeCase("this is a string", "title"));
//console.log(makeCase("this is a string", "vowel"));
//console.log(makeCase("this is a string", "consonant"));
//console.log(makeCase("this is a string", ["upper", "snake"]));