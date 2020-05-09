// #1

const name = "John"
const age = 101


function runForLoop(pets) {
    const petObjects = []
    for (i = 0; i < pets.length; i++) {
        let pet = {type: pets[i]}
        name;
        if (pets[i] === "cat") {
           name === "fluffy"
        } else {
           name === "spot"
        }
        console.log("pet name: ", name)
        pet.name = name
        petObjects.push(pet)
    }
    console.log("man name: ", name)
    return petObjects
}

runForLoop(["cat", "dog"])


//#2

//const carrots = ["bright orange", "ripe", "rotten"]



    
//#3

const people = [{
    name: "Princess Peach",
    friendly: false
}, {
    name: "Luigi",
    friendly: true
}, {
    name: "Mario",
    friendly: true
}, {
    name: "Bowser",
    friendly: false
}]

const areTheyFriendly = people.filter(person => people.friendly === true)
console.log(areTheyFriendly)

//#4

//doMathSum(a, b) => a + b
    

//produceProduct(a, b) => a*b

//#5

//I did not understand the directions.

//#6

//I don't understand the directions.

//#7

const animals = [{
    type: "dog",
    name: "theodore"
}, {
    type: "cat",
    name: "whiskers"
}, {
    type: "pig",
    name: "piglette"
}, {
    type: "dog",
    name: "sparky"
}]

const filterForDogs = animals.filter(() => animals.type === true)
console.log(filterForDogs)

//#8

const traveler = {
    firstName: "Janice",
    location: "Hawaii"
}

const {firstName, location} = traveler
console.log("Hi " + firstName +"! Welcome to " + location + ". I hope you enjoy your stay. Please ask the presisent of " + location + " if you need anything."  )

