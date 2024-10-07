const only = require('../model/onlyimage');
exports.insert = async (req, res) => {
    req.body.image = req.file.originalname;
    var data = await only.create(req.body);
    res.status(200).json({
        status: 'success',
        data
    })
}