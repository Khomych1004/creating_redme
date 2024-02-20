// function to generate markdown for README
const generateMarkdown = (data, getIcon) => {

  const {
    title,
    description,
    installation,
    usage,
    license,
    contributing,
    tests,
    github_username,
    email_address } = data;

  return `# ${title} 
   
${getIcon(license)}

## Description 
${description} 

## Table of Contents

* [Installations](#installations)

* [Usage](#usage)

* [License](#license)

* [Contributing](#contributing)

* [Tests](#tests)

* [Questions](#questions)

## Installation
${installation} 

## Usage
${usage} 

## License
This repository uses ${license} license.

## Contributing
${contributing}

## Tests
${tests}

## Questions

If you have any questions please contact me by email.

- GitHub Username: ${github_username}
- Email Address: ${email_address}
`};

export default generateMarkdown;