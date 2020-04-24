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
        name: "Same",
        age: 30,
        gender: "male"
    }, {
        name: "Suzy",
        age: 30,
        gender: "male"
    }
]

for(i = 0; i < peopleWhoWantToSeeMadMaxFuryRoad.length; i++) {
    for(var j = 0; j < peopleWhoWantToSeeMadMaxFuryRoad[i].age; j++)
        if(peopleWhoWantToSeeMadMaxFuryRoad[i][j].age < 18 ) 
            console.log(peopleWhoWantToSeeMadMaxFuryRoad[i][j])
            
}


