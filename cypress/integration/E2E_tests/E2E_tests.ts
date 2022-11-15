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

When('User types in a {string} in a search field', (productName: string) => {
    PageHeader.search(productName)
})

Then('Dropdown with {int} propositions appears', (propositionsNumber: number) => {
    SearchPage.searchDropdown.should("have.length", propositionsNumber)
})

When('User clicks on Search button', () => {
    PageHeader.clickSearch()
})

Then('Page with {int} search results opens', (productsNumber: number) => {
    SearchPage.productBlock.should("have.length", productsNumber)
})

When ('User clicks Sign in button', () => {
    PageHeader.clickSignIn()
})

Then ('Authentication page is presented', () => {
    cy.verifyHeaderTitleContains("Authentication")
})  

When ('User fills email address field with correct mail', () => {
    AuthenticationPage.fillEmailCreateField(RandomEmailGenerator.randomEmail())
})

When ('User clicks Create an account button', () => {
    AuthenticationPage.clickCreateSubmitButton()
})

Then ('Create an account page is presented', () => {
    cy.url({ timeout: 12000 }).should("contain", "account-creation")
    cy.verifyHeaderTitleContains("Create an account")
})

When ('User fills all mandatory fields', () => {
    cy.correctSignUpForm()
})

When ('User clicks Register button', () => {
    SignInForm.clickRegisterButton();
})

Then ('User is logged in to application', () => {
    cy.verifyHeaderTitleContains("My account")
    PageHeader.accountName.should("contain", "Tester Testowy")
})

Given ('User has opened a search result page with at least 1 good presented', () => {
    cy.visit("/index.php?controller=search&orderby=position&orderway=desc&search_query=Dress&submit_search=")
    cy.verifyHeaderTitleContains("Search");
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

When ('User moves mouse coursor on “Cart“ icon', () => {
    SearchPage.openCartPopup();
})

Then ('Expanded Cart popup is presented', () => {
    SearchPage.cartBlock.should("be.visible")
})

Then ('{int} good is presented in extand popup', (productsAmount: number) => {
    SearchPage.cartProductNumber.should("contain", productsAmount);
})

When ('User clicks Check out button in expanded Cart popup', () => {
    SearchPage.clickCheckOut();
})

Then ('Shopping-cart summary page is presented', () => {
    cy.verifyHeaderTitleContains("Your shopping cart");
})

Then ('{string} is presented on Shopping-cart summary page', (productQuantity: number) => {
    ShoppingCartPage.verifyCartProductQuantity(productQuantity);
})

