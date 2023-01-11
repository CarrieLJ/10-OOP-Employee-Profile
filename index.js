const inquirer = require('inquirer');
const src = require('./src/html_template');
const fs = require('fs');
const path = require('path');
const { nextTick } = require('process');

const questions = [
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
        name: 'number',
        message: 'Office number',
    },
    {
        //option to choose this or to finnish building my team
        type: 'list',
        name: 'continue',
        choices: ['Add an Engineer?', 'Add an Intern?', 'Finish and create.'],
        //if yes, go to title list to add engineer or intern
        //if no, 
        // Function call to initialize app
            // if N, return (init());
    },

        //when engineer chosen; prompted to add engineer's name, ID, email, & github username; then taken back to the menu
        //when intern chosen; prompted to enter intern's name, ID, email, and school; then taken back to the menu
    //add finish building team to generate HTML
]

// Create a function to write HTML page
function writeToFile(fileName, data) {
    return fs.writeFileSync(path.join(process.cwd(), fileName), data)
}

// Create a function to initialize app
function init() {
    inquirer.prompt(questions).then(inquireResponse => {
        writeToFile('html_template.html', src({...inquireResponse}))
    })
}

init ();
