let fs = require('fs');

module.exports.findByUsername = function (username){
    let users = JSON.parse(fs.readFileSync('./server/data/users.json'));
    for (let index = 0; index < users.length; index++) {
        const user = users[index];
        if(users[index].username === username) return users[index];
    }
    return undefined;
};

module.exports.foundRegistered = function () {
    let users = JSON.parse(fs.readFileSync('./server/data/users.json'));
    if (users.length>0) {
        return users[0];
    }
    return undefined;
};

module.exports.create = function (webdriverIO, webdriverIO2) {
    return undefined;
};