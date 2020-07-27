package com.ADM.FB.main;

import java.util.concurrent.TimeUnit;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

public class Initialize {

	public static WebDriver driver;

	public static void init() {
		System.out.println("Execution Started...");
		System.setProperty("webdriver.chrome.driver",
				"E:\\softwares\\hashwa\\Drivers\\chromedriver.exe");
		driver = new ChromeDriver();
		driver.get("https://www.facebook.com/");
		driver.manage().deleteAllCookies();
		driver.manage().timeouts().implicitlyWait(20, TimeUnit.SECONDS);
	}

}
