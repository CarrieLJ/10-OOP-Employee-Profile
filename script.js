const inquirer = require('inquirer');
const src = require('./src');

const employeeInfo = [
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
        name: 'title',
        choices: ['Engineer', 'Intern'],
        //when engineer chosen; prompted to add engineer's name, ID, email, & github username; then taken back to the menu
        //when intern chosen; prompted to enter intern's name, ID, email, and school; then taken back to the menu
    },
    //add finish building team to generate HTML
]