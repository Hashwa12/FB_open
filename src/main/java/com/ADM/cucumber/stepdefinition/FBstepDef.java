package com.ADM.cucumber.stepdefinition;

import org.openqa.selenium.WebDriver;

import com.ADM.FB.main.HomePagePOM;
import com.ADM.FB.main.Initialize;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;

public class FBstepDef extends Initialize {

	HomePagePOM hp;

	@Given("^Open FB login page$")
	public void open_FB_login_page() throws Throwable {
		init();
		hp = new HomePagePOM();
	}

	@Then("^Enter User ID and Password$")
	public void enter_User_ID_and_Password() throws Throwable {

		System.out.println("Entering credentials in the fields....");
		hp.email();
		Thread.sleep(2000);
		hp.password();

		System.out.println("Credentials are entered and next is to click Login button");
	}

	@Then("^Click Login Button$")
	public void click_Login_Button() throws Throwable {

		hp.login();
	}

}
