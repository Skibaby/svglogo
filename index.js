//
const fs = require('fs');
//
const inquirer = require('inquirer');

const prompt = inquirer.createPromptModule();
//
// const {renderLogo} = require('./.git')

const questions = [
  {
    message: "Enter text",
    type: "input",
    name: "text",
    default: "SVG",
    validation: (answer) => {
      if(answer.length > 0 && answer.length < 4) {
        return false
      } else {
        return true
      }
    }
  },
  {
    message: "Enter a text color",
    name: "textColor",
    type: "input",
    default: "blue"
  
  }
];

function makeLogo(answer) {
  console.log("working")
}

function init () {

  prompt(questions)
  .then(makeLogo)
  
}

init()