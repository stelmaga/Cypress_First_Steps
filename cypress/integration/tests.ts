/// <reference types="cypress" />
import PageHeader from "../support/page_object_model/PageHeader";
import AuthenticationPage from "../support/page_object_model/AuthenticationPage";
import SearchPage from "../support/page_object_model/SearchPage";
import ShoppingCartPage from "../support/page_object_model/ShoppingCartPage";
import SignInForm from "../support/page_object_model/SignInForm";
import RandomEmailGenerator from "../integration/utils.js";

describe("E2E tests", () => {

    it("User can search a product", () => {
        // When I go to “http://automationpractice.com/index.php“ site
        cy.visit("/")
        // And I type 'Printed dress' in the elastic search field
        PageHeader.search("Printed dress")
        // Then 5 goods are presented in the elastic search dropdown
        SearchPage.searchDropdown.should("have.length", 5);
        // When I click [Search] button
        PageHeader.clickSearch();
        // Then search results block is presented
        cy.verifyHeaderTitle("Search");
        // And 5 goods are presented in results block
        SearchPage.productBlock.should("have.length", 5);
    })

    it.only("User can registrate with correct data", () => {
        // When I go to “http://automationpractice.com/index.php“ site
        cy.visit("/")
        // And I click [Sign in] button
        PageHeader.clickSignIn();
        // And  I fill ‘email address’ field in Create an account block
        cy.verifyHeaderTitle("Authentication");
        AuthenticationPage.fillEmailCreateField(RandomEmailGenerator.randomEmail());
        // And I click [Create an account] button in Create an account block
        AuthenticationPage.clickCreateSubmitButton();
        // Then create an account page is presented
        cy.url({ timeout: 12000 }).should("contain", "account-creation")
        cy.verifyHeaderTitle("Create an account");
        // When I fill all mandatory fields on create an account page
        // And I click [Register] button on create an account page
        cy.correctSignUpForm();
        SignInForm.clickRegisterButton();
        // Then I’m logged in to application
        cy.verifyHeaderTitle("My account");
        PageHeader.accountName.should("contain", "Tester Testowy")
    })

    it("User can walk through entire checkout flow process", () => {
        // When I go to “http://automationpractice.com/index.php“ site
        // // And I type 'Dress' in the elastic search field
        // PageHeader.search("Dress")
        // // And I click [Search] button
        // PageHeader.clickSearch();
        cy.visit("/index.php?controller=search&orderby=position&orderway=desc&search_query=Dress&submit_search=")
        // Then search results block is presented
        cy.verifyHeaderTitle("Search");
        // And at least 1 good is presented in result block
        // cy.get(".product_list").find("li").eq(0).should("be.visible")
        SearchPage.productBlock.eq(0).should("be.visible")
        // When I click [Add to cart] button for any good from result block
        SearchPage.addToCartButton.eq(0).click()
        // Then adding to card confirmation popup is presented on the page
        SearchPage.shoppingPopup.should("be.visible")
        // When I close adding to card confirmation popup
        SearchPage.closeShoppingPopup();
        // And I hover mouse coursor on “Cart“ icon
        SearchPage.openCartPopup();
        // Then expanded Cart popup is presented
        SearchPage.cartBlock.should("be.visible")
        // And 1 good is presented in Cart popup
        SearchPage.cartProductNumber.should("contain", 1);
        // When I click [Check out] button in expanded Cart popup
        SearchPage.clickCheckOut();
        // Then shopping-cart summary page is presenting
        cy.verifyHeaderTitle("Your shopping cart");
        // And 1 good is presented on shopping-cart summary page
        ShoppingCartPage.verifyCartProductQuantity("1 Product");
        // cy.get("#cart_summary").find(".cart_product").eq(2).should("not.exist")
        ShoppingCartPage.productRow.eq(2).should("not.exist")
    })

})