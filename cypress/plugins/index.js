/// <reference types="cypress" />
// ***********************************************************
// This example plugins/index.js can be used to load plugins
//
// You can change the location of this file or turn off loading
// the plugins file with the 'pluginsFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/plugins-guide
// ***********************************************************

// This function is called when a project is opened or re-opened (e.g. due to
// the project's config changing)

/**
 * @type {Cypress.PluginConfig}
 */



module.exports = (on, config) => {
  // `on` is used to hook into various events Cypress emits
  // `config` is the resolved Cypress config
}
module.exports = (on) => {
  require('cypress-terminal-report/src/installLogsPrinter')(on);
};

let current_datetime = new Date()
var file_prefix = __dirname + "../" + "../"  + "logs" + "/"
var logFileName = "combined_" + current_datetime.getFullYear() + "-" + (current_datetime.getMonth() + 1) + "-" 
              + current_datetime.getDate() + "_" + ("0" + current_datetime.getHours()).slice(-2)  + ("0" +  current_datetime.getMinutes()).slice(-2) 
              + ("0" + current_datetime.getSeconds()).slice(-2) + ".log"
const logFile = file_prefix  + logFileName
const winston = require('winston');
const logger = winston.createLogger({
  level: 'info',
  format: winston.format.combine(
    winston.format.timestamp({ format: 'YYYY/MM/DD HH:mm:ss' }),
    winston.format.printf(info => `[${info.timestamp}] ${info.level}: ${info.message}`)
  ),
  transports: [new winston.transports.File({filename: logFile })]
}) 


const cucumber = require('cypress-cucumber-preprocessor').default

module.exports = (on, config) => { 
  on('file:preprocessor', cucumber());
  const options = {
    //compactLogs: 1,
    outputRoot: file_prefix,
    outputTarget: {
      'browser.log': 'txt',
      'out.json': 'json',
    },
    

  };

  require('cypress-terminal-report/src/installLogsPrinter')(on, options);

  on('task', {
    log(message1) {
      logger.log({
        level: 'info',
        message: message1,
        'timestamp':true
      });
      return null
    }
  })
  on('task', {
    err(message1) {
      logger.log({
        level: 'error',
        message: message1,
        'timestamp':true
      });
      return null
    }
  })
}

//-----------------------------------





//log.info('subscription to ', channel, ' accepted at ', new Date().toJSON())
