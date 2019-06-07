const assert = require('assert');

describe("Registration Form", function(){
  
    it("Should appear when required", function(){
 
        browser.url("http://localhost:5000/register")

        assert.equal("http://localhost:5000/register", browser.getUrl())
        
    });

});