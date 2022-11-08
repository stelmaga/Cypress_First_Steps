/// <reference types="cypress" />

declare namespace Cypress {
    interface Chainable<Subject=any> {
      correctSignUpForm(): Chainable;
      verifyHeaderTitleContains(text:string): Chainable;
    }
 }