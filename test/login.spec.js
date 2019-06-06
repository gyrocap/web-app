require('chromedriver');
var webdriver = require('selenium-webdriver');

describe("Login Form", function(){
  
    var driver;

    before(function(){
        
        driver = new webdriver.Builder()
            .withCapabilities( { 'browserName' : 'chrome' } )
            .build();
    
    });
 
    after(function(){
 
        driver.quit();
 
    });
    
    beforeEach(function(){
        
        driver.get("http://localhost:" + process.env.PORT||8080 + "/login");
        driver.manage().window().maximize();
    
    });
 
    afterEach(function(){
 
        // do something after test case execution is finished
        // no matter if there are failed cases
 
    });
  
    it("Should not submit with empty username", function(){
        
        // test Code
        // assertions
 
    });
 
    it("Should not submit with empty username", function(){
 
        // test Code
        // assertions
        
    });
 
    it("Should not login with incorrect username", function(){
 
        // test Code
        // assertions
 
    });

    it("Should not login with incorrect password", function(){
 
        // test Code
        // assertions
 
    });

    it("Should login with correct username and password", function(){
 
        // test Code
        // assertions
 
    });
  
});