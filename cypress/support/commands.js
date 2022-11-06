/// <reference types="cypress" />
import SignInForm from "../support/page_object_model/SignInForm";
import PageHeader from "../support/page_object_model/PageHeader";

before(() => {
    cy.fixture("user_data.json").then( function (data) {
        this.data = data;
        })
    })

Cypress.Commands.add('correctSignUpForm', function () {
    SignInForm.fillFirstName(this.data.firstName);
    SignInForm.fillSecondName(this.data.secondName)
    SignInForm.fillPassword(this.data.password)
    SignInForm.fillCompany(this.data.company)
    SignInForm.fillAddress1(this.data.address1)
    SignInForm.fillCity(this.data.city)
    SignInForm.chooseState(this.data.state)
    SignInForm.fillPostcode(this.data.postcode)
    SignInForm.fillMobilePhone(this.data.mobilePhone)
})

Cypress.Commands.add('verifyHeaderTitle', (text) => {
    PageHeader.navigationHeader.should("contain", (text))
})
