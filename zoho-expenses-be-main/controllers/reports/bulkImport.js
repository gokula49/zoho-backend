const bulkImportSchema = require("../../models/reports/bulkImport")

const bulkImport = async (req, res) => {
    try {
        for (let document in req.body) {
            // console.log(req.body[document]);
            let report = new bulkImportSchema(req.body[document])
            await report.save()
        }

        res.json({
            status: "success"
        })
    } catch (err) {
        console.log(err);
    } 
}

module.exports = {bulkImport}