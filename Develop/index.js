// TODO: Include packages needed for this application
const { prompt } = require("inquirer")
const { writeFile } = require("fs")
const generateMarkdown = require("./utils/generateMarkdown")

// TODO: Create an array of questions for user input
const questions =[ {
    type: "input",
    message: "What is the title of your application?",
    name: "title",
},

{
    type: "input",
    message: "How would you describe the application to the user?",
    name: "description",
},
{
    type: "input",
    message: "Table of Contents:",
    name: "toc",
},
{
    type: "input",
    message: "What are the instructions for the user to install your application?",
    name: "installation",
},

{
    type: "input",
    message: "How does a user use your application? Also provide a link so the user can access the application with ease.",
    name: "usage",
},

{
    type: "input",
    message: "Did you use any sorces (websites or people)?",
    name: "credits",
},

{
    type: "input",
    message: "What are the instructions for running a test for your application?",
    name: "test",
},

{
    type: "list",
    message: "What license was used to create your project?",
    name: "license",
    choices: ["mit", "apache", "gnu",  "none"]
},



];

// TODO: Create a function to write README file
function writeToFile(fileName, data) { writeFile(fileName, generateMarkdown(data), err => {
    err ? console.log(err) : console.log("file successfully created!")
});
}

// TODO: Create a function to initialize app
async function init() {
    const response = await prompt(questions);
    console.log(response)
    writeToFile("README.md", response);
}

// Function call to initialize app
init();
