let users = require('../../data/users')
let socket = require('../../index');

module.exports = function(req, res){
    var credentials = parseLoginReq(req);
    let user = users.findByUsername(credentials.username);
    if(typeof(user)!='undefined'){
        if(passwordMatch(user.password, credentials.password)){
            req.session.user = user;
            res.redirect('/')
        }else{
            req.flash('warning', 'Mot de passe incorrect');
            res.redirect('/login');
        }
    }else{
        req.flash('warning', 'Nom d\'utilisateur inconnu');
        res.redirect('/login');
    }
}

function parseLoginReq(req){
    return {
        "username": req.body.username,
        "password": req.body.password
    }
}

function passwordMatch(expected, actual){
    return expected == actual;
}