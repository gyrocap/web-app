const assert = require('assert');

describe("Home Page", function(){
  
    it("Should redirect to login if not logged in", function(){
        
        browser.url("http://localhost:5000/")

        assert.equal("http://localhost:5000/login", browser.getUrl())
 
    });
 
    it("Should appear on log in", function(){
 
        browser.url("http://localhost:5000/login")
        $('#password').setValue('WebdriverIO')
        $('#username').setValue('WebdriverIO')
        $('#btnLogin').click()

        browser.pause(2000)

        assert.equal("http://localhost:5000/", browser.getUrl())
        
    });

    it("Displays welcome banner", function(){
 
        browser.url("http://localhost:5000/login")
        $('#password').setValue('WebdriverIO')
        $('#username').setValue('WebdriverIO')
        $('#btnLogin').click()

        browser.pause(2000)

        assert.ok($("#welcome"))
 
    });

    it("Welcome banner can be removed", function(){
 
        browser.url("http://localhost:5000/login")
        $('#password').setValue('WebdriverIO')
        $('#username').setValue('WebdriverIO')
        $('#btnLogin').click()

        browser.pause(2000)

        $("#closeWelcome").click();
 
    });
  
});