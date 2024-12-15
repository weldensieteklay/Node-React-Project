
//Sign up
exports.signUp = async (req, res, next) => {

  const { first_name, last_name, email } = req.body;
  if (!first_name || !last_name || !email) {
    return res.status(400).json({ errors: 'All fields are required' });
  }

  res.status(200).send({
    token: 'weldat', email: 'weldat@gmail.com', _id: '1234',
    first_name: 'weldat', phone: '78533074', last_name: 'emb', role: 'admin'
  });

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




