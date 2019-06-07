const assert = require('assert');

describe("Login Form", function(){
  
    it("Should not submit with empty username", function(){

        browser.url("/login")
        $('#password').setValue('WebdriverIO')
        $('#btnLogin').click()

        browser.pause(2000);

        assert.equal(browser.options.baseUrl + "/login", browser.getUrl())
        assert.equal("Ne peut pas être vide !", $("p.is-danger").getText())
 
    });
 
    it("Should not submit with empty password", function(){
 
        browser.url("/login")
        $('#username').setValue('WebdriverIO')
        $('#btnLogin').click()

        browser.pause(2000);

        assert.equal(browser.options.baseUrl + "/login", browser.getUrl())
        assert.equal("Ne peut pas être vide !", $("p.is-danger").getText())
 
    });
 
    it("Should not login with incorrect username", function(){

        browser.url("/login")
        $('#username').setValue('Webdriver')
        $('#password').setValue('WebdriverIO')
        $('#btnLogin').click()

        browser.pause(2000);

        assert.equal(browser.options.baseUrl + "/login", browser.getUrl())
        assert($("#warning > article > div.message-body").getText().includes("Nom d'utilisateur inconnu"))
 
    });

    it("Should not login with incorrect password", function(){
 
        browser.url("/login")
        $('#username').setValue('WebdriverIO')
        $('#password').setValue('Webdriver')
        $('#btnLogin').click()
       
        browser.pause(2000);

        assert.equal(browser.options.baseUrl + "/login", browser.getUrl())
        assert($("#warning > article > div.message-body").getText().includes("Mot de passe incorrect"))
 
    });

    it("Should login with correct username and password", function(){
 
        browser.url("/login")
        $('#username').setValue('WebdriverIO')
        $('#password').setValue('WebdriverIO')
        $('#btnLogin').click()

        browser.pause(3000);

        assert.equal(browser.options.baseUrl + "/", browser.getUrl())
 
    });

});