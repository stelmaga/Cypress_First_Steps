/// <reference types="cypress" />
import SignInForm from "../support/page_object_model/SignInForm";
import SearchPage from "../support/page_object_model/SearchPage";
import PageHeader from "../support/page_object_model/PageHeader";
import ShoppingCartPage from "../support/page_object_model/ShoppingCartPage";

Cypress.Commands.add('correctSignUp', () => {
    SignInForm.fillFirstName("Tester");
    SignInForm.fillSecondName("Testowy");
    SignInForm.fillPassword("Password123!")
    SignInForm.fillCompany("Company")
    SignInForm.fillAddress1("PO Box 515381")
    SignInForm.fillCity("Los Angeles")
    SignInForm.chooseState(1)
    SignInForm.fillPostcode("90001")
    SignInForm.fillMobilePhone("123456789")
    SignInForm.clickRegisterButton();
})

Cypress.Commands.add('verifyProductsNumber', (value) => {
    SearchPage.productBlock.should("have.length", (value))
})

Cypress.Commands.add('verifySearchDropdown', (value) => {
    SearchPage.searchDropdown.should("have.length", (value))
})

Cypress.Commands.add('verifyHeaderTitle', (text) => {
    PageHeader.navigationHeader.should("contain", (text))
})

Cypress.Commands.add('verifyCartProductNumber', (value) => {
    SearchPage.cartProductNumber.should("contain", (value))
})

Cypress.Commands.add('verifyCartProductQuantity', (text) => {
    ShoppingCartPage.productQuantity.should("contain", (text))
})
