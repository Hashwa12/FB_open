$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("C:/Users/aathi/eclipse-workspace/Cucumber/src/main/java/com/ADM/cucumber/feature/fbhome.feature");
formatter.feature({
  "line": 1,
  "name": "Reach newsfeeds in FB",
  "description": "",
  "id": "reach-newsfeeds-in-fb",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 5,
  "name": "Login with credentials",
  "description": "",
  "id": "reach-newsfeeds-in-fb;login-with-credentials",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 4,
      "name": "@Scenario1"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "Open FB login page",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "Enter User ID and Password",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "Click Login Button",
  "keyword": "Then "
});
formatter.match({
  "location": "FBstepDef.open_FB_login_page()"
});
formatter.result({
  "duration": 60757885500,
  "status": "passed"
});
formatter.match({
  "location": "FBstepDef.enter_User_ID_and_Password()"
});
formatter.result({
  "duration": 3422016400,
  "status": "passed"
});
formatter.match({
  "location": "FBstepDef.click_Login_Button()"
});
formatter.result({
  "duration": 604534600,
  "status": "passed"
});
});