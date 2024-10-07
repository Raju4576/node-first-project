
var user = require('../model/usermodel');
var cart = require('../model/catmodel')
exports.insert = async (req, res) => {
    try {

        req.body.image = req.file.originalname
        var data = await user.create(req.body);
        res.status(200).json({
            status: 'success',
            data
        })

    }
    catch (e) {
        res.status(200).json({
            status: 'Error',
            e
        })
    }

}


exports.cart_insert = async (req, res) => {
    try {

        // req.body.image=req.file.originalname
        var data = await cart.create(req.body);
        res.status(200).json({
            status: 'success',
            data
        })

    }
    catch (e) {
        res.status(200).json({
            status: 'Error',
            e
        })
    }

}


exports.select = async (req, res) => {
    try {
        userid=req.body.user_id

        // req.body.image=req.file.originalname
        var data = await cart.find({user_id:userid}).populate('user_id');
        res.status(200).json({
            status: 'success',
            data
        })

    }
    catch (e) {
        res.status(200).json({
            status: 'Error',
            e
        })
    }

}


