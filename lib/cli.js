const inquirer = require('inquirer');
const { writeFile } = require('fs')


function promptUser() {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'text',
            message: 'Enter your text (maximum 3 characters)',
            validate: function (input) {
                if (input.length > 3) {
                    return 'Limit 3 characters';
                }
                return true;
            }
        },
        {
            type: 'input',
            name: 'textcolor',
            message: 'Enter a text color (or a hexadecimal number)',
        },
        {
            type: 'list',
            name: 'shape',
            message: 'Select a shape',
            choices: ['triangle', 'circle', 'square']
        },
        {
            type: 'input',
            name: 'shapecolor',
            message: 'Enter a shape color (or a hexadecimal number)',
        }
    ]);
}

function runCLI() {
    promptUser()
        .then(answers => {
            // Process the answers here
            console.log(answers);
            // You can add additional logic here to use the answers
            // for whatever you need, such as generating SVG shapes.
        })
        .catch(error => {
            console.error('An error occurred:', error);
        });
}

module.exports = runCLI;






