Feature: Add products to cart in saucedemo.com with product name as input

  @sanity
  Scenario: This scenario is to add products to cart for saucedemo.com
    Given I have launched the application
    When I enter the "<username>" and "<password>"
    And I click on the Login Button
    Then I should land on the home page
    When I click on add to cart for a particular "<productName>"
    Then Basket Item number should be 1
