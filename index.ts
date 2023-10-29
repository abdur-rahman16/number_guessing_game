#! /usr/bin/env node



import inquirer from "inquirer"
import chalk from "chalk"
import showBanner from "node-banner" 
import gradient from "gradient-string";

(async () => {
    await showBanner('Number Game', 'This game is about guessing a number',"red", "blue");
})();

let guessNumber = [{
    name: "guess",
    type: "number",
    message: gradient.instagram("Guess a number between 1 to 10.")
}]

let tryagain = [{
    name: "again",
    type: "confirm",
    message: gradient.fruit("Do you want to guess again?")
}]


async function GuessNumberGame() {
    

    let condition = true

    while(condition){
        let randomNumber = (Math.floor(Math.random()*10)+1)
    const{guess} = await inquirer.prompt(guessNumber)
    
    if(randomNumber === guess){
        console.log(chalk.green("You win!!"))
    }
    else if(randomNumber < guess){
        console.log(chalk.red("Your guess is too high"))
    }    
    else if(randomNumber > guess){
        console.log(chalk.cyanBright("Your guess is too low"))
    }

    let {again} = await inquirer.prompt(tryagain)
    condition = again
}
console.log(chalk.yellow("Thank you for trying my game!"))
}


setTimeout(() => {
    GuessNumberGame()
}, 500);


