/*var officeItems = ["stapler", "monitor", "computer", "desk", "lamp", 
"computer", "lamp", "stapler", "computer", "computer"]

for(var i = 0; i < officeItems.length; i++){
    if(officeItems[i] === "computer"){

    } 
    
}*/

/* var officeItems = ["stapler", "monitor", "computer", "desk", "lamp", "computer", "lamp", "stapler", "computer", "computer"]
var count = 0

for (var i = 0; i < officeItems.length; i++){
   if (officeItems[i] === "computer"){
        count++
    }
}
console.log(count) */


var peopleWhoWantToSeeMadMaxFuryRoad = [
    {
        name: "Mike",
        age: 12,
        gender: "male"
    } ,{
        name: "Madeline",
        age: 80,
        gender: "female"
    }, {
        name: "Cheryl",
        age: 30,
        gender: "female"
    }, {
        name: "Sam",
        age: 30,
        gender: "male"
    }, {
        name: "Suzy",
        age: 4,
        gender: "female"
    }
]


function isOldEnough() {
    for (i = 0; i < peopleWhoWantToSeeMadMaxFuryRoad.length; i++){
        if (peopleWhoWantToSeeMadMaxFuryRoad[i].age >= 18) {
            console.log("Person is old enough")
        } 
        else if(peopleWhoWantToSeeMadMaxFuryRoad[i].age < 18){
            console.log("Person is NOT old enough")
        }
    }
}

 isOldEnough();
 console.log("==============");

function isOldEnoughWithName() {
    for (i = 0; i < peopleWhoWantToSeeMadMaxFuryRoad.length; i++){
        if (peopleWhoWantToSeeMadMaxFuryRoad[i].age >= 18) {
            console.log(peopleWhoWantToSeeMadMaxFuryRoad[i].name + " is old enough to see Mad Max Fury Road")
        } 
        else if(peopleWhoWantToSeeMadMaxFuryRoad[i].age < 18){
            console.log(peopleWhoWantToSeeMadMaxFuryRoad[i].name + " is NOT old enough to see Mad Max Fury Road")
        }
    }
}

isOldEnoughWithName() 
 console.log("==============");


function isOldEnoughWithNameAndGender() {
    for (i = 0; i < peopleWhoWantToSeeMadMaxFuryRoad.length; i++){
        if (peopleWhoWantToSeeMadMaxFuryRoad[i].gender === "male" && peopleWhoWantToSeeMadMaxFuryRoad[i].age >= 18) {
            console.log(peopleWhoWantToSeeMadMaxFuryRoad[i].name + " is old enough to see Mad Max Fury Road, let HIM attend")
        } else if (peopleWhoWantToSeeMadMaxFuryRoad[i].gender === "male" && peopleWhoWantToSeeMadMaxFuryRoad[i].age < 18){
            console.log(peopleWhoWantToSeeMadMaxFuryRoad[i].name + " is NOT old enough, do NOT let HIM attend")
        }
        else if(peopleWhoWantToSeeMadMaxFuryRoad[i].gender === "female" && peopleWhoWantToSeeMadMaxFuryRoad[i].age < 18){
            console.log(peopleWhoWantToSeeMadMaxFuryRoad[i].name + " is NOT old enough to see Mad Max Fury Road, let HER attend")
        } else if (peopleWhoWantToSeeMadMaxFuryRoad[i].gender === "female" && peopleWhoWantToSeeMadMaxFuryRoad[i].age >= 18){
            console.log(peopleWhoWantToSeeMadMaxFuryRoad[i].name + " is old enough to attend Mad Max Fury Road, let HER attend")
        }
    }
}

isOldEnoughWithNameAndGender();
console.log("==============");

function evenAndOdd(){
    for(var i = 0; i <= 101; i++){
        if((i % 2) === 0){
            console.log("Even")
        } else if((i % 1) === 0){
            console.log("Odd")
        }
    }
}

evenAndOdd();