const TimelineReporter = require('wdio-timeline-reporter').default;
const assert = require('chai').assert;
let HP = require('../pages/homePage');
let LoginForm = require('../pages/loginForm');
let WelcomeBanner = require('../components/welcomeBanner');

describe("Home Page", function(){

    afterEach(function(){
        browser.reloadSession()
    });
  
    it("Should redirect to login if not logged in", function(){
        
        browser.url(HP.url);

        browser.pause(1000);

        browser.takeScreenshot();

        assert.equal(browser.options.baseUrl + LoginForm.url, browser.getUrl());
 
    });
 
    it("Should appear on log in", function(){

        TimelineReporter.addContext(JSON.stringify({
           username: "WebdriverIO",
           password: "WebdriverIO"
        }));
 
        browser.url(LoginForm.url);
        $(LoginForm.usernameField).setValue('WebdriverIO');
        $(LoginForm.passwordField).setValue('WebdriverIO');
        $(LoginForm.submitButton).click();

        browser.pause(1000);

        browser.takeScreenshot();

        assert.equal(browser.options.baseUrl + HP.url, browser.getUrl());
        
    });

    it("Displays welcome banner", function(){

        browser.url(LoginForm.url);
        $(LoginForm.usernameField).setValue('WebdriverIO');
        $(LoginForm.passwordField).setValue('WebdriverIO');
        $(LoginForm.submitButton).click();

        browser.pause(1000);

        browser.takeScreenshot();

        assert.ok($(WelcomeBanner.welcomeDiv));
 
    });

    it("Welcome banner can be removed", function(){

        browser.url(LoginForm.url);
        $(LoginForm.usernameField).setValue('WebdriverIO');
        $(LoginForm.passwordField).setValue('WebdriverIO');
        $(LoginForm.submitButton).click();

        browser.pause(1000);

        browser.takeScreenshot();

        $(WelcomeBanner.closeButton).click();

        browser.pause(1000);

        browser.takeScreenshot();

        assert.equal(undefined, $(WelcomeBanner.welcomeDiv).length);

    });
  
});