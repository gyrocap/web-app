const TimelineReporter = require('wdio-timeline-reporter').default;
const assert = require('chai').assert;

describe("Logout", function(){

    // afterEach(function(){
    //     browser.reloadSession()
    // });
  
    it("Redirects to log in page", function(){
 
        browser.url("/logout");

        browser.takeScreenshot();

        assert.equal(browser.options.baseUrl + "/login", browser.getUrl());
        
    });

});