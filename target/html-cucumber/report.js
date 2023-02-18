$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/java/features/homepage.feature");
formatter.feature({
  "name": "Add products to cart in saucedemo.com with product name as input",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "This scenario is to add products to cart for saucedemo.com",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@sanity"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I have launched the application",
  "keyword": "Given "
});
formatter.match({
  "location": "stepDefinition.LoginStepDefinition.i_have_launched_the_application()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I enter the \"\u003cusername\u003e\" and \"\u003cpassword\u003e\"",
  "keyword": "When "
});
formatter.match({
  "location": "stepDefinition.LoginStepDefinition.i_enter_the_and(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click on the Login Button",
  "keyword": "And "
});
formatter.match({
  "location": "stepDefinition.LoginStepDefinition.i_click_on_the_LoginButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should land on the home page",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinition.LoginStepDefinition.i_should_land_on_the_home_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click on add to cart for a particular \"\u003cproductName\u003e\"",
  "keyword": "When "
});
formatter.match({
  "location": "stepDefinition.AddToCartStepDefinition.i_click_on_add_to_cart_for_a_particular(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Basket Item number should be 1",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinition.AddToCartStepDefinition.basket_Item_number_should_be(java.lang.Integer)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.uri("file:src/test/java/features/loginsaucedemo.feature");
formatter.feature({
  "name": "Login Feature scenario in saucedemo",
  "description": "",
  "keyword": "Feature"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I have launched the application",
  "keyword": "Given "
});
formatter.match({
  "location": "stepDefinition.LoginStepDefinition.i_have_launched_the_application()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "This scenario is positive login usecase for saucedemo.com",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@sanity"
    }
  ]
});
formatter.step({
  "name": "I enter the \"\u003cusername\u003e\" and \"\u003cpassword\u003e\"",
  "keyword": "When "
});
formatter.match({
  "location": "stepDefinition.LoginStepDefinition.i_enter_the_and(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click on the Login Button",
  "keyword": "And "
});
formatter.match({
  "location": "stepDefinition.LoginStepDefinition.i_click_on_the_LoginButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should land on the home page",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinition.LoginStepDefinition.i_should_land_on_the_home_page()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "This scenario is negative login usecase for saucedemo.com",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@regression"
    }
  ]
});
formatter.step({
  "name": "I enter the \"\u003cusername\u003e\" and \"\u003cpassword\u003e\"",
  "keyword": "When "
});
formatter.step({
  "name": "I click on the Login Button",
  "keyword": "And "
});
formatter.step({
  "name": "I should get the error message \"Epic sadface: Username and password do not match any user in this service\"",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "username",
        "password"
      ]
    },
    {
      "cells": [
        "standard_wronguser",
        "secret_sauce"
      ]
    },
    {
      "cells": [
        "abc_xyz",
        "Abc_efg"
      ]
    },
    {
      "cells": [
        "pqr_xyz",
        "Ert_pqr"
      ]
    }
  ]
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I have launched the application",
  "keyword": "Given "
});
formatter.match({
  "location": "stepDefinition.LoginStepDefinition.i_have_launched_the_application()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "This scenario is negative login usecase for saucedemo.com",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@regression"
    }
  ]
});
formatter.step({
  "name": "I enter the \"standard_wronguser\" and \"secret_sauce\"",
  "keyword": "When "
});
formatter.match({
  "location": "stepDefinition.LoginStepDefinition.i_enter_the_and(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click on the Login Button",
  "keyword": "And "
});
formatter.match({
  "location": "stepDefinition.LoginStepDefinition.i_click_on_the_LoginButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should get the error message \"Epic sadface: Username and password do not match any user in this service\"",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinition.LoginStepDefinition.i_should_get_the_error_message(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I have launched the application",
  "keyword": "Given "
});
formatter.match({
  "location": "stepDefinition.LoginStepDefinition.i_have_launched_the_application()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "This scenario is negative login usecase for saucedemo.com",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@regression"
    }
  ]
});
formatter.step({
  "name": "I enter the \"abc_xyz\" and \"Abc_efg\"",
  "keyword": "When "
});
formatter.match({
  "location": "stepDefinition.LoginStepDefinition.i_enter_the_and(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click on the Login Button",
  "keyword": "And "
});
formatter.match({
  "location": "stepDefinition.LoginStepDefinition.i_click_on_the_LoginButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should get the error message \"Epic sadface: Username and password do not match any user in this service\"",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinition.LoginStepDefinition.i_should_get_the_error_message(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I have launched the application",
  "keyword": "Given "
});
formatter.match({
  "location": "stepDefinition.LoginStepDefinition.i_have_launched_the_application()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "This scenario is negative login usecase for saucedemo.com",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@regression"
    }
  ]
});
formatter.step({
  "name": "I enter the \"pqr_xyz\" and \"Ert_pqr\"",
  "keyword": "When "
});
formatter.match({
  "location": "stepDefinition.LoginStepDefinition.i_enter_the_and(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click on the Login Button",
  "keyword": "And "
});
formatter.match({
  "location": "stepDefinition.LoginStepDefinition.i_click_on_the_LoginButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should get the error message \"Epic sadface: Username and password do not match any user in this service\"",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinition.LoginStepDefinition.i_should_get_the_error_message(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
});