const inquirer = require('inquirer');
const src = require('./src/html_template');
const fs = require('fs');
const path = require('path');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const dirPath = path.resolve(__dirname, 'dist');
const filePath = path.join(dirPath, 'index.html');
const employeeArray = [];



function createManager () {
    inquirer.prompt [
    {
        type: 'input',
        name: 'name',
        message: 'Team managers name',
    },
    {
        type: 'input',
        name: 'id',
        message: 'Employee ID',
    },
    {
        type: 'input',
        name: 'email',
        message: 'email address',
    },
    {
        type: 'input',
        name: 'officeNumber',
        message: 'Office number',
    }]
    .then( (answers) => {
        const manager = new Manager(
            answers.name,
            answers.id,
            answers.email,
            answers.officeNumber
        );
        employeeArray.push(manager);
    createTeam ();
    });

    function createTeam() {
        inquirer.prompt([{
            type: 'list',
            name: 'teamMember',
            message: 'Do you want to add an Engineer, Intern, or are you done?',
            choices: ['Engineer', 'Intern', 'Complete'],
        }

        ])
        .then((userChoice) => {
            switch (userChoice.teamMember) {
                case 'Engineer': 
                    engineerQuestions();
                    break;
                case 'Intern':
                    internQuestions();
                    break;            
                default:
                    buildTeam();
            }
        })
    }

const engineerQuestions = [
    {
        type: 'input',
        name: 'name',
        message: 'Engineer name',
    },
    {
        type: 'input',
        name: 'id',
        message: 'Employee ID',
    },
    {
        type: 'input',
        name: 'email',
        message: 'email address',
    },
    {
        type: 'input',
        name: 'githublink',
        message: 'Enter GitHub link.',
    },
    {
    type: 'input',
    name: 'username',
    message: 'Enter GitHub username.',
    },
]

const internQuestions = [
    {
        type: 'input',
        name: 'name',
        message: 'Intern name',
    },
    {
        type: 'input',
        name: 'id',
        message: 'Employee ID',
    },
    {
        type: 'input',
        name: 'email',
        message: 'email address',
    },
    {
        type: 'input',
        name: 'school',
        message: 'Name of School',
    },
]


// Create a function to initialize app
function buildTeam() {
    // inquirer.prompt(questions).then(inquireResponse => {
        fs.writeToSync(filePath, src(employeeArray), 'utf8');
}
