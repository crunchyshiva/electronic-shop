const bcrypt = require('bcrypt');
const db = require('../dbConfig/database');
const constants = require('../common/constant');
const User = require('../schemas/user');
const saltRounds = 10;
const salt = bcrypt.genSaltSync(saltRounds);

exports.createUser = (req, res) => {
  const userData = req.body;
  const hash = bcrypt.hashSync(userData.password, salt);
  userData.password =  hash;
  userData.confirmPassword =  hash;
  User
		.create(userData)
		.then((response) => {
			res.status(200).send({ success: true, message: constants.responseMessage.ROOT_NODE_SUCCESS });
		})
		.catch((err) => {
      console.log(err,'err')
			res.send({ success: false, message: constants.responseMessage.ROOT_NODE_FAILS });
		});
   
};


exports.loginUser = (req, res) => {
  const {email,password} = req.body
  User
  .findOne({ where: { email } })
  .then((userData) => {
    if(bcrypt.compareSync(password,userData.password)){
      res.status(200).send({ success: true, message: constants.responseMessage.ROOT_NODE_SUCCESS });    
    }else{
      res.status(404).send({ success: false, message: constants.responseMessage.FAILED_RESPONSE });
    }
  })
  .catch((err) => {
    res.send({ success: false, message: constants.responseMessage.ROOT_NODE_FAILS });
  });
}