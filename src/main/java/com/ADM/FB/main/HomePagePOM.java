package com.ADM.FB.main;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.CacheLookup;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class HomePagePOM extends Initialize{
	
	
	@CacheLookup
	@FindBy(xpath = "//input[@id='email']")
	public static WebElement mail;
	
	@CacheLookup
	@FindBy(xpath = "//input[@id='pass']")
	public static WebElement pass;
	
	@CacheLookup
	@FindBy(xpath = "//input[@type='submit']")
	public static WebElement button;
	
	
	public HomePagePOM() {
		PageFactory.initElements(driver, this);
	}
	
	public void email() {
		mail.clear();
		mail.sendKeys("adfgasdg");
	}
	
	public void password() {
		pass.sendKeys("adsfadsf");
	}
	
	public void login() {
		button.click();
	}

}
