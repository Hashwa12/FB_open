package com.ADM.cucumber.testRunner;

import java.io.File;

import org.testng.annotations.AfterClass;

import com.cucumber.listener.Reporter;

import cucumber.api.CucumberOptions;
import cucumber.api.testng.AbstractTestNGCucumberTests;

//@RunWith(Cucumber.class)
//@ExtendedCucumberOptions(jsonReport = "target/cucumber.json"
//,retryCount = 3
//,detailedReport = true
//,detailedAggregatedReport = true
//,overviewReport = true
//,coverageReport = true
//,jsonUsageReport = "target/cucumber-usage.json"
//,usageReport = true,toPDF = true,outputFolder = "target")
@CucumberOptions(features = {
		"C:\\Users\\aathi\\eclipse-workspace\\Cucumber\\src\\main\\java\\com\\ADM\\cucumber\\feature\\fbhome.feature" }// "C:\\Users\\aathi\\eclipse-workspace\\CricBuzzCucumbebr\\src\\main\\java\\features\\Cricinfo.feature"}//,"C:\\Users\\aathi\\eclipse-workspace\\CricBuzzCucumbebr\\src\\main\\java\\features\\Cricinfo.feature"}//the
																														// path
																														// of
																														// feature
																														// file
		, glue = { "com.ADM.cucumber.stepdefinition" }// the path of step definition files
		, plugin = { "pretty", "html:test-outout",
				"com.cucumber.listener.ExtentCucumberFormatter:target/cucumber-reports/report.html"}
//				"rerun:target/rerun.txt" }// ,"json:json_output/cucumber.json","junit:junit_xml/cucumber.xml"}//to
		// generate
		// different
		// types of
		// reports
//,plugin = {"json:target/cucumber.json","html:target/site/cucumber-pretty"}
		, monochrome = true// display output in a readable format
//				,tags= {"~@ignore"}
		, dryRun = false// to check mapping between feature file and step definition file
		, strict = true// to check if any step is not defined in step definition file
)

public class Runnerclass extends AbstractTestNGCucumberTests {
	@AfterClass
	public static void writeExtentReport() {
		Reporter.loadXMLConfig(new File(
				"C:\\Users\\aathi\\eclipse-workspace\\Cucumber\\src\\main\\java\\com\\ADM\\FB\\main\\extent-config.xml"));
		Reporter.setSystemInfo("User Name", System.getProperty("user.name"));
		Reporter.setSystemInfo("Time Zone", System.getProperty("user.timezone"));
		Reporter.setSystemInfo("Selenium", "3.7.0");
		Reporter.setSystemInfo("Maven", "3.5.2");
		Reporter.setSystemInfo("Java Version", "1.8.0_151");

		Reporter.setSystemInfo("Application Name", "Test App ");
		Reporter.setSystemInfo("Operating System Type", System.getProperty("os.name").toString());
		Reporter.setSystemInfo("Environment", "Production");
		Reporter.setTestRunnerOutput("Test Execution Cucumber Report");
		Reporter.assignAuthor("Hashwa");
		Reporter.addStepLog("************************");

	}

}
