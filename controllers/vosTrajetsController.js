const { name } = require('ejs');
const User = require('../models/user');

exports.getvosTrajets = async (req, res) => {
    try {
        const profile = await User.findById(req.session.userID);

        if (!profile) {
            const defaultProfile = {
                name: "Log",
                firstname: "In",
                userType: 0
            };
            res.render('vosTrajets', {profile: defaultProfile });
        } else {
            res.render('vosTrajets', {profile });
        }
    } catch (error) {
        console.error("Error retrieving profile:", error);
        res.status(500).send("Error retrieving profile");
    }
};

exports.getPlan = async (req, res) => {
    try {
        const profile = await User.findById(req.session.userID);

        if (!profile) {
            const defaultProfile = {
                name: "Log",
                firstname: "In",
                userType: 0
            };
            res.render('plan', {profile: defaultProfile });
        } else {
            res.render('plan', {profile });
        }
    } catch (error) {
        console.error("Error retrieving profile:", error);
        res.status(500).send("Error retrieving profile");
    }
};