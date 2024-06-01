const Report = require('../models/report');
const User = require('../models/user')

module.exports.createReport_post = async (req,res) => {
    const { driverName, clientName, reason } = req.body;
    
    try {
        const report = await Report.create({driverName, clientName, reason });
        res.status(201).json(report);
    }
    catch (err) {
        console.log(err);
        res.status(400);
    }
}

exports.getReport = async (req, res) => {
    const exclude = { _id: 0, createdAt: 0, updatedAt: 0 };
    try {
        const profile = await User.findById(req.session.userID).lean();
        const reports = await Report.find({}, exclude);
        const defaultProfile = {
            name: "Log",
            firstname: "In",
            userType: 0
        };
        if (!profile) {
            req.session.returnTo = req.originalUrl;
            res.render("notsigned", { profile: defaultProfile });
        } else {
            res.render('reports', { reports, profile });
        }
    } catch (err) {
        console.error(err);
        res.status(500).send('Internal Server Error');
    }
};
