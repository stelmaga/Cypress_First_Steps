/// <reference types="cypress" />
import SignInForm from "../support/page_object_model/SignInForm";
import PageHeader from "../support/page_object_model/PageHeader";

// before(() => {
//     cy.fixture("user_data.json").then( function (data) {
//         this.data = data;
//         })
//     })

Cypress.Commands.add('correctSignUpForm', function () {
    cy.fixture("user_data.json").then( function (data) {
        SignInForm.fillFirstName(data.firstName)
        SignInForm.fillSecondName(data.secondName)
        SignInForm.fillPassword(data.password)
        SignInForm.fillCompany(data.company)
        SignInForm.fillAddress1(data.address1)
        SignInForm.fillCity(data.city)
        SignInForm.chooseState(data.state)
        SignInForm.fillPostcode(data.postcode)
        SignInForm.fillMobilePhone(data.mobilePhone)
    })
})

Cypress.Commands.add('verifyHeaderTitleContains', (text) => {
    PageHeader.navigationHeader.should("contain", (text))
})
