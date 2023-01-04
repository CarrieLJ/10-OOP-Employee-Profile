const { getSystemErrorName } = require("util");

Employee (name, id, email) {
    this.name = name;
    this.id = id;
    this.email = email;
}

getName() {
    return this.name;
}
getId() {
    return this.id;
}
getEmail() {
    return this.email;
}
getRole() {
    return Employee;
}

module.exports = Employee;

// TODO: Create a function to generate HTML
// function writeToFile(fileName, data) {
//     return fs.writeFileSync(path.join(process.cwd(), fileName), data)
// }

// TODO: Create a function to initialize app
// function init() {
//     inquirer.prompt(questions).then(inquireResponse => {
//         writeToFile('README.md', markdown({...inquireResponse}))
//     })
// }

// Function call to initialize app
// init();