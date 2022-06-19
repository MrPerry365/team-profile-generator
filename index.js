const inquirer = require("inquirer");

// use fs.writeFile() or fs.appendFile() ...?
const fs = require("fs");
const path = require("path");

const Employee = require("../lib/Employee.js");
const Engineer = require("../lib/Engineer.js");
const Intern = require("../lib/Intern.js");
const Manager = require("../lib/Manager.js");



function managerPrompt() {
  return inquirer.prompt([
    // prompt for the team managers name //
    {
      type: "input",
      name: "name_prompt",
      message: "What is the name of the team Manager?",
      validate: (nameAdded) => {
        if (nameAdded) {
          return true;
        } else {
          console.log("Please add a name to the team manager prompt!");
          return false;
        }
      },
    },
    // prompt for a team manager id //
    {
      type: "input",
      name: "id_prompt",
      message: "What is the id of the team manager?",
      validate: (idAdded) => {
        if (idAdded) {
          return true;
        } else {
          console.log("Please add an id to the manager prompt!");
          return false;
        }
      },
    },
    // prompt for the manager email //
    {
      type: "input",
      name: "email_prompt",
      message: "What is the email of the team manager?",
      validate: (emailAdded) => {
        if (emailAdded) {
          return true;
        } else {
          console.log("Please add an email to the manager prompt!");
          return false;
        }
      },
    },
    // prompt for manager office number //
    {
      type: "input",
      name: "officeNumber_prompt",
      message: "What is the office number of the team manager?",
      validate: (officeNumberAdded) => {
        if (officeNumberAdded) {
          return true;
        } else {
          console.log("Please add an office number to the manager prompt!");
          return false;
        }
      },
    },

    // use the answers to create a team manager //

  ])
  .then (answers => {
    console.log (answers);
    const teamManager = new Manager(answers.nameAdded, answers.idAdded, answers.emailAdded, answers.officeNumberAdded);
    team.push(teamManager);
    appMenu();
  })
}

// create a create a team function that prompts for the type of team member and then to get their information // 

createTeamMember () {
  inquirer.prompt([

    {
      type: 'list',
      name: ' teamMemberType',
      message: 'What type of team member would you like to create?',
      choices: ['intern', 'engineer',]
    }
    

  ])
  .then(teamMember => {
    switch (teamMember.teamMemberType) {
     
      case 'intern': addIntern()
      break;
      case 'engineer': addEngineer();
      break;
    }
  });

}

addIntern() 
inquirer.prompt([
{
  type: 'input',
  name: 'internName',
  message: ' What is the name of the intern?',
  validate: answer => { if (answer !== "") { return true;}
  else { return "please enter a name";
  }
},
])

{
  type: 'input',
  name: 'internSchool',
  message: 'What is the name of the school for this intern?',
  validate: answer => { if (answer !== "") {return true;}
else {
   return "please enter a school!";}
}
}



managerPrompt();