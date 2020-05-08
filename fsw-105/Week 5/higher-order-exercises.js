//Filter

var arrayOfNumbers = [8, 6, 7, 5, 3, 0, 9]

const result =  arrayOfNumbers.filter(function(fiveAndGreaterOnly) {
if (fiveAndGreaterOnly > 5) {
    return true
}
})

console.log(result)

const secondResult = arrayOfNumbers.filter(function(evensOnly){
    if (evensOnly % 2 ===0){
        return true
    }
}
)
console.log(secondResult)

var pets = ["turtle", "dog", "fish", "cat", "rock", "chinchila"]

const thirdResult = pets.filter(function(fiveCharactersOrFewerOnly){
    if (fiveCharactersOrFewerOnly.length < 5) {
        return true
    }
})

console.log(thirdResult)

var peopleWhoBelongToTheIlluminati = [{
    name: "Angelina Jolie",
    member: true
}, {
    name: "Eric Jones",
    member: false
}, {
    name: "Paris Hilton",
    member: true
}, {
    name: "Kanye West",
    member: false
}, {
    name: "Bob Ziroll",
    member: true
}]

const fourthResult = peopleWhoBelongToTheIlluminati.filter(function(illuminatiMember){
    if (illuminatiMember.member === true) {
        return illuminatiMember.name
    }
}
)

console.log(fourthResult)

var wantToSeeMatrix = [{
    name: "Angelina Jolie",
    age: 80
}, {
    name: "Eric Jones",
    age: 2
}, {
    name: "Paris Hilton",
    age: 5
}, {
    name: "Kanye West",
    age: 16
}, {
    name: "Bob Ziroll",
    age: 100
}]

const fifthResult = wantToSeeMatrix.filter(function(oldEnough){
    if(oldEnough.age > 18) {
        return true
    }
}
)
console.log(fifthResult)

//Map

var numbers = [2, 5, 100]

const sixthResult = numbers.map(function(num){
    return num * 2
})

console.log(sixthResult)

const seventhResult = numbers.map(function(stringItUp){
    return stringItUp.toString()
})

console.log(seventhResult)

//I struggled with this one. I tried to use the index of the letters, but I couldn't get it to work.

var songNames = ["john", "JACOB", "jinGleHeimer", "schmidt"]

const eightresult = songNames.map(function(capitalizeNames){
return capitalizeNames.toUpperCase();
})

console.log(eightresult)


var personObjects = [{
    name: "Angelina Jolie",
    age: 80
}, {
    name: "Eric Jones",
    age: 2
}, {
    name: "Paris Hilton",
    age: 5
}, {
    name: "Kanye West",
    age: 16
}, {
    name: "Bob Ziroll",
    age: 100
}]

var ninthResult = personObjects.map(function(namesOnly){
    return namesOnly.name.toString();
})

console.log(ninthResult)

var tenthResult = personObjects.map(function(makeStrings){
    if (makeStrings.age.toString() > 18){
    console.log(makeStrings.name + " can go see The Matrix!")};
    if (makeStrings.age.toString() < 18)
    console.log(makeStrings.name + " is under age!");

})

var eleventhResult = personObjects.map(function(readyToPutInTheDOM){
    return "<h1>" + readyToPutInTheDOM.name + "</h2>" + "<h2>" + readyToPutInTheDOM.age + "</h2>";
});

  console.log(eleventhResult)

  //Reduce

    var arrOfNums = [1, 2, 3]

    var twelfthResult = arrOfNums.reduce(function(final, num){
        final += num
        return final
    })
    console.log(twelfthResult)

    // I also struggled with this one.

    var thirteenthResult = arrayOfNumbers.reduce(function(final, num){
        return final.toString();
    })
    
 console.log(thirteenthResult)

 var voters = [{
     name: "Bob",
     age: 30,
     voted: true
 }, {
     name: "Jake",
     age: 32,
     voted: true
 }, {
     name: "Kate",
     age: 25,
     voted: false
 }, {
     name: "Sam",
     age: 20,
     voted: false
 }, {
    name: "Phil",
    age: 21,
    voted: true
 }, {
    name: "Ed",
    age: 55,
    voted: true
}, {
    name: "Tami",
    age: 54,
    voted: true
}, {
    name: "Mary",
    age: 31,
    voted: false
}, {
    name: "Becky",
    age: 43,
    voted: false
 }, {
    name: "Joey", 
    age: 41,
    voted: true
}, {
    name: "Jeff",
    age: 30,
    voted: true
}, {
    name: "Zack",
    age: 19,
    voted: false
}]

