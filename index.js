#! /usr/bin/env node
import chalk from "chalk";
import inquirer from "inquirer";
console.log(chalk.yellow.bold("\n\tWelcome To quiz System\n "));
let score = 0;
const quiz = await inquirer.prompt([
    {
        name: "q1",
        message: "What is TypeScript? ",
        type: "list",
        choices: ["Front-end framework", "CSS preprocessor", "Superset of JavaScript", "Database management system"]
    },
    {
        name: "q2",
        message: "Which command is used to compile TypeScript code to JavaScript? ",
        type: "list",
        choices: ["tsc", "node", "npm-start", "tsc-node"]
    },
    {
        name: "q3",
        message: "Which keyword is used to define a constant variable in TypeScript? ",
        type: "list",
        choices: ["const", "let", "var", "constant"]
    },
    {
        name: "q4",
        message: "Which of the following is the correct file extension for TypeScript files? ",
        type: "list",
        choices: [".java", ".ts", ".js", ".py"]
    },
    {
        name: "q5",
        message: "Which operator is commonly used for string concatenation in Typescript? ",
        type: "list",
        choices: ["+", "-", "*", "/"]
    }
]);
switch (quiz.q1) {
    case "Superset of JavaScript":
        console.log(chalk.greenBright("1. Correct!"));
        ++score;
        break;
    default:
        console.log(chalk.redBright("1. Incorrect!"));
}
switch (quiz.q2) {
    case "tsc":
        console.log(chalk.greenBright("2. Correct!"));
        ++score;
        break;
    default:
        console.log(chalk.redBright("2. Incorrect!"));
}
switch (quiz.q3) {
    case "const":
        console.log(chalk.greenBright("3. Correct!"));
        ++score;
        break;
    default:
        console.log(chalk.redBright("3. Incorrect!"));
}
switch (quiz.q4) {
    case ".ts":
        console.log(chalk.greenBright("4. Correct!"));
        ++score;
        break;
    default:
        console.log(chalk.redBright("4. Incorrect!"));
}
switch (quiz.q5) {
    case "+":
        console.log(chalk.greenBright("5. Correct!"));
        ++score;
        break;
    default:
        console.log(chalk.redBright("5. Incorrect!"));
}
if (score >= 5) {
    console.log(chalk.cyanBright.bold(`Congratulations Your Score Is ${score}`));
}
else {
    console.log(`Your Score is ${score}`);
}
