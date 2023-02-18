package stepDefinition;

import java.util.concurrent.TimeUnit;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;

import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;

public class LoginStepDefinition {

	WebDriver driver = Hooks.driver;
	
	@Given("I have launched the application")
	public void i_have_launched_the_application() {
//	    Navigating to URL
		driver.get("https://www.saucedemo.com");

//	    Maximizing window
		driver.manage().window().maximize();
	    
//		Setting implicit timeout
		driver.manage().timeouts().implicitlyWait(3000, TimeUnit.MILLISECONDS);
	}

	@When("I enter the {string} and {string}")
	public void i_enter_the_and(String string, String string2) {
		
//		Enter User name
		driver.findElement(By.id("user-name")).sendKeys(string);
		
//		Enter Password
	    driver.findElement(By.id("password")).sendKeys(string2);
	}

	@When("I click on the Login Button")
	public void i_click_on_the_LoginButton() {
//		Clicking on Login button
		driver.findElement(By.id("login-button")).click();
	}

	@Then("I should land on the home page")
	public void i_should_land_on_the_home_page() {
//		Actual URL
	    String actURL = driver.getCurrentUrl();
		
//	    Expected URL
	    String expURL = "https://www.saucedemo.com/inventory.html";
	    
//	    Condition if both actual and expected link are same
		if (actURL.equals(expURL)) {
			System.out.println("Login is ssuccessful!");	
		}
	}

	@Then("I should get the error message {string}")
	public void i_should_get_the_error_message(String string) {

//		WebElement for error
		WebElement Error =driver.findElement(By.xpath("//h3[@data-test='error']"));
		
//		Actual Error
		String actError = Error.getText();

//		Expected Error
		String expError = "Epic sadface: Username and password do not match any user in this service";
	
//	    Condition if both actual and expected errors are same
		if(actError.equals(expError)){
			System.out.println("Error is properly shown");
		}
	}
	
}
