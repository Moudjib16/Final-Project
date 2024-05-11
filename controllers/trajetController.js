const { name } = require('ejs');
const User = require('../models/user');

exports.getTrajet = async (req, res) => {
    try {
        const profile = await User.findById(req.session.userID);
        const queryParams = req.query;
        console.log(queryParams);
        if (!profile) {
            const defaultProfile = {
                name: "Log",
                firstname: "In",
                userType: 0
            };
            res.render('trajet', {profile: defaultProfile , trajet: queryParams});
        } else {
            res.render('trajet', {profile , trajet: queryParams});
        }
    } catch (error) {
        console.error("Error retrieving profile:", error);
        res.status(500).send("Error retrieving profile");
    }
};