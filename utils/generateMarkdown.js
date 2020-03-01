function generateMarkdown(response, git) {
  return `
![GitHub Logo](${git.data.avatar_url})
\n[Github: Bmonteve](${git.data.html_url})
\n${response.email}

# **${response.title}**

# Description
${response.description}

# Installation
${response.installation}

# Usage
${response.usage}

# Contributions
${response.contributing}

# Questions
${response.questioning}

# Testing
${response.tests}

# License
${response.license}
`;
}

module.exports = generateMarkdown;
