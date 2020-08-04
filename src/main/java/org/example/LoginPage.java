package org.example;

import org.openqa.selenium.By;
import org.testng.Assert;

public class LoginPage extends Util {
    public Object verifyuserenterusernameandpassword;
    LoadProperty loadProperty=new LoadProperty();


    private String _ExpectedURL="https://opensource-demo.orangehrmlive.com/";
    String ActualURL=driver.getCurrentUrl();
    private By _usernamebox =By.xpath("//input[@id=\"txtUsername\"]");
    private By _passwordbox =By.xpath("//input[@id=\"txtPassword\"]");
    private By _LoginButton =By.xpath("//input[@value=\"LOGIN\"]");
    //private By _PasswordCannotEmptyError=By.xpath("//span[text()=\"Password cannot be empty\"]");
    //private String ExpectedError1="Password cannot be empty";
    private By _ExpectedErrorMessage=By.id("spanMessage");
    private By _UsernameCannotEmptyError=By.xpath("//span[text()=\"Username cannot be empty\"]");
    private String ExpectedError2="Username cannot be empty";

    public void verifyLoginPge(){

        Assert.assertEquals(ActualURL,_ExpectedURL);
    }
    public void verifyUserEnterUsername(){
        waituntilElementisclickble(_usernamebox,40);
        //typeText(_usernamebox,UserName);
        typeText(_usernamebox,loadProperty.getProperty("usernamebox"));
    }

    public void verifyUserEnterPassword() {
        //typeText(_passwordbox,PassWord);
        typeText(_passwordbox, loadProperty.getProperty("passwordbox"));

    } public void verifyUserEnterInvalidUsername(String UserName){
       // waituntilElementisclickble(_usernamebox,40);
        typeText(_usernamebox,UserName);

        } public void verifyUserEnterInvalidPassword(String PassWord) {
        typeText(_passwordbox, PassWord);
    }
    public void verifyUserclcickOnLoginButton () {
        clickonElement(_LoginButton);
            }


   public void verifyUserAllSeeErrorMessage(String message){

       Assert.assertEquals(getText1(_ExpectedErrorMessage),message);
       //Assert.assertEquals(getText1(_UsernameCannotEmptyError),ExpectedError2);


}

    public void VerifyUserEnterUsernameandPassword(String logindetail) {
       typeText(_usernamebox,"Admin");
        typeText(_passwordbox,"admin123");
       // typeText(By.xpath(_usernamebox));

    }
}
