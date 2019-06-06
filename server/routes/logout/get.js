module.exports = function(req, res){
    req.session = {};
    req.flash('info', 'Vous venez de vous déconnecter.')
    res.redirect('/');
}