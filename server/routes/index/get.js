module.exports = function(req, res){
    if (typeof(req.session.user)=='undefined'){
        res.redirect('/login');
    }else{
        res.render('index.ejs');
    }
}