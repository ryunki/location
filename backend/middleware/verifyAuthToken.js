const jwt = require('jsonwebtoken')
const config = process.env

const verifyAuthToken = (req,res,next) => {
  let token = req.body.token || req.query.token || req.headers['authorization']
  if (!token){
    return res.status(403).send('A token is required for authentication') // status 403 is forbidden
  }
  try{
    token=token.replace(/^Bearer\s+/,"")
    const decoded = jwt.verify(token, config.JWT_SECRET_KEY)
    req.user = decoded
    return next()
  }catch(error){
    return res.status(401).send('Invalid Token')
  }
}

module.exports = verifyAuthToken