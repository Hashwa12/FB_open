package com.ADM.FB.main;

import java.util.concurrent.TimeUnit;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

public class Initialize {

	public static WebDriver driver;

	public static void init() {
		System.out.println("Execution Started...");
		System.setProperty("webdriver.chrome.driver",
				"E:\\softwares\\hashwa\\Drivers\\chromedriver_win32(2)\\chromedriver.exe");
		driver = new ChromeDriver();
		driver.get("https://www.facebook.com/");
		driver.manage().deleteAllCookies();
		driver.manage().timeouts().implicitlyWait(20, TimeUnit.SECONDS);
	}
	
	public static String getReportConfigPath(){
		String reportConfigPath = "C:\\Users\\aathi\\eclipse-workspace\\Cucumber\\src\\main\\java\\com\\ADM\\FB\\main\\extent-config.xml";
		if(reportConfigPath!= null) return reportConfigPath;
		else throw new RuntimeException("Report Config Path not specified in the Configuration.properties file for the Key:reportConfigPath");		
	}

}
