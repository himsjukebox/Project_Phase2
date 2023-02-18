package stepDefinition;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;

import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;

public class AddToCartStepDefinition {

	WebDriver driver = Hooks.driver;
	
	@When("I click on add to cart for a particular product {string}")
	public void i_click_on_add_to_cart_for_a_particular_product(String string) {
		
//	    Locate add to cart for a particular product as per the product mentioned in string
		WebElement AddtoCartElement = driver.findElement(By.xpath("//*[contains(text(), '"+string+"')]/parent::*/../..//*[contains(text(), 'Add to cart')]"));

//		Click on Add to cart to add the mentioned product to cart
		AddtoCartElement.click();
	}

	@Then("Basket Item number should be {int}")
	public void basket_Item_number_should_be(Integer int1) {

		WebElement CountElement = driver.findElement(By.xpath("//span[@class='shopping_cart_badge']"));
		
		String count = CountElement.getText();
		if (Integer.valueOf(count) == int1) {
			System.out.println("Basket item number is verfied as "+ int1);
		}
	 try {
		Thread.sleep(5000);
	} catch (InterruptedException e) {
		// TODO Auto-generated catch block
		e.printStackTrace();
	}
	}
	
}
