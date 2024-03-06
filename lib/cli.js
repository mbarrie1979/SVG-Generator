const inquirer = require('inquirer');
const { writeFile } = require('fs');
const { Circle, Square, Triangle } = require('./shapes');
const LogoText = require('./logotext');
const renderSVG = require('./renderSVG');
const path = require('path');

// function for inquirer prompts
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
            // deconstruct answers
            const { text, textColor, shape, shapeColor } = answers

            // switch statement to handle rendering color 
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

            }

            const logoLetters = new LogoText(text, textColor)
            // finsish rendering shape and shape to data
            const shapedata = shapeInstance.render();
            // rendering text and text color to data
            const textdata = logoLetters.render();
            // final render for svg file data
            const renderFileData = renderSVG(shapedata, textdata);
            // create file path
            const fileName = path.resolve(__dirname, '../examples/logo.svg');
            // write and pass in all data to create document
            writeFile(fileName, renderFileData, (err) =>
                err ? console.log(err) : console.log("SVG File written!"));


        })
        .catch(error => {
            console.error('An error occurred:', error);
        });
}

module.exports = runCLI;






