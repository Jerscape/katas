const numberOfVowels = function(data) {

  let evalString = data
  let a = 0
  let e = 0
  let i = 0
  let o = 0
  let u = 0
  
  for(let vowel of data){
    if(vowel === "a"){
      a = a+1
    }

    else if(vowel === "e") {
      e = e + 1
    }

    else if(vowel === "i") {
      i = i + 1
    }

    else if(vowel === "o") {
      o = o + 1
    }

    else if (vowel === "u") {
      u = u + 1
    }
      

  }


  
  return "a: " + a + "\ne: " + e + "\ni: " + i + "\no: " + o + "\nu: " + u 
};


//testing
console.log(numberOfVowels("orange"));
console.log(numberOfVowels("lighthouse labs"));
console.log(numberOfVowels("aeiou"));
