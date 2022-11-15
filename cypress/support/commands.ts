/// <reference types="cypress" />
import SignInForm from "../support/page_object_model/SignInForm";
import PageHeader from "../support/page_object_model/PageHeader";


interface RegistrationData {
    firstName: string;
    secondName: string;
    password: string;
    company: string;
    address1: string;
    city: string;
    state: number;
    postcode: number;
    mobilePhone: number
}

Cypress.Commands.add('correctSignUpForm', function () {
    return cy.fixture("user_data.json").then( function (data: RegistrationData) {
        SignInForm.fillFirstName(data.firstName)
        SignInForm.fillSecondName(data.secondName)
        SignInForm.fillPassword(data.password)
        SignInForm.fillCompany(data.company)
        SignInForm.fillAddress1(data.address1)
        SignInForm.fillCity(data.city)
        SignInForm.chooseState(data.state)
        SignInForm.fillPostcode(data.postcode)
        SignInForm.fillMobilePhone(data.mobilePhone)
        return cy.wrap({
        });
    })
})

Cypress.Commands.add('verifyHeaderTitleContains', (text: string) => {
    return PageHeader.navigationHeader.should("contain", (text))
})
