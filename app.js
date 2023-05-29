// imports
const express = require( 'express' ),
  axios = require( 'axios' ).default,
  multer = require( "multer" ),
  fsProm = require( "fs/promises" ),
  fs = require( "fs" ),
  FormData = require( "form-data" ),
  { getFilename } = require( "./utils" );

// global variables, constants and defaults
const PORT = 3000,
  FILE_SOURCE_DIR = "./images",
  FILE_UPLOADS_DIR = "./uploads",
  MAX_UPLOAD_SIZE = 2 * 1024 * 1024; // 2MB in bytes
  MAX_UPLOAD_SIZE_IN_MB = `${ MAX_UPLOAD_SIZE / 1024 / 1024 }MB`;
axios.defaults.baseURL = `http://localhost:${ PORT }`;
const app = express();

// YOUR CODE GOES HERE

app.listen( PORT, () => console.log( `👂API Server listening on port ${PORT}` ));