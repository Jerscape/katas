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
}//end pascal

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
const kebabCase = function(input){
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
}//end kebab 

//titleCase
const titleCase = function(input){
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

    
    }//end titleCase if

    else if(character === " "){
      //shift = i + 1
      character = input[i]
      result = result + character
      i++ //shifts ahead to beginning of next word
      character = input[i]
      //capitalize it
      capital = character.toUpperCase()
      result = result + capital
      
    }
  }

return result

}//end 

//vowel case

const vowelCase = function(input){
  let character = ""
  let capital = ""
  let result = ""
  const vowels = ["a", "e", "i", "o", "u"]

  //assess if vowels
  for(let i = 0; i < input.length; i++) {
    character = input[i]
    if(vowels.includes(input[i])){
      capital = character.toUpperCase()
      result = result + capital
    }

    else {
      result = result + character
    }

  }

  return result
  
}
//consonants function

const makeConsonant = function(input){
  let character = ""
  let capital = ""
  let result = ""
  const vowels = ["a", "e", "i", "o", "u"]

  //assess if vowels
  for(let i = 0; i < input.length; i++) {
    character = input[i]
    if(vowels.includes(input[i])){
      
      result = result + character
    }

    else {
      capital = character.toUpperCase()
      result = result + capital
    }

  }

  return result
  
}//end consonants case

//UPPER CASE
const makeUpperCase = function(input){
  let character = ""
  let capital = ""
  let result = ""
  
  //assess if vowels
  for(let i = 0; i < input.length; i++) {
    character = input[i]
    capital = character.toUpperCase()
    result = result + capital
    
  }

  return result

}


const makeCase = function(input, caseType) {
  // Put your solution
  let result = ""
  //check if we dealing with an array or 
  //isArray not working
  if(Array.isArray(caseType) === true){
    result = input
    for(let c of caseType){
      
      if(c === "camel") {
        result = camelCase(result)
      }

      //pascal method
      else if(c === "pascal") {
        result = pascalCase(result)

      }

      else if(c === "snake"){
        result = snakeCase(result)
      }

      else if(c === "kebab"){
        result = kebabCase(result)
      }

      else if(c === "title"){
        result = titleCase(result)
      }

      else if(c === "vowel"){
        result = vowelCase(result)
      }

      else if(c === "consonant"){
        result = makeConsonant(result)
      }

      else if(c === "upper"){
        result = makeUpperCase(result)

      }
      

    }//end for loop

  }//end if 
  
  else{
    
    //call camel case method
    result = ""

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
      result = kebabCase(input)
    }

    else if(caseType === "title"){
      result = titleCase(input)
    }

    else if(caseType === "vowel"){
      result = vowelCase(input)
    }

    else if(caseType === "consonant"){
      result = makeConsonant(input)
    }

    else if(caseType === "upper"){
       result = makeUpperCase(input)
    }

  }//end else
  
  return result
  
}

console.log(makeCase("this is a string", "camel"));
console.log(makeCase("this is a string", "pascal"));
console.log(makeCase("this is a string", "snake"));
console.log(makeCase("this is a string", "kebab"));
console.log(makeCase("this is a string", "title"));
console.log(makeCase("this is a string", "vowel"));
console.log(makeCase("this is a string", "consonant"));
console.log(makeCase("this is a string", ["upper", "snake"]));