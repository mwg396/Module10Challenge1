const inquirer = require("inquirer");
const fs = require("fs");
const {Triangle, Circle, Square} = require("./lib/shapes.js");

class Svg{
    constructor(){
        this.textElement = ''
        this.shapeElement = ''
    }
    render(){

        return `<svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="300" height="200">${this.shapeElement}${this.textElement}</svg>`
    }
    setTextElement(text,color){
        this.textElement = `<text x="150" y="125" font-size="60" text-anchor="middle" fill="${color}">${text}</text>`
    }
    setShapeElement(shape){
        this.shapeElement = shape.render()

    }
    
}

const questions = [
    {
      type: 'list',
      name: 'color',
      message: 'Select a color:',
      choices: ['red', 'blue', 'green']
    },
    {
      type: 'list',
      name: 'shape',
      message: 'Select a shape:',
      choices: ['circle', 'square', 'triangle']
    },
    {
      type: 'input',
      name: 'text',
      message: 'Enter the text for the logo:'
    }
  ];

  inquirer.prompt(questions)
  .then(answers => {

    console.log(answers);
  })
  .catch(error => {
    console.error(error);
  });




function writeSVGToFile(svgData, fileName) {
    fs.writeFile(fileName, svgData, (err) => {
      if (err) {
        console.error('Error writing SVG file:', err);
      } else {
        console.log('SVG file saved successfully!');
      }
    });
  }
  prompt();
  writeSVGToFile();


