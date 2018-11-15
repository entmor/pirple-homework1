/**
 * chosenHandler - Promise
 *
 */

// Load Handlers and Router
const handlers  = require('./../../handlers');
const router    = require('./../../router');

// export module getPayload
module.exports = ( data ) => {

    // Data from prevoius Promise
    const req = data.req;
    const parsedData = data.parsedData;
    const payload = data.payload;

    // Create new Promise
    return new Promise( ( resolve, reject ) => {

        // Choose the handler this request should go to. If one is not not found, use the notFound handler
        const chosenHandler = typeof(router[parsedData.trimmedPath]) !== 'undefined' ? router[parsedData.trimmedPath] : handlers.notFound;

        // Route the request to the handler specified in the router
        chosenHandler( data, ( statusCode, payloadResponse ) => {

            // Use the status code called back by the the handler or default to 200
            statusCode = typeof(statusCode) === 'number' ? statusCode : 200;

            // Use the payload called back by the hander  or default to an empty object
            payloadResponse = typeof(payloadResponse) === "object" ? payloadResponse : {};

            // Convert the playload to a string
            const payloadResponseString = JSON.stringify(payloadResponse);

            // resolve req, parsedData, payload, statusCode and playload to next promise
            resolve( { req, parsedData, payload, statusCode, payloadResponseString });

        });


    });


};
