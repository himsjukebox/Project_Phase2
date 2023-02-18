Feature: Add products to cart in saucedemo.com with product name as input

  @sanity
  Scenario Outline: This scenario is to add products to cart for saucedemo.com
    Given I have launched the application
    When I enter the "<username>" and "<password>"
    And I click on the Login Button
    Then I should land on the home page
    When I click on add to cart for a particular product "Sauce Labs Onesie"
    Then Basket Item number should be 1
    
    Examples: 
      | username            | password     |
      | standard_user       | secret_sauce |