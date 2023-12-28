var usermodel = require('../model/usermodel');

exports.insert = async (req, res, next) => {
    var data = await usermodel.create(req.body);
    res.status(200).json({
        status: 'success',
        data
    })
}