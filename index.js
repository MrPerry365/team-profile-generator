const inquirer = require("inquirer");

// use fs.writeFile() or fs.appendFile() ...?
const fs = require("fs");
const path = require("path");

const Employee = require("./lib/Employee.js");
const Engineer = require("./lib/Engineer.js");
const Intern = require("./lib/Intern.js");
const Manager = require("./lib/Manager.js");
const { create } = require("domain");
const { info } = require("console");
const team = [];



const main = async () => {
  //start here
  employeePrompt("Manager");

}

async function enterAnother() {
  var doCreate = false;
 return inquirer.prompt([
  //prompt for entering another team member.  prompt for info if so, display cards if name_prompt
  {
    type: "list",
    name: "createAnotherVal",
    choices: ["Engineer", "Intern", "No"], 
    message: "Add another team member? (Engineer, Intern, No)",
    validate: (createAnotherVal_added) => {
      if(createAnotherVal_added) {
        return true;
      } else {
        console.log("Please choose whether to create another team member or not");
        return false;
      }
    },
  },
 ]).then(answers => {
    if(answers.createAnotherVal === "Engineer") {
      employeePrompt("Engineer");
      doCreate = true;
    } else if(answers.createAnotherVal === "Intern") {
      employeePrompt("Intern");
      doCreate = true;
    } else {  // 'No' option - do not create more employees, create HTML file displaying team info
      console.log(team);
      //display to cards
      var writeString = "";
      for(let i = 0; i < team.length; i++) {
        // $("#card-list").append(team[i].writeEmployeeCard());
       writeString += team[i].writeEmployeeCard();
      }
      writeString = "<html><body>" + writeString + "</body></html>"; 
      console.log(writeString);
      fs.writeFile("team.html", writeString, function(err) {
        if(err) {
          return console.log(err);
        }
        console.log("test.output successfully written to project directory");
      } )
    } 
 });
}

async function employeePrompt(role) {
  // console.log(team);
  return inquirer
    .prompt([
      // prompt for the team employees name //
      {
        type: "input",
        name: "name_prompt",
        message: "What is the name of the team employee?",
        validate: (nameAdded) => {
          if (nameAdded) {
            return true;
          } else {
            console.log("Please add a name to the team employee prompt!");
            return false;
          }
        },
      },
      // prompt for a team employee id //
      {
        type: "input",
        name: "id_prompt",
        message: "What is the id of the team employee?",
        validate: (idAdded) => {
          if (idAdded) {
            return true;
          } else {
            console.log("Please add an id to the employee prompt!");
            return false;
          }
        },
      },
      // prompt for the employee email //
      {
        type: "input",
        name: "email_prompt",
        message: "What is the email of the team employee?",
        validate: (emailAdded) => {
          if (emailAdded) {
            return true;
          } else {
            console.log("Please add an email to the employee prompt!");
            return false;
          }
        },
      },
    ])
    .then((answers) => {
      //console.log("Employee: " + answers.name_prompt + ", id: " + answers.id_prompt + ", email = " + answers.email_prompt);
      if (role === "Manager") {
      managerPrompt(
          answers.name_prompt,
          answers.id_prompt,
          answers.email_prompt
        );
      } else if (role === "Intern") {
       internPrompt(
          answers.name_prompt,
          answers.id_prompt,
          answers.email_prompt
        );
      } else if (role === "Engineer") {
       engineerPrompt(
          answers.name_prompt,
          answers.id_prompt,
          answers.email_prompt
        );
      }
    });
}

 function managerPrompt(name, id, email) {
  return inquirer
    .prompt([
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
    .then((answers) => {
      //console.log(answers);
      const teamManager = new Manager(
        name,
        id,
        email,
        answers.officeNumber_prompt
      );
      team.push(teamManager);
      enterAnother();
    });
}

async function internPrompt(name, id, email) {
  return inquirer
    .prompt([
      {
        type: "input",
        name: "school_prompt",
        message: "What school does the intern attend?",
        validate: (school_added) => {
          if (school_added) {
            return true;
          } else {
            console.log("Please enter the intern's school!");
            return false;
          }
        },
      },

      // use the answers to create a team manager //
    ])
    .then((answers) => {
      console.log(answers);
      team.push(new Intern(name, id, email, answers.school_prompt));
      enterAnother();
    });
}

async function engineerPrompt(name, id, email) {
  return inquirer
    .prompt([
      {
        type: "input",
        name: "github_prompt",
        message: "What is the engineer's Github account?",
        validate: (github_added) => {
          if (github_added) {
            return true;
          } else {
            console.log("Please add an Github account!");
            return false;
          }
        },
      },

      // use the answers to create a team manager //
    ])
    .then((answers) => {
      console.log(answers);
      team.push(new Engineer(name, id, email, answers.github_prompt));
      enterAnother();
    });
}

main();






