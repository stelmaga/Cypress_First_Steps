/// <reference types="cypress" />

declare namespace Cypress {
  interface Chainable<Subject = any> {
    correctSignUpForm(): Chainable<any>;
    verifyHeaderTitleContains(text:string): Chainable<any>;
  }
 }