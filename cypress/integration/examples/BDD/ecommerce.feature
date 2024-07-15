Feature: End to End Ecoomerce validation

   application regression

    Scenario: Ecommerce product delivery
    Given I open Ecommerce Page
    When I add items into the cart
    And validate the total product price 
    Then Select the country, click on submit and verify thankyou msg