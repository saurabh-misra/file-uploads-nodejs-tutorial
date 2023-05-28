// imports
const express = require( 'express' ),
  axios = require( 'axios' ).default,
  fsProm = require( "fs/promises" ),
  { getFilename } = require( "./utils" );

// global variables, constants and defaults
const PORT = 3000,
  FILE_SOURCE_DIR = "./images",
  FILE_UPLOADS_DIR = "./uploads",
  MAX_UPLOAD_SIZE = 2 * 1024 * 1024; // 2MB in bytes
  MAX_UPLOAD_SIZE_IN_MB = `${ MAX_UPLOAD_SIZE / 1024 / 1024 }MB`;
axios.defaults.baseURL = `http://localhost:${ PORT }`;
const app = express();


// Your code goes here


app.listen( PORT, () => console.log( `👂API Server listening on port ${PORT}` ));