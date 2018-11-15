/**
 *  @description Handlers File
 */

// Define the handlers
const handlers = {};

// Hello handler
handlers.hello = ( data, callback ) => {
    callback( 200, { 'msg' : "welcome and thank you"});
};

// Not found handler
handlers.notFound = ( data, callback ) => {
    callback( 404, { 'msg' : "error - 404"} );
};

module.exports = handlers;