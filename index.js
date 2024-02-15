const fs = require("fs");
const path = require('path');
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

// array of questions for user
const questions = [
    {
       type: "input",
       name: "title",
       message: "What is the title of your project?"
    },
    {
       type: "input",
       name: "description",
       message: "What is the description of your project?",
    },
    {
       type: "input",
       name: "installation",
       message: "What are the steps required to install the application?"
    },
    {
       type: "input",
       name: "usage",
       message: "Please provide examples of your project's usage and explain how to use it.",
    },
    {
       type: "list",
       name: "license",
       message: "Choose a license for your project:",
       choices: ["MIT", "Apache 2.0", "GPL", "ISC", "None"]
    },
    {
       type: "input",
       name: "contributing",
       message: "How many users contributed to your project"
    },
    {
       type: "input",
       name: "test",
       message: "Does this project have any test instructions? Please provide an explanation of any tests",
    },
    {
      type: "input",
      name: "github",
      message: "What is your GitHub username?"
    },
    {
      type: "input",
      name: "email",
      message: "What is your email address?"
    }

];

// Function to write README file
function writeToFile(fileName, data) {
  const outputDir = path.join(__dirname, 'output');
  const outputFile = path.join(outputDir, fileName);

  // Create the 'output' directory if it doesn't exist
  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir);
  }

  // Write to the specified file
  fs.writeFileSync(outputFile, data);
  console.log(`${fileName} generated successfully at ${outputFile}`);
}

// Function to initialize program
async function init() {
  try {
    // Assuming questions is defined somewhere in your code
    const userInput = await inquirer.prompt(questions);
    
    // Generate markdown content based on user input
    const markdownContent = generateMarkdown(userInput);

    // Specify the output file name (e.g., README.md)
    const outputFileName = "README.md";

    // Write the generated markdown content to the output file
    writeToFile(outputFileName, markdownContent);
  } catch (error) {
    console.error("An error occurred:", error);
  }
}

// Call the init function to start the program
init();

