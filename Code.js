function rollDice() {
    return Math.floor(Math.random() * 6) + 1;
    }
    
    function playGame() {
    var die1 = rollDice();
    var die2 = rollDice();
    var sum = die1 + die2;
    var outputElement = document.getElementById("output");
    
    outputElement.innerHTML = `You rolled: ${die1} and ${die2}. Sum is: ${sum}.<br>`;
    if (sum === 7 || sum === 11) {
    
    outputElement.innerHTML += "CRAPS – you lose!";
    } else if (die1 === die2 && die1 % 2 === 0) {
    outputElement.innerHTML += "You won!";
    } else {
    outputElement.innerHTML += "You pushed!";
    }
    }
    
    
    function demoFunction(inputValue) {
    if (inputValue % 2 === 0) {
    return "Input is even.";
    } else {
    return "Input is odd.";
    }
    }
    
    
    
    
    
    
    