const User = require('../models/user')
exports.getPay =  async (req, res) => {
    const profile = await User.findById(req.session.userID);
    const defaultProfile = {
        name: "Log",
        firstname: "In",
        userType: 0
    };
    if(!profile){
        req.session.returnTo = req.originalUrl;
        res.render('notsigned' , {profile : defaultProfile});
    }else{
        res.render('pay');
    }
};

exports.getConfirm = (req,res) => {
    res.render('confirm');
};