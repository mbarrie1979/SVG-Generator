const inquirer = require('inquirer');
const { writeFile } = require('fs')


class CLI {
    constructor() {

    }
    run() {
        return inquirer
            .prompt([
                {
                    type: 'input',
                    name: 'name',
                    message: 'Please enter your name',
                    validate: function (input) {
                        // Check if the input length is greater than 3
                        if (input.length > 3) {
                            return 'Limit 3 characters';
                        }
                        // Return true if the validation is passed
                        return true;
                    },
                },
            ]);
    }
}


// inquirer
// .promise([])






module.exports = CLI;