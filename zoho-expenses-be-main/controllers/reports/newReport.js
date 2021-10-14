// const newReportSchema = require("../../models/reports/reports")
const bulkImportSchema = require("../../models/reports/bulkImport")

const newReport = async (req, res) => {
    try {
        const startDate = new Date(req.body.startDate).getTime()
        const endDate = new Date(req.body.endDate).getTime()
        const report = new bulkImportSchema({
            email: req.body.email,
            reportName: req.body.reportName,
            businessPurpose: req.body.businessPurpose,
            startDate: startDate,
            endDate: endDate,
            associateWithTrip: req.body.associateWithTrip,
            status: req.body.status,
            // history: req.body.history
            historyList: req.body.historyList,
            total: req.body.total || 0,
            toBeReimbursed: req.body.toBeReimbursed || 0
        })
        await report.save()
        // console.log(report)
        res.end(JSON.stringify(report))
    } catch (err) {
        console.log(err);
    }
}

module.exports = {newReport}