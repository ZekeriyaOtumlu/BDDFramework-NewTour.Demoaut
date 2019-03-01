$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("login.feature");
formatter.feature({
  "line": 1,
  "name": "NewTours Demoaut Login",
  "description": "",
  "id": "newtours-demoaut-login",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 4,
  "name": "NewTours Demoaut Login Test",
  "description": "",
  "id": "newtours-demoaut-login;newtours-demoaut-login-test",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 6,
  "name": "user is already on Login Page",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "title of login page is NewTours Demoaut",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "user enters username and password",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "user clicks on signin button",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "user is on home page",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepDefinition.user_is_already_on_Login_Page()"
});
formatter.result({
  "duration": 4478040249,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.title_of_login_page_is_NewTours_Demoaut()"
});
formatter.result({
  "duration": 10761273,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.user_enters_username_and_password()"
});
formatter.result({
  "duration": 147160683,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.user_clicks_on_signin_button()"
});
formatter.result({
  "duration": 31071209766,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.user_is_on_home_page()"
});
formatter.result({
  "duration": 8400208,
  "error_message": "org.junit.ComparisonFailure: expected:\u003c...ight: Mercury Tours:[ Failed TestCase]\u003e but was:\u003c...ight: Mercury Tours:[]\u003e\r\n\tat org.junit.Assert.assertEquals(Assert.java:115)\r\n\tat org.junit.Assert.assertEquals(Assert.java:144)\r\n\tat stepDefinition.LoginStepDefinition.user_is_on_home_page(LoginStepDefinition.java:44)\r\n\tat ✽.Then user is on home page(login.feature:10)\r\n",
  "status": "failed"
});
});