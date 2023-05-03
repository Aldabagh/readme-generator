// Including packages needed for this application
const fs = require('fs');
const inquirer = require("inquirer")
const generateMarkdown = require("./utils/generateMarkdown");
let inq = inquirer.createPromptModule()

//Creating an array of questions for user input
const questions = [
    {
        type: "input",
        name: "title",
        message: "Please name your Project.",
    },
    {
        type: "input",
        name: "description",
        message: "Please describe the purpose and functionality of this project",
    },
    {
        type: "input",
        name: "installation",
        message: "what the installation steps",
    },
    {
        type: "input",
        name: "usage",
        message: "State the language or technologies associated with this project",
    },
    {
        type: "input",
        name: "contributing",
        message: "Please enter contributors ",
    },
    {
        type: "input",
        name: "tests",
        message: "what test were used",
    },
    {
        type: "input",
        name: "email",
        message: "enter your e-mail",
    },
    {
        type: "input",
        name: "github",
        message: "enter your github link",
    },
    {
        type: "list",
        name: "license",
        choices:["none","BSD","MIT","Boost"],
        message: "choose a license"
    },
];

// function to write README file
function writeToFile(fileName, data) {

fs.writeFile(`${__dirname}/${fileName}`,data, err => console.error(err));

}

// function to initialize app
function init() {
    inq(questions).then(data => {

        let readmeContent = generateMarkdown(data);
        writeToFile("README.md",readmeContent)
    
    });
}

// Function call to initialize app
init();
