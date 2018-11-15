/**
 *  @description Config file
 */

// dependencies
const fs = require('fs');

// HTTPS config
module.exports.httpsServerOptions = {
    'key'  : fs.readFileSync( './https/key.pem'),
    'cert' : fs.readFileSync( './https/cert.pem')
};


// Container for all the enviroments
module.exports.environments = {
    'staging' : {
        'envName' : 'staging',
        'httpPort' : 3000,
        'httpsPort' : 3001
    },
    'production' : {
        'envName' : 'production',
        'httpPort' : 5000,
        'httpsPort' : 5001
    }
};