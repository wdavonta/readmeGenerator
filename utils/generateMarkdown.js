// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
// license bages cited from https://gist.github.com/lukas-h/2a5d00690736b4c3a7ba
function renderLicenseBadge(license) {

  if (license = 'MIT') {
    return '',

    ![MIT]('https://img.shields.io/badge/License-MIT-yellow.svg')
    
  } else if (license = 'GNU') {
    
    return '',
    ![GNU]('https://img.shields.io/badge/License-GPLv3-blue.svg')

  } else if (license = 'IBM') {
    
    return '',
  
    ![IBM] ('https://img.shields.io/badge/License-IPL%201.0-blue.svg')

  } else if(license = 'Apache 2.0') {

    return '',

    ![Apache] ('https://img.shields.io/badge/License-Apache%202.0-blue.svg')

  } else if (license = 'SIL') {

    return '',

    ![SIL] ('https://img.shields.io/badge/License-OFL%201.1-lightgreen.svg')
  
  
  } else {

    return '';
    
  }  




// TODO: Create a function that returns the license link
// If there is no license, return an empty string
// license link reference/cited from https://gist.github.com/lukas-h/2a5d00690736b4c3a7ba
function renderLicenseLink(license) {
if (license = 'MIT') {
  return '',

  [MIT]('https://opensource.org/licenses/MIT')

} else if (license = 'GNU') {
  
  return '',

  [GNU] ('https://www.gnu.org/licenses/gpl-3.0')

} else if (license = 'IBM') {
  
  return '',

  [IBM] ('https://opensource.org/licenses/IPL-1.0')

} else if(license = 'Apache 2.0') {

  return '',

  ![Apache] ('https://opensource.org/licenses/Apache-2.0')

} else if (license = 'SIL') {

  return '',

  [SIL] ('https://opensource.org/licenses/OFL-1.1')


} else {

  return ''
}


// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {

  if (license = '') {
    return '';
}








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
