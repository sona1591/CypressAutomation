### Notes:

Before setting up the project, I have installed following:

step-1
node.js>>To execute java script code, we should have java script runtime environrnt in our system.and 
node.js is an open source,cross platform runtime environrnt which is useful for run our javascript code.
script code.
Node.js version >> v20.11.1
set the path in enviromontal variable so it can recognise globally for that follow these steps
1.copy the node.js path(c:\programfiles\node.js) 
2.create a new path as(NODE_HOME)and paste it here.
3.click on ok

step-2
-Installed visual studio(editor for java script)
- npm version  >> 10.2.4
-created folder with name CypressAutomation and inside it created package.json file
-now open our folder in our visual stidos so can start writing the script.

step-3
- Cypress >> installed via npm
-npm install cypress --save-dev(connecting to npm and give latest cypress version)
-cypress version entry got created in pakage.json("cypress": "^13.7.0")
-npm install(for Installing the dependencies)

step-4
-To run the tests using Cypress, follow these steps:

-Open Cypress Test Runner:node_modules/.bin/cypress open
-cypress dashboard will open>>select end to end testing module
-added configuration files to our project
-cypress folder got cread in visual studio

step-5 Inside Cypress folder>>created integration>> subfolder Assignment>>spec files inside this with .js extension

step-6 to know the location of spec files give the location into test runner file
-go to config file,in e2e section add this information: { 
    specPattern: 'cypress/integration/Assignment/*.js'
                        },
-now in cypress test runner we got our both spec files
                    
step-7
-install cypress-mochawesome-reporter
npm i --save-dev cypress-mochawesome-reporter

-For enabling the reportingand enabling the listeners integrated mochawsome reporting in config file
e2e: {
    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on);
    },

step-8
-register those event in the support e2e.js file
import 'cypress-mochawesome-reporter/register';
viewing report link
C:\Users\sonal.agrawal\CypressAutomation\cypress\reports\html\index.html
