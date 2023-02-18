Feature: Login Feature scenario in saucedemo

  Background: 
    Given I have launched the application

  @sanity
  Scenario: This scenario is positive login usecase for saucedemo.com
    When I enter the "standard_user" and "secret_sauce"
    And I click on the Login Button
    Then I should land on the home page

  @regression
  Scenario Outline: This scenario is negative login usecase for saucedemo.com
    When I enter the "<username>" and "<password>"
    And I click on the Login Button
    Then I should get the error message "Epic sadface: Username and password do not match any user in this service"

    Examples: 
      | username            | password     |
      | standard_wronguser  | secret_sauce |
      | abc_xyz             | Abc_efg      |
      | pqr_xyz             | Ert_pqr      |
