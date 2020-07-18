const inquirer = require("inquirer")
const fs = require('fs')
const axios = require('axios')
const markdown = require('./utils/generateMarkdown.js');
const generateMarkdown = require("./utils/generateMarkdown.js");
// array of questions for user
const questions = [
    {
        type: "input",
        message: "Enter your github username: ",
        name: "userName"
    },
    {   type: "input",
        message: "Enter project title: ",
        name: "title"
    },
    {
        type: 'input',
        message: 'Enter project description:',
        name: 'description'
    },
    {
        type: 'input',
        message: 'Enter installation instructions:',
        name: 'install'
    },
    {
        type: 'input',
        message: 'Enter ways users can contribute:',
        name: 'contribute'
    },
    {
        type: 'input',
        message: 'Enter ways to test the project:',
        name: 'test'
    },
    {
        type: 'list',
        message: 'Select a license for this project:',
        name: 'license',
        choices: ["MIT", "Apache", "The_Unlicense", "Mozilla_PL_2", "GNU_3"]
    },
    {
        type: 'input',
        message: 'Enter your email address:',
        name: 'email'
    }
];

// function to write README file
const writeToFile = async (fileName, data) => {
    fs.writeFile(fileName, data, (err)=>{
        if(err) throw err
        console.log("ReadME generated sucessfully")
    })
}

// function to initialize program
const init = async () => {
    try{
        let info = await inquirer.prompt(questions)
        let thub = await axios.get(`https://api.github.com/users/${info.userName}`);
        let result = generateMarkdown(info)
        writeToFile('generatedReadMe.md', result)
    }catch(err){
        console.log(err)
    }
}

// function call to initialize program
init();