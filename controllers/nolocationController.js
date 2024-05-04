const { name } = require('ejs');
const User = require('../models/user');

exports.getNoLocation = async (req, res) => {
    try {
        const profile = await User.findById(req.session.userID);

        if (!profile) {
            const defaultProfile = {
                name: "Log",
                firstname: "In",
                userType: 0
            };
            res.render('nolocation', {profile: defaultProfile });
        } else {
            res.render('nolocation', {profile });
        }
    } catch (error) {
        console.error("Error retrieving profile:", error);
        res.status(500).send("Error retrieving profile");
    }
};