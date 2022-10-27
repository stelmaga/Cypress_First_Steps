import { Given, When, Then } from "cypress-cucumber-preprocessor/steps"
import PageHeader from "../../support/page_object_model/PageHeader"
import SearchPage from "../../support/page_object_model/SearchPage"
import AuthenticationPage from "../../support/page_object_model/AuthenticationPage";
import SignInForm from "../../support/page_object_model/SignInForm";
import ShoppingCartPage from "../../support/page_object_model/ShoppingCartPage";
import RandomEmailGenerator from "../../integration/utils.js";

Given('User opens a store page', () => {
    cy.visit("/")
})

When('User types in a "Printed dress" in a search field', () => {
    PageHeader.search("Printed dress")
})

Then('Dropdown with 5 propositions appears', () => {
    SearchPage.searchDropdown.should("have.length", 5)
})

When('User clicks on Search button', () => {
    PageHeader.clickSearch()
})

Then('Page with 5 search results opens', () => {
    SearchPage.productBlock.should("have.length", 5)
})

When ('User clicks Sign in button', () => {
    PageHeader.clickSignIn()
})

Then ('Authentication page is presented', () => {
    cy.verifyHeaderTitle("Authentication")
})  

When ('User fills email address field with correct mail', () => {
    AuthenticationPage.fillEmailCreateField(RandomEmailGenerator.randomEmail())
})

And ('User clicks Create an account button', () => {
    AuthenticationPage.clickCreateSubmitButton()
})

Then ('Create an account page is presented', () => {
    cy.url({ timeout: 12000 }).should("contain", "account-creation")
    cy.verifyHeaderTitle("Create an account")
})

When ('User fills all mandatory fields', () => {
    cy.correctSignUpForm()
})

And ('User clicks Register button', () => {
    SignInForm.clickRegisterButton();
})

Then ('User is logged in to application', () => {
    cy.verifyHeaderTitle("My account")
    PageHeader.accountName.should("contain", "Tester Testowy")
})

Given ('User has a search result page with at least 1 good presented opened', () => {
    cy.visit("/index.php?controller=search&orderby=position&orderway=desc&search_query=Dress&submit_search=")
    cy.verifyHeaderTitle("Search");
    SearchPage.productBlock.eq(0).should("be.visible")
})

When ('User clicks Add to cart button for any good', () => {
    SearchPage.addToCartButton.eq(0).click()
})

Then ('Adding to card confirmation popup is presented', () => {
    SearchPage.shoppingPopup.should("be.visible")
})

When ('User closes a confirmation popup', () => {
    SearchPage.closeShoppingPopup();
})

And ('User moves mouse coursor on “Cart“ icon', () => {
    SearchPage.openCartPopup();
})

Then ('Expanded Cart popup with 1 good is presented', () => {
    SearchPage.cartBlock.should("be.visible")
    SearchPage.cartProductNumber.should("contain", 1);
})

When ('User clicks Check out button in expanded Cart popup', () => {
    SearchPage.clickCheckOut();
})

Then ('Shopping-cart summary page with 1 good is presented',() => {
    cy.verifyHeaderTitle("Your shopping cart");
    ShoppingCartPage.verifyCartProductQuantity("1 Product");
    ShoppingCartPage.productRow.eq(2).should("not.exist")
})