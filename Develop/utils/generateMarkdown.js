// TODO: Create a function that returns a license badge based on which license is passed in
const { default: Choices } = require("inquirer/lib/objects/choices");
// If there is no license, return an empty string
function renderLicenseBadge(license) { 
  if (license === "apache") {
  return `[![Apache](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`
} else if (license === "gnu") {
  return `[![GNU](https://img.shields.io/badge/License-GPL%20v3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)`
} else if (license === "mit") {
  return `[![MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`
}
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license === "apache") {
  return `https://opensource.org/licenses/Apache-2.0`
} else if (license === "gnu") {
  return `https://www.gnu.org/licenses/gpl-3.0`
} else if (license === "mit") {
  return `https://opensource.org/licenses/MIT`
} else if (license === "none") {
  return "";
}
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license === "none") {
  return "";
} else {
  return `## License
  The license used was ${license}`
}
}

// TODO: Create a function to generate markdown for README
function generateMarkdown({ title, description, toc, install, usage, credits, test, license }) {
  return `${renderLicenseSection(license)}
  ${renderLicenseBadge(license)}
  # Title
  
  The title of my application is ${title}.
  
  ## Description
  
  ${description}
  
  ## Table of Contents:
 
  ${toc}
  
  ## Installation
  
  Please follow these instructions for installation: ${install}
  
  ## Usage
  
  Here is the application link: ${usage}
 
  ## Credits
  
  As a project coordinater, I was able to contribute by ${credits}
  
  ## Test
  
  To run and test the application please follow these instructions: ${test}
  
`;
}

module.exports = generateMarkdown;
