module.exports = function(req, res){
    if (typeof(req.session.username)=='undefined'){
        res.redirect('/login');
    }else{
        res.render('index.ejs');
    }
}