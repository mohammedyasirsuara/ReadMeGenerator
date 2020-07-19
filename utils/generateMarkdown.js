// function to generate markdown for README
const generateMarkdown = (data) => {
  let badge
  if(data.license=='MIT'){
    badge = 'https://img.shields.io/apm/l/vim-mode'
  }else if(data.license =='Apache'){
    badge = 'https://img.shields.io/aur/license/android-studio'
  }else if(data.license =='Mozilla'){
    badge = 'https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg'
  }else{
    badge = 'https://img.shields.io/badge/License-Perl-0298c3.svg'
  }

  const temp = 
  `# ${data.title}
  \n![licenseBadge](${badge})
  \n## Description
  \n${data.description} 
  \n## Table of Contents
  \n* [Installation](#Installation-Guide)
  \n* [Usage](#Usage)
  \n* [Contributing](#Contributing)
  \n* [Tests](#Tests)
  \n* [Questions](#Questions)
  \n* [License](#License)
  \n## Installation-Guide
  \n${data.install}
  \n## Usage
  \n${data.usage}
  \n## License
  \nLicense under ${data.license}
  \n## Contributing
  \n${data.contribute}
  \n## Tests
  \n${data.test}
  \n ## Questions
  \nLink to GitHub profile: https://github.com/${data.userName}
  \nFor further questions, feel free to email me at: ${data.email}
  `;
  return temp;
}

module.exports = generateMarkdown;