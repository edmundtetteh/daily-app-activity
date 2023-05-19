// butter: $1
// eggs: $2
// milk: $3
// bread: $4
// cheese: $5


function costOfGroceries(groceries) {
    // Your code here
    totalCost = 0
    for(let i=0; i<groceries.length; i++){
        let food = groceries[i]
        if(food === 'butter') totalCost +=1
        else if(food === 'eggs') totalCost +=2
        else if(food === 'milk') totalCost +=3
        else if(food === 'bread') totalCost +=4
        else if(food === 'cheese') totalCost +=5
    }
  return totalCost
  
}



function mostExpensiveGroceries(groceriesList) {
    
  
    let highestCost = costOfGroceries(groceriesList[0])
    let index = 0

    for(let i=0; i<groceriesList.length; i++){
        
        let eachGroceryList = groceriesList[i]
        let currentCost = costOfGroceries(eachGroceryList)
        
        if(currentCost > highestCost){
            highestCost = currentCost
            index = i
        }
    }
    return index
      
}




// TESTS
// DO NOT MODIFY ANYTHING BELOW THIS LINE

const groceriesA = ['cheese', 'butter', 'eggs'];
const groceriesB = ['eggs', 'milk', 'bread', 'bread'];
const groceriesC = ['cheese', 'bread'];
const groceriesD = ['eggs', 'butter'];

costOfGroceries(groceriesA);  // 8
costOfGroceries(groceriesB);  // 13
costOfGroceries(groceriesC);  // 9
costOfGroceries(groceriesD);  // 3

mostExpensiveGroceries([groceriesA, groceriesB, groceriesC, groceriesD]);

let score = 0;

if (costOfGroceries(groceriesA) === 8) score++;
if (costOfGroceries(groceriesB) === 13) score++;
if (costOfGroceries(groceriesC) === 9) score++;
if (costOfGroceries(groceriesD) === 3) score++;

if (mostExpensiveGroceries([groceriesA, groceriesB, groceriesC, groceriesD]) === 1) score++;
if (mostExpensiveGroceries([groceriesA, groceriesD]) === 0) score++;
if (mostExpensiveGroceries([groceriesA, groceriesD, groceriesC]) === 2) score++;

console.log("You have scored " + score + "/7 points.");