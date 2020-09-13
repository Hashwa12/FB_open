package com.ADM.FB.main;

import cucumber.api.java.After;
import cucumber.api.java.Before;

public class Hooks {

	@Before
	public void beforeScenario()
	{
		System.out.println("Before hooks print here.........");
	}
	
	@After
	public void afterScenario() {
		System.out.println("After hooks print here.........");		
	}
	
}
