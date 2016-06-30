//ROCK PAPER SCISSORS

//Note: Game appears to result in a tie roughly half the time. Not sure if it is by chance or due to the code.

/*
var yourChoice = prompt('Rock. Paper. Scissors. What\'s it gonna be, PUNK?!');
yourChoice = yourChoice.toLocaleLowerCase();

var compChoice = Math.random();
if (compChoice < 0.33) {
    compChoice = 'rock';
} else if (0.34 <= compChoice <= 0.66) {
    compChoice = 'paper';
} else {
    compChoice = 'scissors';
}

choice1 = yourChoice;
choice2 = compChoice;

function compare(choice1, choice2) {
    if (choice1 === choice2) {
        return ('It\'s a tie. Try again!');
    }
    if (choice1 === 'rock') {
        if (choice2 === 'scissors') {
            return ('Rock beats scissors. Rock wins!');
        } else {
            return ('Paper beats rock. Paper wins!');
        }
    }

    if (choice1 === 'paper') {
        if (choice2 === 'rock') {
            return ('Paper beats rock. Paper wins!');
        } else {
            return ('Scissors beats paper. Scissors wins!');
        }
    }

    if (choice1 === 'scissors') {
        if (choice2 === 'rock') {
            return ('Rock beats scissors. Rock wins!');
        } else {
            return ('Scissors beats paper. Scissors wins!');
        }
    } else {
        return ('Do you even know what you\'re doing? TRY AGAIN!');
    }
}
window.alert(compare(choice1, choice2));
*/

//JAVASCRIPT CALCULATOR
/*
var firstNumber = prompt('Please enter a number.');
var secondNumber = prompt('Please enter a second number');
var switchCalc = prompt('Please enter an operation to perform (addition(+), subtraction(-), multiplication(*), or division(/)).');

function calculate(firstNumber, secondNumber, switchCalc) {

    var x = Number(firstNumber);
    var y = Number(secondNumber);

    var result;

    switch (switchCalc) {
        case '+':
            result = (x + y);
            break;
        case '-':
            result = (x - y);
            break;
        case '*':
            result = (x * y);
            break;
        case '/':
            result = (x / y);
            break;
        default:
            result = 'Please enter a valid operator symbol (+, -, *, /).';
    }
    alert(result);
}
calculate(firstNumber, secondNumber, switchCalc);
*/
//DEATH BY JAVASCRIPT

//PART 1

/*
function alphabeticalOrder(str) {
    return str.split('').sort().join('');
}
console.log(alphabeticalOrder('dorknozzle'));
*/

//PART 2

/*
function stringUpper(str) {
    var stringSplit = str.toLowerCase().split(' ');
    for (var i = 0; i < stringSplit.length; i++) {
        stringSplit[i] = stringSplit[i].charAt(0).toUpperCase() + stringSplit[i].substring(1);
    }
    return stringSplit.join(' ');
}
console.log(stringUpper('the quick brown fox'));
*/

//PART 3
/*
var aString = 'the quick brown fox';

function vowelFind(aString) {
    return aString.match(/[aeiou]/gi).length;
}
console.log(vowelFind(aString));
*/

//PART 4
/*
function passGen() {
    var pwLength = 8;
    pwChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890';
    pwGet = '';
    for (var i = 0, n = pwChars.length; i < pwLength; ++i) {
        pwGet += pwChars.charAt(Math.floor(Math.random() * n));
    }
    return pwGet;
}
console.log(passGen());
*/

//PART 5 
/*
var countries = ['Australia', 'Germany', 'United States of America'];
var sortNames = countries.sort(function (a, b) {
    return b.length - a.length;
})
console.log(sortNames[0]);
*/
