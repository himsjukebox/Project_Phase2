package stepDefinition;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

import io.cucumber.java.After;
import io.cucumber.java.Before;

public class Hooks {

	public static WebDriver driver;
	
	@Before
	public void Setup() {
		System.setProperty("webdriver.chrome.driver", "chromedriver.exe");
		driver = new ChromeDriver();
	}
	
	@After
	public void TearDown() {
		driver.close();
	}
	
}