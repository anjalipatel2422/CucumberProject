package org.example;

import cucumber.api.PendingException;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class MyStepDefs {

    LoginPage loginPage=new LoginPage();
    HomePage homePage=new HomePage();

    @Given("^User is on homepage$")
    public void user_is_on_homepage() {
        loginPage.verifyLoginPge();
    }

    @When("^User enter valid username$")
    public void user_enter_valid_username() {
        loginPage.verifyUserEnterUsername();
    }

    @When("^user enter valid password$")
    public void user_enter_valid_password() {
        loginPage.verifyUserEnterPassword();
    }

    @When("^user click on log in button$")
    public void user_click_on_log_in_button() {
        loginPage.verifyUserclcickOnLoginButton();
    }

    @Then("^User should be able to logged in successfully$")
    public void user_should_be_able_to_logged_in_successfully() {
        homePage.verifyWelcomeMessage();
    }

    @When("^user enters invalid Username \"([^\"]*)\"$")
    public void userEntersInvalidUsername(String UserName) {
        loginPage.verifyUserEnterInvalidUsername(UserName);
    }

    @And("^user enters invalid  password \"([^\"]*)\"$")
    public void userEntersInvalidPassword(String PassWord) {
        loginPage.verifyUserEnterInvalidPassword(PassWord);
    }

    @Then("^User should not be able to logged in successfully and \"([^\"]*)\"$")
    public void userShouldNotBeAbleToLoggedInSuccessfullyAnd(String message) {
        loginPage.verifyUserAllSeeErrorMessage(message);

    }
}