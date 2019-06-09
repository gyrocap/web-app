module.exports = function(req, res){
    if(req.session.user!==undefined){
        req.flash('warning', 'Vous êtes déja connecté');
        res.redirect('/');
    }else{
        res.render('login.ejs');
    }
};