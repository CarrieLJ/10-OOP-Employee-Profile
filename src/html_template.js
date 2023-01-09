function generateHtml(data) {
    return `# ${data.title}
    ${renderLicenseBadge(data.license)}
    ## Description:
    ${data.description}
    # Table of Contents
    -[installation](#installation)
    
    -[usage](#usage)
    -${renderLicenseLink(data.license)}
    -[contribution](#contribution)
    -[tests](#tests)
    -[questions](#questions)
  ## Installation:
    ${data.installation}
  ## Usage: 
    ${data.usage}
  ${renderLicenseSection(data.license)}
    ${data.license}
  ## Contribution:
    ${data.contribution}
  ## Tests:
    ${data.tests}
  ## Questions:
    GitHub Username and Link: ${data.questions}
    
    Email me with additional questions: ${data.email}
  `;
  }
  
  module.exports = generateHtml;