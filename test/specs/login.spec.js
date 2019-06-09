const TimelineReporter = require('wdio-timeline-reporter').default;
const assert = require('chai').assert;
let LoginForm = require('../pages/loginForm');

describe("Login Form", function(){

    afterEach(function(){
        browser.reloadSession()
    });
  
    it("Should not submit with empty username", function(){

        TimelineReporter.addContext(JSON.stringify({
            username: "",
            password: "WebdriverIO"
        }));

        browser.url(LoginForm.url);
        $(LoginForm.passwordField).setValue('WebdriverIO');
        $(LoginForm.submitButton).click();

        browser.pause(1000);

        browser.takeScreenshot();

        assert.equal(browser.options.baseUrl + LoginForm.url, browser.getUrl());
        assert.equal("Ne peut pas être vide !", $("p.is-danger").getText());
 
    });
 
    it("Should not submit with empty password", function(){

        TimelineReporter.addContext(JSON.stringify({
            username: "WebdriverIO",
            password: ""
        }));
 
        browser.url("/login");
        $('#username').setValue('WebdriverIO');
        $(LoginForm.submitButton).click();

        browser.pause(1000);

        browser.takeScreenshot();

        assert.equal(browser.options.baseUrl + "/login", browser.getUrl());
        assert.equal("Ne peut pas être vide !", $("p.is-danger").getText());
 
    });
 
    it("Should not login with incorrect username", function(){

        TimelineReporter.addContext(JSON.stringify({
            username: "Webdriver",
            password: "WebdriverIO"
        }));

        browser.url("/login");
        $('#username').setValue('Webdriver');
        $('#password').setValue('WebdriverIO');
        $(LoginForm.submitButton).click();

        browser.pause(1000);

        browser.takeScreenshot();

        assert.equal(browser.options.baseUrl + "/login", browser.getUrl());
        assert($("#warning > article > div.message-body").getText().includes("Nom d'utilisateur inconnu"));
 
    });

    it("Should not login with incorrect password", function(){

        TimelineReporter.addContext(JSON.stringify({
            username: "WebdriverIO",
            password: "Webdriver"
        }));
 
        browser.url("/login");
        $('#username').setValue('WebdriverIO');
        $('#password').setValue('Webdriver');
        $(LoginForm.submitButton).click();
       
        browser.pause(1000);

        browser.takeScreenshot();

        assert.equal(browser.options.baseUrl + "/login", browser.getUrl());
        assert($("#warning > article > div.message-body").getText().includes("Mot de passe incorrect"));
 
    });

    it("Should login with correct username and password", function(){

        TimelineReporter.addContext(JSON.stringify({
            username: "WebdriverIO",
            password: "WebdriverIO"
        }));
 
        browser.url("/login");
        $('#username').setValue('WebdriverIO');
        $('#password').setValue('WebdriverIO');
        $(LoginForm.submitButton).click();

        browser.pause(1000);

        browser.takeScreenshot();

        assert.equal(browser.options.baseUrl + "/", browser.getUrl());
 
    });

    it("Should redirect to home page if already logged in", function(){

        TimelineReporter.addContext(JSON.stringify({
            username: "WebdriverIO",
            password: "WebdriverIO"
        }));

        browser.url("/login");
        $('#username').setValue('WebdriverIO');
        $('#password').setValue('WebdriverIO');
        $(LoginForm.submitButton).click();

        browser.pause(1000);

        browser.takeScreenshot();

        browser.url("/login");

        browser.pause(1000);

        browser.takeScreenshot();

        assert.equal(browser.options.baseUrl + "/", browser.getUrl());

    });

});