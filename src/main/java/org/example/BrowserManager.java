package org.example;

import org.openqa.selenium.MutableCapabilities;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.chrome.ChromeOptions;
import org.openqa.selenium.firefox.FirefoxDriver;
import org.openqa.selenium.ie.InternetExplorerDriver;
import org.openqa.selenium.remote.DesiredCapabilities;
import org.openqa.selenium.remote.RemoteWebDriver;

import java.net.MalformedURLException;
import java.net.URL;
import java.util.concurrent.TimeUnit;

public class BrowserManager extends Util {

    public static LoadProperty loadProperty = new LoadProperty();
    public static String browser = loadProperty.getProperty("Browser");
    public static final String USERNAME = loadProperty.getProperty("SAUCE_USERNAME");
    public static final String ACCESS_KEY = loadProperty.getProperty("SAUCE_ACCESS_KEY ");
    //public static final String URL = "https://" + USERNAME + " : " + ACCESS_KEY + "@ondemand.us-west-1.saucelabs.com:443/wd/hub";
    public String URL ="https://Anjali_2422:953fd51c-6a99-4927-afd5-9af789dfcab0@ondemand.us-west-1.saucelabs.com:443/wd/hub";
    public static final boolean SAUCE_LAB = true;

    public void setUpBrowser()
    {
        System.out.println(browser);

        if (SAUCE_LAB) {
            System.out.println("running with saucelab" + browser);
            if (browser.equalsIgnoreCase("chrome")) {
                DesiredCapabilities capabilities = DesiredCapabilities.chrome();
                capabilities.setCapability("platformName", "Windows 10");
                capabilities.setCapability("browserVersion", "83.0");
                try {
                    driver = new RemoteWebDriver(new URL(URL), capabilities);

                } catch (MalformedURLException e) {
                    e.printStackTrace();}
                }else if (browser.equalsIgnoreCase("firefox")) {
                    DesiredCapabilities capabilities = DesiredCapabilities.firefox();
                    capabilities.setCapability("platformName", "Windows 10");
                    capabilities.setCapability("browserVersion", "43.0");
                    try {
                        driver = new RemoteWebDriver(new URL(URL), capabilities);
                    } catch (MalformedURLException e) {
                        e.printStackTrace();
                    }
                } else if (browser.equalsIgnoreCase("safari")) {
                DesiredCapabilities capabilities = DesiredCapabilities.safari();
                capabilities.setCapability("platformName", "Windows 10");
                capabilities.setCapability("browserVersion", "latest");
                try {
                    driver = new RemoteWebDriver(new URL(URL), capabilities);
                } catch (MalformedURLException e) {
                    e.printStackTrace();
                }
            } else
                    {
                        System.out.println("browser name is empty" + browser);
                    }

                    //applying implicity wait of 30 sec to the driver instance
                    driver.manage().timeouts().implicitlyWait(60, TimeUnit.SECONDS);
                    //open the URL
                    driver.get(loadProperty.getProperty("url"));
                } else {
                    if (browser.equalsIgnoreCase("chrome")) {
                        System.out.println("here");
                        //setting up chromedriver path
                        System.setProperty("webdriver.chrome.driver", "src\\test\\resources\\BrowserDrivers\\chromedriver.exe");
                        //creating chromdriver object to open google chrome browser
                        driver = new ChromeDriver();
                        System.out.println(loadProperty.getProperty("url"));

                    } else if (browser.equalsIgnoreCase("firefox")) {
                        //setting up firefox path
                        System.setProperty("webdriver.gecko.driver", "src\\test\\resources\\BrowserDrivers\\geckodriver.exe");
                        //Now you can Initialize marionette driver to launch firefox
                        DesiredCapabilities capabilities = DesiredCapabilities.firefox();
                        capabilities.setCapability("marionette", true);
                        //creating firefox object to open firefox browser
                        driver = new FirefoxDriver();
                    } else if (browser.equalsIgnoreCase("ie")) {
                        //setting up ie path
                        System.setProperty("webdriver.ie.driver", "src\\test\\resources\\BrowserDrivers\\IEDriverServer.exe");
                        //creating ie object to open ie browser
                        driver = new InternetExplorerDriver();
                    } else {
                        System.out.println("please enter valid browser");
                    }


                    //maximising screen
                    driver.manage().window().maximize();
                    //applying implicity wait of 30 sec to the driver instance
                    driver.manage().timeouts().implicitlyWait(60, TimeUnit.SECONDS);
                    //open the URL
                    driver.get(loadProperty.getProperty("url"));

                }
            }public  void closeBrowser() {
        driver.close();
    } //reusable method to close browser
        }



