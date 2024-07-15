const { defineConfig } = require("cypress");
//const Preprocessor = require("@badeball/cypress-cucumber-preprocessor");
//const browserify = require("@badeball/cypress-cucumber-preprocessor/browserify");

//async function setupNodeEvents(on, config) {
  // This is required for the preprocessor to be able to generate JSON reports after each run, and more,
  //await preprocessor.addCucumberPreprocessorPlugin(on, config);

  //on("file:preprocessor", browserify.default(config));

  // Make sure to return the config object as it might have been modified by the plugin.
 // return config;
//}

module.exports = defineConfig({

  defaultCommandTimeout: 6000,
  env: {
    url: "https://dev-fe.buttonshift.com/"
   },
  reporter: 'cypress-mochawesome-reporter',
 e2e: {
    setupNodeEvents(on,config)
    {
      require('cypress-mochawesome-reporter/plugin')(on);
    },
    
    specPattern: 'cypress/integration/Assignment/*.js'
                //'cypress/integration/examples/BDD/*.feature'
                  
  },
});
    //   // implement node event listeners here
    //   require('cypress-mochawesome-reporter/plugin')(on);
     
    
