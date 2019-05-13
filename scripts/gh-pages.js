const ghpages = require('gh-pages');
const path = require('path');
const chalk = require('chalk');

// Pathes
const PublicPath = path.resolve(__dirname, '../public');
const OrganizationName = `tokyo-afterschool-summoners`;
const RepositoryURL = process.env.GH_TOKEN
  ? `https://${
      process.env.GH_TOKEN
    }@github.com/${OrganizationName}/${OrganizationName}.github.io.git`
  : `https://github.com/${OrganizationName}/${OrganizationName}.github.io.git`;

// Deploy
console.log(
  chalk.hex('#1890FF')(`[Deploy] Start to deploy ${OrganizationName} site!`)
);
ghpages.publish(
  PublicPath,
  {
    branch: 'master',
    repo: RepositoryURL,
    // silent: true,
    message: `Auto-generated Commit! ${new Date().toLocaleString()}`
  },
  () => {
    console.log(
      chalk.hex('#1890FF')(`[Deploy] ${OrganizationName} site deployed!`)
    );
  }
);
