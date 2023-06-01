function repeatNumbers(array) {

  let num = 0
  let repetition = 0
  tempArray= []
  let k = "num"
  let result = 0

  //first for loop seperates out sub arrays
  for(let i =0; i < array.length; i++){
   
    num = array[i][0]
    repetition = array[i][1];
    result = num * repetition
    tempArray.push(""+ result)
    
    
    //https://www.geeksforgeeks.org/how-to-use-dynamic-variable-names-in-javascript/
    //eval('var ' + "k" + i + '=' + "i" + ';')
    //console.log("num 1 = " + num0)


  }
//use to string method
let final = tempArray.toString()

return final

}//end function

//testing

let myArray = [[1, 2], [2, 3]]
console.log(repeatNumbers(myArray))