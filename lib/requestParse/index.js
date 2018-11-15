/**
 *  @description request parse - Promise
 */


// dependencies
const parseURL = require('url');

// export module requestParse
module.exports = ( req ) => {

    // Create new Promise
    return new Promise( ( resolve, reject ) => {

        // check req is object, or reject request
        if( typeof( req ) !== "object" ) reject( "error - req is not object" );

        // object parsedDate to return
        const parsedData = {};

        // Get the trimmedPath
        parsedData.trimmedPath = parseURL.parse( req.url, true ).pathname.replace(/^\/|\/+$/g,'');

        // Get the query string as an object
        parsedData.queryStringObject = parseURL.parse( req.url, true ).query;

        // Get the HTTP Method
        parsedData.method = req.method.toLowerCase();

        // Get the headers as an object
        parsedData.headers = req.headers;

        // resolve object req and parsedDate to next promise
        resolve({req, parsedData });

    });

};
