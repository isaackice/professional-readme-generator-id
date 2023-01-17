//global variables
let badgeLink;
let licenseLink;
// TODO: Create a function that returns a license badge based on which license is passed in
function renderLicenseBadge(hello) {
  if (hello.license == "MIT") {
    badgeLink = `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`
  } else if (hello.license == "APACHE 2.0") {
    badgeLink = `[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`
  } else if (hello.license == "GPL 3.0") {
    badgeLink = `[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)`
  } else if (hello.license == "BSD 3") {
    badgeLink = `[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)`
  } else {
    badgeLink = ""
    return
  }
  return badgeLink
}

// TODO: Create a function that returns the license link
function renderLicenseLink(hello) {
  if (hello.license == "MIT") {
    licenseLink = "https://www.mit.edu/~amini/LICENSE.md"
  } else if (hello.license == "APACHE 2.0") {
    licenseLink = "https://www.apache.org/licenses/LICENSE-2.0"
  } else if (hello.license == "GPL 3.0") {
    licenseLink = "https://www.gnu.org/licenses/gpl-3.0.en.html"
  } else if (hello.license == "BSD 3") {
    licenseLink = "https://en.wikipedia.org/wiki/BSD_licenses"
  } else {
    return
  }
  return licenseLink
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
function generateMarkdown(data) {

  renderLicenseBadge(data);
  renderLicenseLink(data);

  const readmeInfo =
    ` ${badgeLink}
  
  # ${data.title}
  
  ## Description
  
  ${data.description}
  
  ## Table of Contents
  
  * [Installation](#installation)
  * [Usage](#usage)
  * [Credits](#credits)
  * [License](#license)
  * [How to Contribute](#how-to-contribute)
  * [Test](#tests)
  * [Questions](#questions)
  
  ## Installation
  
  ${data.installation}
  
  ## Usage
  
  ${data.usage}
  
  ## Credits
  
  ${data.credits}
  
  ## License
  
  ${data.license}
  ${licenseLink}
  
  ## How to Contribute
  
  ${data.contribute}
  
  ## Tests
  
  For a test run, use the "${data.test}" command to run a test.
  ## Questions
  You can look at my GitHub profile (https://github.com/${data.username}) or email me at ${data.email}.`

  return readmeInfo;
}

module.exports = generateMarkdown;