// TODO: Include packages needed for this application
const fs =require('fs');
const inquirer = require('inquirer');
const generate = require('./utils/generateMarkdown');


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
        name: 'link',
        message: 'Enter the GitHub link to your project. (Required)',
        validate: nameInput => {
          if (nameInput) {
            return true;
          } else {
            console.log('Please enter your GitHub link to your project!');
            return false;
          }
        }
      },
      {
          type: 'input',
          name: 'description',
          message: 'Provide a description of the project:',
        },
        {
            type: 'input',
            name: 'installation',
            message: 'Expalin how project can be install',
          },
          {
            type: 'input',
            name: 'usage',
            message: 'Provide project inscructions ',
          },
          {
            type: 'checkbox',
            name: 'license',
            message: 'What license you use on project ',
            choices: ['MIT', 'GNU', 'IBM', 'Apache 2.0', 'SIL']
          },
          {
            type: 'input',
            name: 'contributing',
            message: 'Who are the contriibutors to the project? ',
          },
          {
            type: 'input',
            name: 'test',
            message: 'Provide test for project',
          },
          {
            type: 'input',
            name: 'github',
            message: 'Enter your GitHub Username (Required)',
            validate: nameInput => {
              if (nameInput) {
                return true;
              } else {
                console.log('Please enter your GitHub Username!');
                return false;
              }
            }
          },
          {
            type: 'input',
            name: 'email',
            message: 'What is your email so people are able to reach you (Required)',
            validate: emailInput => {
              if (emailInput) {
                return true;
              } else {
                console.log ('Please enter an email');
                return false;
              }
            }
          }
        ];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    writeFile(fileName, data, err => {
        if (err) {
            throw err;
        
        }
        console.log('readme been created')
});
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    .then(answers => {

        const data = generate(answers);
        console.log("here your Readme");
        writeToFile("ReadMe.md", data);

    })
}
    
    

// Function call to initialize app
init();
