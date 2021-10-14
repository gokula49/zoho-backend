const bulkImportSchema = require("../../models/reports/bulkImport")

const deleteReport = async (req, res) => {
    try {
        const report = {
            email: req.params.email,
            reportName: req.params.reportName
        }
        const info = await bulkImportSchema.deleteOne(report)
        res.json(info)
    } catch (err) {
        res.json(err)
    }
}

module.exports = {deleteReport}
