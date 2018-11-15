/**
 *  @description Router File
 */

// Load Handlers
const handlers = require('./handlers');

// Define a request router and export
module.exports = {
    hello : handlers.hello
};

