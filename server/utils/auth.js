const jwt = require('jsonwebtoken');

const secret = 'mysecretsshhhhh';
const expiration = '2h';

module.exports = {
  authMiddleware: function ({req}) {
    let token = req.body.token || req.query.token || req.headers.authorization;
    if (req.headers.authorization) {
      token = token.split(' ').pop().trim();
    }
    if (!token) {
      console.log(">>>>>>>>>>>token is prob undef<<<<<<<<<<<");
      return req;
    }
    try {
      const { data } = jwt.verify(token, secret, { maxAge: expiration });
      req.user = data;
    } catch {
      console.log('(">>>>>>>>>>>Invalid token<<<<<<<<<<<");');
    }
   return req;
  },
  signToken: function ({ name, email, _id }) {
    const payload = { name, email, _id };
    console.log('(">>>>>>>>>>>Token in process of being signed<<<<<<<<<<<");');
    return jwt.sign({ data: payload }, secret, { expiresIn: expiration });
  }
};