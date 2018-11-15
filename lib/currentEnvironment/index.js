/**
 *  @description Check that the current enviroment
 */


// Load environments config
const environmentsConfig = require('../../config').environments;

// Detwermine which environment was passed as a command-line argument
const currentEnvironmet = typeof(process.env.NODE_ENV) === 'string' ? process.env.NODE_ENV.toLowerCase() : '' ;

//check that the current enviroment is one of the environments aboce, if not, default to staging
const environmentToExport = typeof(environmentsConfig[currentEnvironmet]) === 'object' ? environmentsConfig[currentEnvironmet] : environmentsConfig.staging ;


// Export the module
module.exports = environmentToExport;