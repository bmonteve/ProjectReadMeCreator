
const api = require("./utils/api");
const mark = require("./utils/generateMarkdown");
const inquirer = require("inquirer");
const fs = require("fs");

const questions = [
    gitHub = {
        message: "Enter your GitHub Username:",
        name: "gitHub"
    },
    email = {
        message: "What is your email?:",
        name: "email"
    },
    title = {
        message: "Enter the title of you project:",
        name: "title"
    },
    description = {
        message: "Enter a description of your project:",
        name: "description"
    },
    installation = {
        message: "Enter installation requirements:",
        name: "installation"
    },
    usage = {
        message: "Enter how to use your project:",
        name: "usage"
    },
    license = {
        message: "Enter any licensing information:",
        name: "license"
    },
    contributing = {
        message: "Enter ways to contribute:",
        name: "contributing"
    },
    questioning = {
        message: "Enter how questions can be given:",
        name: "questioning"
    },
    tests = {
        message: "Enter any tests to run for the project:",
        name: "tests"
    }
];

function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, function(err) {
        if (err) {
          return console.log(err);
        }
    })
}

function init() {
    inquirer
    .prompt(questions)
    .then(function(response){
        api(response.gitHub)
        .then((git)=>{writeToFile("ReadMe.md", mark(response, git))})
        .catch((err)=>{console.log(err)});
    })
    
}

init();
