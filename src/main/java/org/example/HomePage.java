package org.example;

import org.openqa.selenium.By;
import org.testng.Assert;

public class HomePage extends Util {
    private By ActualMessage= By.linkText("Welcome Admin");
    String ExpectedMessage= "Welcome Admin";
    public void verifyWelcomeMessage(){
        Assert.assertEquals(getText1(ActualMessage),ExpectedMessage);
    }
}
