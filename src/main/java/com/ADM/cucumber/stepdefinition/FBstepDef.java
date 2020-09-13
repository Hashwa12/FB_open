package com.ADM.cucumber.stepdefinition;

import java.util.List;
import java.util.Map;

import com.ADM.FB.main.HomePagePOM;
import com.ADM.FB.main.Initialize;

import cucumber.api.DataTable;
import cucumber.api.Scenario;
import cucumber.api.java.After;
import cucumber.api.java.Before;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;

public class FBstepDef extends Initialize {

	HomePagePOM hp;

	@Given("^Open FB login page \"([^\"]*)\" \"([^\"]*)\"$")
	public void open_FB_login_page(String s1, String s2) throws Throwable {
//		init();
//		hp = new HomePagePOM();
		System.out.println(s1+"\t"+s2);
	}

	@Then("^Enter User ID and Password$")
	public void enter_User_ID_and_Password(DataTable arg1) throws Throwable {

		List<List<String>> list = arg1.raw();
		System.out.println(list.get(0).get(1));
		System.out.println(list.get(1).get(0));
		System.out.println(list.get(1).get(1));

	}

//	@Then("^Enter User ID \"(.*)\" and Password \"(.*)\"$")
//	@Then(value = "^Enter User ID and Password$", timeout = 1000)
//	public void enter_User_ID_and_Password(DataTable pass) throws Throwable {
//	public void enter_User_ID_and_Password(String id, String pass) throws Throwable {
//		Thread.sleep(3000);
//		List<List<String>> list = pass.raw();

//		for (int i = 1; i <= list.size(); i++) {
//		System.out.println("Entering credentials in the fields....");
//		hp.email(list.get(0).get(0));
//		Thread.sleep(2000);
//		hp.password(list.get(0).get(1));
//		hp.password(pass);
//		}
//		System.out.println("Credentials are entered and next is to click Login button");
//	}

	@Then("^Click Login Button$")
		public void click_Login_Button(DataTable table) throws Throwable {
		for(Map<String,String> str: table.asMaps(String.class, String.class))
		{
			System.out.println(str.get("Total Rounds"));
			System.out.println(str.get("Total Values"));
			
		}
				
//		Assert.assertTrue(false);

//		hp.login();

	}

	@Before
	public void beforeScenario() {
		System.out.println("Before hooks print here.........");
	}

	@After
	public void afterScenario(Scenario sc) {
		System.out.println("After hooks print here.........");
//		if (sc.isFailed()) {
//			String screenshotName = sc.getName().replaceAll(" ", "_");
//			try {
//				File src = ((TakesScreenshot) driver).getScreenshotAs(OutputType.FILE);
//				File des = new File(System.getProperty("user.dir") + "/target/cucumber-reports/screenshots/"
//						+ screenshotName + "_.png");
//
//				Files.copy(src, des);
//
//				Reporter.addScreenCaptureFromPath(des.toString());
//
//			} catch (IOException e) {
//				// TODO: handle exception
//			}
//		}
//		driver.quit();
	}
}
