# Object Oriented Programming SVG Logo Maker

## Description
This application enables to add input into a inquirer prompt that creates a svg.logo file which is the file that will show users their desired logo.

Uses the Inquirer packageLinks to an external site..

Uses the Jest packageLinks to an external site. for a suite of unit tests.

The application must have Triangle, Square, and Circle classes.


## UserStory
```
AS a freelance web developer
I WANT to generate a simple logo for my projects
SO THAT I don't have to pay a graphic designer
```

## Acceptance Criteria
```
GIVEN a command-line application that accepts user input
WHEN I am prompted for text
THEN I can enter up to three characters
WHEN I am prompted for the text color
THEN I can enter a color keyword (OR a hexadecimal number)
WHEN I am prompted for a shape
THEN I am presented with a list of shapes to choose from: circle, triangle, and square
WHEN I am prompted for the shape's color
THEN I can enter a color keyword (OR a hexadecimal number)
WHEN I have entered input for all the prompts
THEN an SVG file is created named `logo.svg`
AND the output text "Generated logo.svg" is printed in the command line
WHEN I open the `logo.svg` file in a browser
THEN I am shown a 300x200 pixel image that matches the criteria I entered
```

## Usage Instructions

1. Open the cloned repository in any source code editor 
2. Open integrated terminal on index.js
3. Enter “node index.js” in the command line
4. The user will be presented with npm inquirer questions - the user will provide a response to each question and proceed.
5.Once completed a SVG file named "logo.svg" will be created.
(the user may rename the "logo.svg" file to the file name of preference)

## Installation Process

1. Clone the repository: ***
2. Install the following:
    -Node.JS Version 18.17.0
    -Jest Version 29.4.3
    -Inquirer.js: Version 29.6.1
3. Open the cloned repository in any source code editor.
4. Open the integrated terminal for the document and complete the respective installation guides provided above in section (2.) to ensure the cloned documentation will operate.