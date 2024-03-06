const inquirer = require('inquirer');
const { writeFile } = require('fs')
const { Circle, Square, Triangle } = require('./shapes')
const LogoText = require('./logotext')


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
            name: 'textColor',
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
            name: 'shapeColor',
            message: 'Enter a shape color (or a hexadecimal number)',
        }
    ]);
}

function runCLI() {
    promptUser()
        .then(answers => {
            const { text, textColor, shape, shapeColor } = answers

            let shapeInstance;
            switch (shape.toLowerCase()) {
                case 'circle':
                    shapeInstance = new Circle(shapeColor);
                    break;
                case 'square':
                    shapeInstance = new Square(shapeColor);
                    break;
                case 'triangle':
                    shapeInstance = new Triangle(shapeColor);
                    break;
                default:
                    console.log("unsupported shape!")
                    return
            }

            const logoLetters = new LogoText(text, textColor)
            shapeInstance.render();
            logoLetters.render();
            // console.dir(shapeInstance.render())
            // console.dir(logoLetters.render())

        })
        .catch(error => {
            console.error('An error occurred:', error);
        });
}

module.exports = runCLI;






