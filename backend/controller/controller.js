
const User = require('../model/userModel')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const ObjectId = require('mongodb').ObjectID;

//Sign up
exports.signUp = async (req, res, next) => {

    const { first_name, last_name, phone, email, password } = req.body;
    //simple validation
    if (!first_name || !last_name || !email || !password || !phone) {
        res.status(400).json({ msg: "All fields are required" })
    }
    try {
        //Check existing user
        let user = await User.findOne({ email: email })

        if (user) {
            return res.status(400).json({ msg: "User already exists" })
        }

        bcrypt.hash(password, 12)
            .then(async hashedPassword => {
                const user = new User({
                    first_name,
                    last_name,
                    email,
                    password: hashedPassword,
                    phone: phone,

                });

                await user.save()
                const token = jwt.sign({ email: user.email, id: user._id, first_name: user.first_name,
                     last_name: user.last_name }, 'weldat');

                res.status(200).send({
                    token, email: user.email, id: user._id,
                    first_name: user.first_name, last_name: user.last_name
                });

            })

    }
    catch (err) {
        res.status(400).send({ msg: err });
    };
};



//User logn in
exports.signIn = (req, res) => {

  const { email, password } = req.body;

  //simple validation
  if (!email || !password) {
    res.status(406).json({ message: "All fields are required" })
  }
  res.status(200).send({
    token: 'weldat', email: 'weldat@gmail.com', _id: '1234',
    first_name: 'weldat', phone: '7853335074', last_name: 'emb', role: 'admin'
  });
};




