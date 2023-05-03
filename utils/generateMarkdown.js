// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  switch(license.toLowerCase()) {
    case "mit":
      license = "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";
      break;
    case "bsd":
      license = "[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)";
      break;
    case "boost":
      license = "[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)";
      break;
        
    default:
      return "";
    
  }
  return license;
}
console.log(renderLicenseBadge(""))
// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  data.license = renderLicenseBadge(data.license);
  return `
  ${data.license}

  # ${data.title}
  
  # Description
  ${data.description} 

  # Table of Contents
  - [Questions](#questions)
  - [Installation](#installation)
  - [Usage](#usage)
  - [Contributing](#contributing)
  - [Tests](#tests)
  
  # Installation
  ${data.installation}
  # Usage
  ${data.usage}
  
   
  # Contributing
  ${data.contributing}
  # Tests 
  ${data.tests}
  
  # Questions
  - ${data.email}
  - [${data.github}](${data.github})
   
  `
}

module.exports = generateMarkdown;
