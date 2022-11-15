/// <reference types="cypress" />

const cucumber = require('cypress-cucumber-preprocessor').default;

const browserify = require('@cypress/browserify-preprocessor');
const resolve = require('resolve');
module.exports = (on: any, config: any) => {
     const options = {
        ...browserify.defaultOptions,
        typescript: resolve.sync('typescript', { baseDir: config.projectRoot })
     };
     on('file:preprocessor', cucumber(options));
}
