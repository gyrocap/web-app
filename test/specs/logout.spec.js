const assert = require('assert');

describe("Logout", function(){
  
    it("Redirects to log in page", function(){
 
        browser.url("/logout")

        assert.equal(browser.options.baseUrl + "/login", browser.getUrl())
        
    });

});