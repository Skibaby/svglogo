//
const fs = require('fs');
//
const inquirer = require('inquirer');

const prompt = inquirer.createPromptModule();

const shapes = require('./lib/shapes.js');

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
    message: "Enter color",
    name: "color",
    type: "input",
    default: "blue"
  
  },
  {
    message: "Choose your preferred shape",
    name: "shape",
    type: "rawlist",
    choices: ["Triangle","Square","Circle"]


  }
];

const makeLogo = (answer) => {
  const shape = new shapes[answer.shape]();
  shape.setColor(answer.color);
  shape.setText(answer.text);
  console.log(shape.render());
  fs.writeFileSync('image.svg', shape.render(), 'utf-8');
  console.log('RENDERED');
}
const init = () => prompt(questions).then(makeLogo);

init();