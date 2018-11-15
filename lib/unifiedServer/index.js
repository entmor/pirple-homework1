/**
 *  @description All the server logic
 */

// lib
const requestParse      =   require('../requestParse');
const getPayload        =   require('../getPayload');
const chosenHandler     =   require('../chosenHandler');

// export module
module.exports = ( request, response ) => {

    // request parse
    requestParse( request )
        // Get the payload, if any
        .then(getPayload)
        // Choose the handler this request should go to.
        .then(chosenHandler)
        .then( ( data ) => {

            // return the Response
            response.setHeader('Content-Type', 'application/json');
            response.writeHead( data.statusCode );
            response.end( data.payloadResponseString );

        })
        // Catch error, if exist
        .catch( ( error ) => response.end( error ) );

};
