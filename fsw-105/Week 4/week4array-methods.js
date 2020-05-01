var fruit = ["banana", "apple", "orange", "watermelon"];
var vegetables = ["carrot", "tomato", "pepper", "lettuce"]

console.log("fruit: ", fruit);
console.log("vegetables: ", vegetables);

// Remove the last item from vegetables

vegetables.pop()
console.log(vegetables)

// Remove the first item from the fruit array

fruit.shift()
    console.log(fruit)

// Find the index of orange


var orangeIndex = fruit.indexOf("orange")
console.log(orangeIndex)

// Add that number to the end of the fruit array

var secondFruit = fruit.push("1")
console.log(fruit)

// Us the length property to find the length of the array

console.log(vegetables.length)

// Add that number to the end of the vegetable array

var secondVegetables = vegetables.push("3")
console.log(vegetables)

// Put the two arrays together

var food = fruit.concat(vegetables);
console.log(food)

// 

const removedElements = food.indexOf(4);
if (removedElements > -1) {
  food.splice(removedElements, 4);
}

// Reverse the Array
var food = ["bananas", "apple", "orange", "watermelon", "carrot", "tomato", "pepper", "lettuce"]
console.log(food.reverse());

