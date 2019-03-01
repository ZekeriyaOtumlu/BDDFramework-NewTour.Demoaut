package stepDefinition;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import java.util.concurrent.TimeUnit;

public class LoginStepDefinition {
    WebDriver driver;
    @Given("^user is already on Login Page$")
    public void user_is_already_on_Login_Page(){
        System.setProperty("webdriver.chrome.driver","C:\\Users\\Zack\\Desktop\\SELENIUMMM\\JAR FILES\\chromedriver_win32 (4)\\chromedriver.exe");
        driver = new ChromeDriver();
        driver.get("http://newtours.demoaut.com/");
        driver.manage().timeouts().implicitlyWait(20, TimeUnit.SECONDS);
    }

    @When("^title of login page is NewTours Demoaut$")
    public void title_of_login_page_is_NewTours_Demoaut() {
      String title = driver.getTitle();
      System.out.println(title);
      Assert.assertEquals("Welcome: Mercury Tours", title);
    }

    @Then("^user enters username and password$")
    public void user_enters_username_and_password(){
        driver.findElement(By.name("userName")).sendKeys("mercury");
        driver.findElement(By.name("password")).sendKeys("mercury");
    }

    @Then("^user clicks on signin button$")
    public void user_clicks_on_signin_button()  {
     driver.findElement(By.name("login")).click();
    }

    @Then("^user is on home page$")
    public void user_is_on_home_page() {
        String title = driver.getTitle();
        System.out.println("Home Page title ::"+ title);
        Assert.assertEquals("Find a Flight: Mercury Tours: Failed TestCase", title);
        driver.quit();
    }

}
