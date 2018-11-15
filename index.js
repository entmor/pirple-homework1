/**
 *  @description Homework Assignment #1
 *  @author Bartosz Chwarscianek
 */


// dependencies
const http  = require('http');
const https = require('https');

// config
const config = require('./config');

// lib
const unifiedServer         =    require('./lib/unifiedServer');
const currentEnvironment    =    require('./lib/currentEnvironment');

// Instantiate the HTTP server and start the HTTP server
const httpServer = http
    .createServer( (req, res ) => unifiedServer( req, res ) )
    .listen( currentEnvironment.httpPort, () => console.log( `The server(http) is listeninig on port ${currentEnvironment.httpPort}` ) );

// Instantiate the HTTPS server and start the HTTPS server
const httpsServer = https
    .createServer( config.httpsServerOptions, (req, res ) => unifiedServer( req, res ) )
    .listen( currentEnvironment.httpsPort, () => console.log( `The server(https) is listeninig on port ${currentEnvironment.httpsPort}` ) );

