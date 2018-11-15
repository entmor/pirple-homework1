/**
 * @description get payload - Promise
 */


// dependencies
const {StringDecoder}   =   require('string_decoder');

// export module getPayload
module.exports = ( data ) => {

    // Data from prevoius Promise
    const req = data.req;
    const parsedData = data.parsedData;

    // Create new Promise
    return new Promise( ( resolve, reject ) => {

        // Get the payload, if any
        let payload = '';
        const decoder = new StringDecoder('utf-8');

        req.on('data', ( data ) => payload += decoder.write(data) );

        req.on('end',  ( ) => {
            payload += decoder.end();

            // resolve object req, parsedDate and payload to next promise
            resolve({req, parsedData, payload});
        });


    });


};
