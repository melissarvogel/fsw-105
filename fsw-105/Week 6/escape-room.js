const ask = require('readline-sync');

function Game() {
    this.box = 'locked';
    this.inventory = [];
    this.puzzle = 'unsolved';
    this.gameOver = false;
}

//helper functions
function openBox() {
    console.log('You must solve this puzzle to unlock the box: \nYou have three guesses to fill in the blanks in the following number pattern: \n8, _, 7, 5, _, 0 9');
    let counter = 3;
    while(currGame.puzzle === 'unsolved') {
        let firstAnswer = ask.question('The first blank?');
        if(firstAnswer === '6') {
            console.log('Correct!');
            let secondAnswer = ask.question('The second blank?');
            if(secondAnswer === '3') {
                console.log('Congrats, you solved the puzzle. The box opened and you found the key! You may take the key now if you wish.');
                currGame.puzzle = 'solved';
                currGame.box = 'unlocked';
            } else {
                counter--;
                if (counter > 0) {
                    console.log('Incorrect. You have ' + counter + ' guesses left.');
                } else {
                    console.log('You\'ve run out of guesses. Game Over.');
                    currGame.gameOver = true;
                    break;
                }
            }
        } else {
            counter--;
            if (counter > 0) {
                console.log('Incorrect. You have ' + counter + ' tries left.');
            } else {
                console.log('You\'ve run out of guesses. Game Over.');
                currGame.gameOver = true;
                break;
            }
        }
    }
}

let currGame = new Game();

console.log('You have found yourself locked in a room. You may: \n    1)look \n    2)take \n    3)open \nYou may try other commands, if you dare.'); 

while (!currGame.gameOver) {
    let action = ask.question('What would you like to do?');
    action = action.toLowerCase();
    if(action.includes('hole')) {
        console.log('There is a hole in the wall emmiting a terrible odor.');
            break;
    } else if(action.includes('look')) {
        if(action.includes('box')) {
            if(currGame.box === 'locked') {
                console.log('The box is locked. You will need to open the box.');
                continue;
            } else if (currGame.box === 'unlocked') {
                console.log('The box is empty. You have what you need to unlock the door.');
                continue;
            } 
        } else {
            console.log('There is a hole in the brick wall, an old toolbox box in the corner, and a locked wooden door.');
        }
    } else if (action.includes('open')) {
        if(!action.includes('box') && !action.includes('door')) {
            console.log('You must be specific (ex: "open door"), or I will not understand your command. Try again.');
            continue;
        } else if (action.includes('box')) {
            if(currGame.puzzle === 'unsolved') {
                openBox(); 
                continue;
            } else if (currGame.puzzle === 'solved') {
                console.log('You have already opened the box. Take the key.');
                continue;
            }
        } else if (action.includes('door')) {
            if (currGame.inventory.includes('key')) {
                console.log('You escaped!');
                break;
            } else if (!currGame.inventory.includes('key')) {
                console.log('The door is locked. Find the key.')
            }
        }  
    } else if (action.includes('unlock') && action.includes('door')) {
        if (currGame.inventory.includes('key')) {
            console.log('You escaped!');
            break;
        } else if (!currGame.inventory.includes('key')){
            console.log('The door is locked. Find the key.')
        }
    } else if (action.includes('take')) {
        if (currGame.puzzle === 'solved') {
            currGame.inventory.push('key');
            console.log('You now have the key. Now open the door!');
            continue;
        } else {
            console.log('There is nothing for you to take.');
            continue;
        }
    } else {
        console.log('I do not understand that command. Try again.');
    }
}