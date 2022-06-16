const inquirer = require('inquirer');

// use fs.writeFile() or fs.appendFile() ...?
const fs = require('fs');

const Employee = require("../lib/Employee.js");
const Engineer = require("../lib/Engineer.js");
const Intern = require("../lib/Intern.js");
const Manager = require("../lib/Manager.js");

function initialPrompt() {
return inquirer
.prompt ([
    {
        type: 'input',
        name: 'name_prompt',
        message:'What is the name of the employee?',
        validate: nameAdded => {
            if (nameAdded) {
                return true;}
                else {console.log ('Please add a name to the employee prompt!');
            return false;
        }    
        }
    },
    
    {
        type: 'input',
        name: 'id_prompt',
        message:'What is the id of the employee?',
        validate: idAdded => {
            if (idAdded) {
                return true;}
                else {console.log ('Please add an id to the employee prompt!');
            return false;
        }    
        }
    },

    {
        type: 'input',
        name: 'email_prompt',
        message:'What is the email of the employee?',
        validate: emailAdded => {
            if (emailAdded) {
                return true;}
                else {console.log ('Please add an email to the employee prompt!');
            return false;
        }    
        }
    },
])
}