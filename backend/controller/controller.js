const User = require('../model/userModel')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

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



exports.signIn = (req, res, next) => {


    const { email, password } = req.body;
  
    //simple validation
    if (!email || !password) {
        res.status(406).json({ msg: "All fields are required" })
    }
  
    User.findOne({ email: email })
        .then(user => {
  
             if (user) {
                 
                bcrypt.compare(password, user.password)
                    .then(isMatch => {
                        if (isMatch) {
                            const token = jwt.sign({ email: user.email, id: user._id, 
                                fname: user.fname, lname: user.lname, role: user.role }, process.env.jwtSecret);
                            res.json({ token, email: user.email, id: user._id, 
                                fname: user.fname, lname: user.lname, role: user.role });
                        } else {
  
                            res.status(408).send({ msg: "Password doesn't match" });
                        }
                    });
            } else {
                res.status(403).send({ msg: "User doesn't exist" });
            }
        }).catch(err => {
            res.json({ msg: err });
          });
        };
  









     