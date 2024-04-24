#!/usr/bin/env node
// Import inquirer
import inquirer from "inquirer";
import chalk from "chalk";
// Declare the constant 
const answers:{
    sentence: string
} = await inquirer.prompt([
    {
        name: "sentence",
        type: "input",
        message: (chalk.bgYellow)("\n Enter Your sentence to count the word \n:"),

    }
]);
 const words = answers.sentence.trim().split("")
 // print Array  of word
 console.log(words);
 // print the words count of the sentence
 console.log(chalk.bgGreenBright(`Total Words are ${words.length}`));

