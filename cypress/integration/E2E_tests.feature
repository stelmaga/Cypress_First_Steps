Feature: Example E2E tests

  I want to be able to search a product
  I want to be able to create an account
  I want to be able go through the entire checkout flow process
  
  Scenario: Search flow
    Given User opens a store page
    When User types in a "Printed dress" in a search field
    Then Dropdown with 5 propositions appears
    When User clicks on Search button
    Then Page with 5 search results opens
  
  Scenario: Registration flow
    Given User opens a store page
    When User clicks Sign in button
    Then Authentication page is presented
    When User fills email address field with correct mail
    And User clicks Create an account button
    Then Create an account page is presented
    When User fills all mandatory fields
    And User clicks Register button
    Then User is logged in to application

  Scenario: Checkout flow
    Given User has a search result page with at least 1 good presented opened 
    When User clicks Add to cart button for any good
    Then Adding to card confirmation popup is presented
    When User closes a confirmation popup
    And User moves mouse coursor on “Cart“ icon
    Then Expanded Cart popup with 1 good is presented
    When User clicks Check out button in expanded Cart popup
    Then Shopping-cart summary page with 1 good is presented