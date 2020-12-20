// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  

[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)]
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  # Table of Content
  -[desctiption](#description)
  -[installation](#installation)
  -[usage](#usage)
  -[license](#license)
  -[contributing](#contributing)
  -[test](#test)
  -[github](#github)
  -[email](#email)

    ${data.description}
  ##:description

    ${data.installation}
  ##:insallation

    ${data.usage}
  ##:usage

    ${data.license}
  ##:license

    ${data.contributing}
  ##:contributing
  
    ${data.test}
  ##:test

    ${data.github}
  ##:github

    ${data.email}
  ##:email



`;
}

module.exports = generateMarkdown;