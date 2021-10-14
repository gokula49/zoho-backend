const Trip= require('../models/trips');

const deleteTrip = async (req, res) => {
    console.log('hi')
    try {
        const trip = {
            _id: req.params.id
        }
        const info = await Trip.deleteOne(trip)
        res.json(info)
    } catch (err) {
        res.json(err)
    }
}

module.exports = {deleteTrip};
