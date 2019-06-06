let fs = require('fs');

module.exports.findByUsername = function(username){
    let users = JSON.parse(fs.readFileSync('./server/data/users.json'));
    for (let index = 0; index < users.length; index++) {
        const user = users[index];
        if(users[index].username == username) return users[index];
    }
    return undefined;
}