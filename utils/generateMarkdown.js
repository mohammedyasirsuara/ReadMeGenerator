// function to generate markdown for README
const generateMarkdown = (data) => {
  const temp = 
  `# ${data.title}
  ${data.license}

  ## Description
  ${data.description} 

  ## Table of Contents
  * [Installation](#Installation-Guide)

  * [Usage](#Usage)

  * [Contributing](#Contributing)

  * [Tests](#Tests)

  * [Questions](#Questions)

  * [License](#License)
  
  ## Installation-Guide
  ${data.install}

  ## Usage

  ## License

  ## Contributing
  ${data.contribute}

  ## Tests
  ${data.test}

  ## Questions
  Link to GitHub profile: https://github.com/${data.userName}

  For further questions, feel free to email me at: ${data.email}
  `;
  return temp;
}

module.exports = generateMarkdown;