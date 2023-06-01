function repeatNumbers(array) {

  let num = 0
  let repetition = 0
  tempArray= []
  let k = "num"
  let result = ""
  let final = ""

  //first for loop seperates out sub arrays
  for(let i =0; i < array.length; i++){
   
    num = array[i][0]
    repetition = array[i][1];
    for(let j = 0; j < repetition; j++){
      result = result + num
    }
    
    
    //tempArray.push(""+ result)

    if(i < array.length-1){
      final = final + result + ", "
      result = ""
    }

    else{
      
      final = final + result
    }


  }//end outer for
//use to string method
//let final = tempArray.toString()

return final

}//end function

//testing

//let myArray = [[1, 2], [2, 3]]
//console.log(repeatNumbers(myArray))
console.log(repeatNumbers([[1, 10]]));
console.log(repeatNumbers([[1, 2], [2, 3]]));
console.log(repeatNumbers([[10, 4], [34, 6], [92, 2]]));