
// Preliminaries

if(5 > 3){
    console.log("Five is greater than Three")
} else {
    console.log("Five is not greater than Three")
}


if(3 === 3){
    console.log("The length of the Cat is Three")
} else {
    console.log("The length of the Cat is not Three")
}

if(3 === 3 || 3 === 5) {
    console.log("The Cat and Dog are not the same")
} else {
    console.log("The Cat and Dog are the same")
}

// Bronze

var person = {
    name: "Bobby",
    age: 12
}

if(12 > 18){
    console.log("Bobby can go to the movie")
} else {
    console.log("Bobby cannot go to the movie")
}

var nameStartsWithB = true

if(nameStartsWithB && 12> 18) {
    console.log("May Attend Movie")
} else {
    console.log("May NOT Attend Movie")
}

// Silver

if(1 === 1){
    console.log("Strict")
} else if(1 == 1){
    console.log("Loose")
} else if(1 === 2){
    console.log("Not equal at All")
}


if((1 <= 2) && 2 == 4) {
    console.log("No")
} else {
    console.log("Yes")
}

// Extra

var dog = "String"

if(dog === "String"){
    console.log("Dog is a String")
} else {
    console.log("Dog is NOT a String")
}

var varTrue = true

if(varTrue === true){
    console.log("The Statment is a Boolen")
} else {
    console.log("The Statment is NOT a Boolean")
}

if(varTrue) {
    console.log("varTrue is Defined")
} else {
    console.log("varTrue is NOT Defined")
}

var s = 10

if(s > 12) {
    console.log("S is Greater than 12")
} else {
    console.log("S is Less than 12")
}


