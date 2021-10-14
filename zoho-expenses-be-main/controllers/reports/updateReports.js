// const newReportSchema = require("../../models/reports/reports")
const bulkImport = require("../../models/reports/bulkImport")
const bulkImportSchema = require("../../models/reports/bulkImport")

const updateReports = async (req, res) => {
    const currentReport = await bulkImportSchema.findOne({
        reportName: req.body.reportName,
        email: req.body.email
    })
    // console.log(currentReport.name);
    const updateReport = await bulkImportSchema.updateOne({
        reportName: req.body.reportName,
        email: req.body.email
    },{
        reportName: req.body.newReportName || currentReport.reportName,
        businessPurpose: req.body.newBusinessPurpose || currentReport.businessPurpose,
        startDate: req.body.newStartDate || currentReport.startDate,
        endDate: req.body.newEndDate || currentReport.endDate,
        associateWithTrip: req.body.newAssociateWithTrip || currentReport.associateWithTrip,
    })
    // console.log(updateReport);
    res.end(JSON.stringify(updateReport))
}

const updateExpenseInReport = async (req, res) => {
    let reportDetails = {
        _id: req.body.reportId
    }
    let updatedReport = await bulkImportSchema.findOneAndUpdate(reportDetails,
        {
            total: req.body.amount,
            $addToSet: {expenseList: {expenseId: req.body.expenseId}},
            $push: {historyList: {message: `Total of ${req.body.amount} is added`}}
        }, {new: true})
    console.log(updatedReport)
    res.end(JSON.stringify(updatedReport))
}

const updateAdvanceInReport = async (req, res) => {
    let reportDetails = {
        _id: req.body.reportId
    }
    let updatedReport = await bulkImportSchema.findOneAndUpdate(reportDetails,
        {
            toBeReimbursed: req.body.amount,
            $addToSet: {advanceList: {advanceId: req.body.advanceId}},
            $push: {historyList: {message: `An Advance payment of ${req.body.amount} has been applied`}}
        }, {new: true})
    console.log(updatedReport)
    res.end(JSON.stringify(updatedReport))
}

module.exports = {updateReports, updateExpenseInReport, updateAdvanceInReport}