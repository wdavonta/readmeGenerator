// TODO: Include packages needed for this application
const fs =require('fs');
const inquirer = require('inquirer');


// TODO: Create an array of questions for user input
const questions = [];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, err => {
        if (err) {
            return console.log(err);
        }
        console.log('readme been created')
});
}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
