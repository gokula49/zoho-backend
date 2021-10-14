const newReportSchema = require("../../models/reports/reports")
const bulkImportSchema = require("../../models/reports/bulkImport")

const getAllReports = async (req, res) => {
    const AllReports = newReportSchema.find({email: req.params.email}, function(err1, result1) {
        if (err1) {
            console.log(err1);
        } else {
            const bulkReports = bulkImportSchema.find({email: req.params.email}, function(err2, result2) {
                if (err2) {
                    console.log(err2);
                } else {
                    let result = result1.concat(result2)
                    // console.log(bulkReports);
                    // console.log(result1);
                    // console.log(result2);
                    res.send(result);
                }
            })
        }
    })
}

const getPendingReports = async (req, res) => {
    const PendingReports = newReportSchema.find({email: req.params.email,status: "DRAFT"}, function(err, result) {
        if (err) {
            console.log(err);
        } else {
            res.json(result)
        }
    })
}

const getApprovedReports = async (req, res) => {
    const ApprovedReports = newReportSchema.find({email: req.params.email,status: "APPROVED"}, function(err, result) {
        if (err) {
            console.log(err);
        } else {
            res.json(result)
        }
    })
}

const getReportsByID = async (req, res) => {
    const reportFindedByID = bulkImportSchema.findOne({email: req.params.email, _id: req.params._id}, function(err, result) {
        if (err) {
            // console.log(err)
            res.end(err)
        } else {
            res.json(result)
        }
    })
}

module.exports = {
    getAllReports,
    getPendingReports,
    getApprovedReports,
    getReportsByID
}