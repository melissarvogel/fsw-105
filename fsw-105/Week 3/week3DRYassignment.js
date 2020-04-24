// Sum of Two Numbers

function sum (num1, num2){
    return num1 + num2
}

var result = sum(12, 14)
console.log(result)


// Largest of Three Numbers

function largestOfThree(a, b, c) {
    if ((a >= b) && (a >= c)) { 
        return a;
    } else if ((b >= a) && (b >= c)) {
        return b;
    } else {
        return c;
    }
}

console.log(largestOfThree(300, 200, 100));

// Even or Odd

 function oddOrEven(num){
    if(num % 2 == 0)
        return "The Number is Even";
    return "The Number is Odd";
}
console.log(oddOrEven(7));

// 20 Characters Function

function isTheStringTwentyCharactersLong (str) {
    var stringOfWords = str.match(/\w[a-z]{0,}/gi);
    var result = stringOfWords[0];

    for(var i = 0; i < stringOfWords.length; i++) {
        if(result.length < stringOfWords[i].length) {
            result = stringOfWords[i]; 
        } 
            return result
    }
}
console.log(isTheStringTwentyCharactersLong("Javascript is very Challenging"));