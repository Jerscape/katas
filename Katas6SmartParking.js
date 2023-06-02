//takes two parameters, an array of arrays, and the type of vehicle loooking (regular cars, small cars, motorycle)
//UPPER CASE LETTERS = AVAILABLE, lowercase = UNavailable 
//R can only park in R
//S can park in R or S
//M can park in R, S, or M

const whereCanIPark = function (spots, vehicle) {
  // Code here!
let coordinates = []

  for(let y = 0; y < spots.length; y++) {
    for(let x= 0; x < spots[y].length; x++){

      //R can only park in R
      if(vehicle === "regular" && spots[y][x] === "R"){
        //coordinates.push(spots[x][y])
        return [x,y]
        //coordinates.push(x, y)

      }
      //end regular car assessment 

      //S can park in R or S
      else if(vehicle === "small" && (spots[y][x] === "R" ||spots[y][x] === "S")) {
        //coordinates.push(x, y)
        return[x,y]

      }

      else if(vehicle === "motorcycle" && (spots[y][x] === "R" ||spots[y][x] === "S" || spots[y][x] === "M" )) {
        //coordinates.push(x, y)
        return[x,y]

      }


    }//end inner for loop

  }//end inner for loo[]

return false

};

//testing 

console.log(whereCanIPark(
  [
    // COLUMNS ARE X
    // 0    1    2    3    4    5
    ['s', 's', 's', 'S', 'R', 'M'], // 0 ROWS ARE Y
    ['s', 'M', 's', 'S', 'r', 'M'], // 1
    ['s', 'M', 's', 'S', 'r', 'm'], // 2
    ['S', 'r', 's', 'm', 'r', 'M'], // 3
    ['S', 'r', 's', 'm', 'r', 'M'], // 4
    ['S', 'r', 'S', 'M', 'M', 'S']  // 5
  ],
  'regular'
));

console.log(whereCanIPark(
  [
    ['M', 'M', 'M', 'M'],
    ['M', 's', 'M', 'M'],
    ['M', 'M', 'M', 'M'],
    ['M', 'M', 'r', 'M']
  ],
  'small'
));

console.log(whereCanIPark(
  [
    ['s', 's', 's', 's', 's', 's'],
    ['s', 'm', 's', 'S', 'r', 's'],
    ['s', 'm', 's', 'S', 'r', 's'],
    ['S', 'r', 's', 'm', 'r', 's'],
    ['S', 'r', 's', 'm', 'R', 's'],
    ['S', 'r', 'S', 'M', 'm', 'S']
  ],
  'motorcycle'
))