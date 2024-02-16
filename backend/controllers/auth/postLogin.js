const UserModel = require('../../models/user') 
const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')

const postLogin = async(req,res,next)=>{
  const {username, password} = req.body
  if (!(username && password)){
    return res.status(401).send('Missing username or password' )
  }
  try{
    const userExists = await UserModel.findOne({username})

    if (userExists && await bcrypt.compare(password, userExists.password)){
      const token = jwt.sign({ username }, process.env.JWT_SECRET_KEY, { expiresIn: '24h' })
      res.status(200).json({
        userDetails:{
          _id: userExists._id,
          username: userExists.name,
          token
        }
      })
    }else{
      return res.status(400).send('Invalid credentials, Please try again')
    }
  }catch(error){
    return res.status(500).send('Could not login. Please try again')
  }
}

module.exports = postLogin