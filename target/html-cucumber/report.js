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
formatter.step({
  "name": "I have launched the application",
  "keyword": "Given "
});
formatter.match({
  "location": "stepDefinition.LoginStepDefinition.i_have_launched_the_application()"
});
formatter.result({
  "error_message": "java.lang.NullPointerException: Cannot invoke \"org.openqa.selenium.WebDriver.get(String)\" because \"this.driver\" is null\r\n\tat stepDefinition.LoginStepDefinition.i_have_launched_the_application(LoginStepDefinition.java:19)\r\n\tat ✽.I have launched the application(file:///D:/Simplilearn/AutomationTestEngineer/Workspace/Phase2_Project/src/test/java/features/homepage.feature:5)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "I enter the \"\u003cusername\u003e\" and \"\u003cpassword\u003e\"",
  "keyword": "When "
});
formatter.match({
  "location": "stepDefinition.LoginStepDefinition.i_enter_the_and(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I click on the LoginButton",
  "keyword": "And "
});
formatter.match({
  "location": "stepDefinition.LoginStepDefinition.i_click_on_the_LoginButton()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I should land on the home page",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinition.LoginStepDefinition.i_should_land_on_the_home_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I click on add to cart for a particular \"\u003cproductName\u003e\"",
  "keyword": "When "
});
formatter.match({
  "location": "stepDefinition.AddToCartStepDefinition.i_click_on_add_to_cart_for_a_particular(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Basket Item number should be 1",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinition.AddToCartStepDefinition.basket_Item_number_should_be(java.lang.Integer)"
});
formatter.result({
  "status": "skipped"
});
});