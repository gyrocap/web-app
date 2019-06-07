const assert = require('assert');

describe("Registration Form", function(){
  
    it("Should appear when required", function(){
 
        browser.url("/register")

        assert.equal(browser.options.baseUrl + "/register", browser.getUrl())
        
    });

});