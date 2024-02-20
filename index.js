import fs from 'fs';
//import path from 'path';
import inquirer from 'inquirer';
import generateMarkdown from './utils/generateMarkdown.js';

const fileSavePath = './created_readme/README.md';

// Announcement of icons. Array for license information
const markdownLicenseBadges = {
    'MIT': '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)',
    'Apache 2.0': '[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)',
    'BSD 3-Clause': '[![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)',
    'GPLv3': '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)',
    'ISC': '[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)',
    'Mozilla Public License 2.0': '[![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)',
};

// Questions for user
const questions = () => {

    return inquirer.prompt([
        {
            name: 'title',
            type: 'input',
            message: 'Project name?',
            validate: inputTitle => { return validateMandatoryDataInput(inputTitle, "Title") }
        },
        {
            name: 'description',
            type: 'input',
            message: 'description of your project?',
            validate: inputDescription => { return validateMandatoryDataInput(inputDescription, "Description") }
        },
        {
            name: 'installation',
            type: 'input',
            message: 'installation instructions?',
            default: 'npm i',
            validate: inputInstallation => { return validateMandatoryDataInput(inputInstallation, "Installation Instructions") }
        },
        {
            name: 'usage',
            type: 'input',
            message: 'describe the usefulness of the application?',
            validate: inputUsage => { return validateMandatoryDataInput(inputUsage, "Usefulness of the application") }
        },      
        {
            name: 'license',
            type: 'list',
            message: 'Select a license for your application',
            choices: licenseChoices,
            default: 'MIT',
            validate: inputLicense => { return validateMandatoryDataInput(inputLicense, "License Type") }
        },   
        {
            name: 'contributing',
            type: 'input',
            message: 'Add project participants?'
        },      
        {
            name: 'tests',
            type: 'input',
            message: 'What command should be run to run Tests?',
            default: 'npm test'
        },     
        {
            name: 'github_username',
            type: 'input',
            message: 'What is your GitHub Username?',
            validate: inputGitHubUserName => { return validateMandatoryDataInput(inputGitHubUserName, "GitHub Username") }
        },    
        {
            name: 'email_address',
            type: 'input',
            message: 'What is your Email Address?',
            validate: inputEmailAddress => { return validateMandatoryDataInput(inputEmailAddress, "Email Address") }
        },
    ]);
};

// function to write README file
function writeToFile(fileName, data) {
}

// function to initialize program
function init() {

}

// function call to initialize program
init();

console.log("HELLO");