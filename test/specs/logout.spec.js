const assert = require('assert');

describe("Logout", function(){
  
    it("Redirects to log in page", function(){
 
        browser.url("http://localhost:5000/logout")

        assert.equal("http://localhost:5000/login", browser.getUrl())
        
    });

});