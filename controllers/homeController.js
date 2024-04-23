exports.getHome =  (req, res) => {
    res.render('home', { stylesheet: 'home/', title: 'Home' });
};

exports.getRedirectHome = (req,res) => {
    res.redirect('/');
};
   