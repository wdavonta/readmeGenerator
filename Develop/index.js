// TODO: Include packages needed for this application
const fs =require('fs');
const inquirer = require('inquirer');


// TODO: Create an array of questions for user input
const questions = [

      {
        type: 'input',
        name: 'name',
        message: 'What is the name of your project? (Required)',
        validate: nameInput => {
          if (nameInput) {
            return true;
          } else {
            console.log('Please enter your project name!');
            return false;
          }
        }
      },
      {
      type: 'input',
      name: 'about',
      message: 'Provide a description of the project:',
      when: ({ confirmAbout }) => {
        if (confirmAbout) {
          return true;
        } else {
          return false;
            }
         }
        },
        //table of contents
        {
        }
        {
            type: 'input',
            name: 'installation',
            message: 'Expalin how project can be install',
            validate: nameInput => {
              if (nameInput) {
                return true;
              } else {
                console.log('Please enter your project name!');
                return false;
              }
            }
          },
          {
            type: 'input',
            name: 'usage',
            message: 'Provide project inscructions ',
          },
          {
            type: 'list',
            name: 'license',
            message: 'What licese you use on project ',
            choices: []
          },
          {
            type: 'input',
            name: 'contributing',
            message: 'Provide project instructions ',
          },
          {
            type: 'input',
            name: 'test',
            message: 'Provide test for project',
          },

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
