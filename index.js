const inquirer = require("inquirer");
const fs = require("fs");
const generateTeam = require("./index.js");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Manager = require("./lib/Manager");

let newStaffMemberData = [];

let questions = async () => {
  let answers = await inquirer.prompt([
    {
      type: "input",
      message: "Please enter your name.",
      name: "name",
    },
    {
      type: "input",
      message: "Please enter your ID #.",
      name: "id",
    },
    {
      type: "input",
      message: "Please enter your email.",
      name: "email",
    },
    {
      type: "list",
      message: "Please enter your job title.",
      name: "title",
      choices: ["Engineer", "Intern", "Manager"],
    },
  ]);

  if (answers.role === "Manager") {
    let managerAnswer = await inquirer.prompt([
      {
        type: "input",
        message: "Please enter your office number.",
        name: "officeNumber",
      },
    ]);
    let newManager = new Manager(
      answers.name,
      answers.id,
      answers.email,
      managerAnswer.officeNumber
    );
    newStaffMemberData.push(newManager);
  } else if (answers.role === "Engineer") {
    let githubAnswer = await inquirer.prompt([
      {
        type: "input",
        message: "Please enter your Github user name.",
        name: "github",
      },
    ]);
    let newEngineer = new Engineer(
      answers.name,
      answers.id,
      answers.email,
      githubAnswer.github
    );
    newStaffMemberData.push(newEngineer);
  } else if (answers.role === "Intern") {
    let internAnswer = await inquirer.prompt([
      {
        type: "input",
        message: "Please enter the name of the university you attended.",
        name: "university",
      },
    ]);

    let newIntern = new Intern(
      answers.name,
      answers.id,
      answers.email,
      internAnswer.school
    );
    newStaffMemberData.push(newIntern);
  }
};

async function promptQuestions() {
  await questions();

  let addMemberAnswer = await inquirer.prompt([
    {
      name: "addMember",
      type: "list",
      choices: ["Add member", "Create team"],
      message: "What do you want to do next?",
    },
  ]);

  if (addMemberAnswer.addMember === "Add a new member") {
    return promptQuestions();
  }
  return createTeam();
}

promptQuestions();

function createTeam() {
  console.log("new member", newStaffMemberData);
  fs.writeFileSync(
    "./dist/index.html"






    
  );
}
