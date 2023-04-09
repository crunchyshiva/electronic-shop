const db = require('../dbConfig/database');
const constants = require('../common/constant');
const Order = require('../schemas/order');


exports.orderPlaced = (req,res) => {
    const orderData = req.body;
    Order
    .create(orderData)
    .then((response) => {
        res.status(200).send({ success: true, message: constants.responseMessage.ROOT_NODE_SUCCESS });
    })
    .catch((err) => {
    console.log(err,'err')
        res.send({ success: false, message: constants.responseMessage.ROOT_NODE_FAILS });
    }); 
}