var fifteenthResult = voters.reduce (function(final, voter){
    if(voter.voted) {
        final++
    }
    return final
}, 0)

console.log(fifteenthResult)

var wishlist = [{
    title: "Tesla Model S",
    price: 90000
}, {
    title: "4 carat Diamond Ring",
    price: 45000
}, {
    title: "Fancy Hacky Sack",
    price: 5
}, {
    title: "Gold Fidget Spinner",
    price: 2000
}, {
    title: "A Second Tesla Model S",
    price: 90000
}
]

var sixteenthResult = wishlist.reduce(function(originalPrice, totalPrice){
    return {
        price: originalPrice.price + totalPrice.price
    }
})
console.log(sixteenthResult)

var arrays = [
    ["1", "2", "3"],
    [true],
    [4, 5, 6]
]

var seventeethResult = arrays.flat(1)
console.log(seventeethResult)

var voters = [{
    name: "Bob",
    age: 30,
    voted: true
}, {
    name: "Jake",
    age: 32,
    voted: true
}, {
    name: "Kate",
    age: 25,
    voted: false
}, {
    name: "Sam",
    age: 20,
    voted: false
}, {
   name: "Phil",
   age: 21,
   voted: true
}, {
   name: "Ed",
   age: 55,
   voted: true
}, {
   name: "Tami",
   age: 54,
   voted: true
}, {
   name: "Mary",
   age: 31,
   voted: false
}, {
   name: "Becky",
   age: 43,
   voted: false
}, {
   name: "Joey", 
   age: 41,
   voted: true
}, {
   name: "Jeff",
   age: 30,
   voted: true
}, {
   name: "Zack",
   age: 19,
   voted: false
}]

function voterResults(arr) {
    const initialVotes = {
      youngVotes: 0,
      youth: 0,
      midVotes: 0,
      mids: 0,
      oldVotes: 0,
      olds: 0,
    }
  
    const peersToVotePeers = {
      youth: "youngVotes",
      mids: "midVotes",
      olds: "oldVotes",
    }
  
    return arr.reduce((acc, voter) => {
      if(voter.age < 26)
        peers = "youth"
       else if (voter.age < 36) {
        peers = "mids"
      } else {
        peers = "olds"
      }
      if (!voter.voted) {
    
        return { ...acc, [peers]: acc[peers] + 1 }
      } else {
        const votePeers = peersToVotePeers[peers];
    
        return {
          ...acc,
          [peers]: acc[peers] + 1,
          [votePeers]: acc[votePeers] + 1,
        }
      }
    }, initialVotes)
  };
  console.log(voterResults(voters));

  //Sort

  const numbersArray = [1, 3, 5, 2, 90, 20]

  numbersArray.sort(function(a, b){
      return a - b
  })
  console.log(numbersArray)

  const secondNumbersArray = [1, 3, 5, 2, 90, 20]

  secondNumbersArray.sort(function(a, b) {
    if (a > b) {
      return -1;;
    } else if (b > a) {
      return 1;;
    } else {
      return 0;
    }
  })
  console.log(secondNumbersArray);

  const macabreStrings = ["dog", "wolf", "by", "family", "eaten"]

  macabreStrings.sort(function(a, b){
      return a.length - b.length
  })

  console.log(macabreStrings)


  const secondMacabreStrings = ["dog", "wolf", "by", "family", "eaten"]

  secondMacabreStrings.sort(function(a, b){
      if (a < b) {
          return -1
      }
      if (a > b) {
          return 1
      }
  });

  console.log(secondMacabreStrings)


  const arrOfPeople = [{
      name: "Quiet Samurai",
      age: 22
  }, {
      name: "Arrogant Ambassador",
      age: 100
  }, {
      name: "Misunderstoond Observer",
      age: 2
  }, {
      name: "Unlucky Swami", 
      age: 77
  }]

  arrOfPeople.sort(function(a, b){
    if (a.age < b.age) {
        return -1
    }
    if (a.age > b.age) {
        return 1
    }
});
console.log(arrOfPeople)

