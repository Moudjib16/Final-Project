const { name } = require('ejs');
const User = require('../models/user');

exports.getHome = async (req, res) => {
    try {
        const profile = await User.findById(req.session.userID);

        if (!profile) {
            const defaultProfile = {
                name: "Log",
                firstname: "In",
                userType: 0
            };
            console.log("Profile not found. Using default profile.");
            res.render('home', { stylesheet: 'home/', title: 'Home', profile: defaultProfile });
        } else {
            console.log("Profile found:", profile);
            res.render('home', { stylesheet: 'home/', title: 'Home', profile });
        }
    } catch (error) {
        console.error("Error retrieving profile:", error);
        res.status(500).send("Error retrieving profile");
    }
};

exports.getRedirectHome = (req,res) => {
    res.redirect('/');
};