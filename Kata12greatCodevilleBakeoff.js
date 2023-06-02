//the instructions recomending creating this function to first check the bakery ingredients
//Note
// one is a doozy! We might want to start by creating a helper function called ingredientCheck() 
//that will take in one bakery at a time, along with the recipes.ingredients array 
//to check if the given bakery possesses any of the ingredients from that recipes
function ingredientCheck(bakery, specific){

  //let hasIngredient = false
  let yes = false

      //assess single ingredient against items in bakery ingredients array
    for(k = 0; k <bakery.length; k++){
      if(bakery[k] === specific) {
        yes = true
        
      }
    
  }

  return yes

}


const chooseRecipe = function(bakeryA, bakeryB, recipes) {
  // Code here!
  //which recipe does bakery A and bakery B have ingredients for?
  let bakeryAHasIngredient = false
  let bakeryBHasIngredient = false
  let yesList = ""
  let oneIngredient = false



  for(let i = 0; i < recipes.length; i++){
    //retrieves ingredients array from object
    let specific = ""
    for(let specific of recipes[i].ingredients){
      //call to assess if bakery has ingredient
     
      bakeryAHasIngredient = ingredientCheck(bakeryA, specific)
    
      if(bakeryAHasIngredient === true){
        bakeryBHasIngredient = ingredientCheck(bakeryB, specific)
        if(bakeryAHasIngredient === true && bakeryBHasIngredient === true) {
          yesList = yesList + recipes[i].name
        }
        else{
          yesList = "none"
        }
      }

  } 


}
  return yesList
}

let bakeryA = ['saffron', 'eggs', 'tomato paste', 'coconut', 'custard'];
let bakeryB = ['milk', 'butter', 'cream cheese'];
let recipes = [
    {
        name: 'Coconut Sponge Cake',
        ingredients: ['coconut', 'cake base']
    },
    {
        name: 'Persian Cheesecake',
        ingredients: ['saffron', 'cream cheese']
    },
    {
        name: 'Custard Surprise',
        ingredients: ['custard', 'ground beef']
    }
];

console.log(chooseRecipe(bakeryA, bakeryB, recipes));

bakeryA = ['potatoes', 'bay leaf', 'raisins'];
bakeryB = ['red bean', 'dijon mustard', 'apples'];
recipes = [
    {
        name: 'Potato Ganache',
        ingredients: ['potatoes', 'chocolate']
    },
    {
        name: 'Sweet Fish',
        ingredients: ['anchovies', 'honey']
    },
    {
        name: "Nima's Famous Dijon Raisins",
        ingredients: ['dijon mustard', 'raisins']
    }
];

//console.log(chooseRecipe(bakeryA, bakeryB, recipes));